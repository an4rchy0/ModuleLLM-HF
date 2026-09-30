Pada bagian sebelumnya kita telah membuat dataset GitHub issues.

Sekarang dataset tersebut digunakan untuk membuat **semantic search engine**.

Tujuannya adalah memungkinkan pengguna mencari informasi berdasarkan **makna** query, bukan hanya kecocokan kata secara literal.

---

## Apa itu semantic search?

Semantic search menggunakan representasi numerik berupa **embedding** untuk mencari dokumen yang memiliki makna yang mirip dengan query.

Alurnya:

```text
Document
   ↓
Tokenizer / Transformer
   ↓
Embedding Vector
   ↓
FAISS Index
```

Ketika pengguna memasukkan query:

```text
"How can I load a dataset offline?"
```

query tersebut juga diubah menjadi embedding:

```text
Query
  ↓
Embedding Vector
  ↓
Compare with document embeddings
  ↓
Nearest documents
```

Konsep ini berbeda dari keyword search yang terutama mencari kecocokan kata.

Transformer dapat menghasilkan embedding untuk token, kemudian embedding tersebut dapat digunakan sebagai representasi dari keseluruhan teks.

---

## Loading the dataset

Dataset GitHub issues dapat dimuat:

```python
from datasets import load_dataset

issues_dataset = load_dataset(
    "lewtun/github-issues",
    split="train"
)

issues_dataset
```

Dataset tersebut kemudian dibersihkan.

Misalnya pull request dan issue tanpa komentar dihapus:

```python
issues_dataset = issues_dataset.filter(
    lambda x: (
        x["is_pull_request"] == False
        and len(x["comments"]) > 0
    )
)
```

Kemudian hanya kolom yang relevan yang dipertahankan:

```python
columns = issues_dataset.column_names

columns_to_keep = [
    "title",
    "body",
    "html_url",
    "comments"
]

columns_to_remove = set(
    columns_to_keep
).symmetric_difference(columns)

issues_dataset = issues_dataset.remove_columns(
    columns_to_remove
)
```

---

## Mengubah comments menjadi baris terpisah

Karena satu issue dapat memiliki banyak comments, kita ingin setiap comment menjadi satu row.

Dataset terlebih dahulu diubah ke Pandas:

```python
issues_dataset.set_format("pandas")

df = issues_dataset[:]
```

Kemudian gunakan `explode()`:

```python
comments_df = df.explode(
    "comments",
    ignore_index=True
)
```

Setelah selesai dengan Pandas, dataset dibuat kembali:

```python
from datasets import Dataset

comments_dataset = Dataset.from_pandas(
    comments_df
)
```

Sekarang satu row merepresentasikan satu comment.

---

## Membersihkan comments

Kita dapat menghitung panjang comment:

```python
comments_dataset = comments_dataset.map(
    lambda x: {
        "comment_length": len(
            x["comments"].split()
        )
    }
)
```

Kemudian comment yang terlalu pendek dapat dihapus:

```python
comments_dataset = comments_dataset.filter(
    lambda x: x["comment_length"] > 15
)
```

Selanjutnya informasi issue digabung dengan comment:

```python
def concatenate_text(examples):
    return {
        "text": examples["title"]
        + " \n "
        + examples["body"]
        + " \n "
        + examples["comments"]
    }

comments_dataset = comments_dataset.map(
    concatenate_text
)
```

Sekarang setiap row memiliki:

```text
title
   +
body
   +
comment
   ↓
text
```

---

# Creating text embeddings

Untuk membuat embedding, digunakan model dari `sentence-transformers`.

Checkpoint yang digunakan pada contoh:

```python
model_ckpt = (
    "sentence-transformers/"
    "multi-qa-mpnet-base-dot-v1"
)
```

Model dan tokenizer dimuat:

```python
from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained(
    model_ckpt
)

model = AutoModel.from_pretrained(
    model_ckpt
)
```

Model dapat ditempatkan pada GPU:

```python
import torch

device = torch.device("cuda")

model.to(device)
```

---

## CLS pooling

Model menghasilkan embedding untuk setiap token.

Kita membutuhkan satu vector untuk merepresentasikan seluruh teks.

Salah satu pendekatannya adalah **CLS pooling**:

```python
def cls_pooling(model_output):
    return model_output.last_hidden_state[:, 0]
```

Artinya kita mengambil representasi token `[CLS]`.

---

## Membuat fungsi embedding

```python
def get_embeddings(text_list):
    encoded_input = tokenizer(
        text_list,
        padding=True,
        truncation=True,
        return_tensors="pt"
    )

    encoded_input = {
        k: v.to(device)
        for k, v in encoded_input.items()
    }

    model_output = model(**encoded_input)

    return cls_pooling(model_output)
```

Dengan fungsi tersebut, teks dapat diubah menjadi embedding vector.

---

# Using FAISS for efficient similarity search

Setelah dataset memiliki embedding, kita membutuhkan mekanisme untuk mencari embedding yang paling dekat.

Untuk itu digunakan **FAISS**.

FAISS menyediakan struktur data dan algoritma untuk melakukan similarity search terhadap embedding vectors.

Pada 🤗 Datasets, FAISS index dapat dibuat menggunakan:

```python
embeddings_dataset.add_faiss_index(
    column="embeddings"
)
```

Setelah index dibuat, kita dapat mencari nearest examples menggunakan:

```python
scores, samples = (
    embeddings_dataset.get_nearest_examples(
        "embeddings",
        question_embedding,
        k=5
    )
)
```

---

## Membuat embedding untuk query

Contoh query:

```python
question = (
    "How can I load a dataset offline?"
)

question_embedding = (
    get_embeddings([question])
    .cpu()
    .detach()
    .numpy()
)

question_embedding.shape
```

Hasilnya berupa vector dengan dimensi sesuai model embedding.

Kemudian query tersebut digunakan untuk mencari dokumen yang paling dekat:

```python
scores, samples = (
    embeddings_dataset.get_nearest_examples(
        "embeddings",
        question_embedding,
        k=5
    )
)
```

Parameter:

```text
"embeddings"
```

menunjukkan index/kolom embedding yang digunakan.

Sedangkan:

```text
k=5
```

berarti kita meminta 5 nearest examples.

`get_nearest_examples()` mengembalikan:

```text
scores
samples
```

yaitu skor retrieval dan data yang ditemukan.

---

## Hasil semantic search

Hasil pencarian dapat diubah menjadi DataFrame:

```python
import pandas as pd

samples_df = pd.DataFrame.from_dict(
    samples
)

samples_df["scores"] = scores

samples_df.sort_values(
    "scores",
    ascending=False,
    inplace=True
)
```

Kemudian hasil dapat ditampilkan:

```python
for _, row in samples_df.iterrows():
    print(
        f"Score: {row['scores']:.4f}"
    )
    print(
        f"Title: {row['title']}"
    )
    print(
        f"URL: {row['html_url']}"
    )
    print()
```

Dengan demikian, sistem dapat mengembalikan issue/comment yang paling dekat dengan makna query.

---

# Alur lengkap Chapter 5

Secara keseluruhan, Chapter 5 dapat dirangkum menjadi:

```text
Dataset Source
      ↓
┌─────────────────────────────┐
│ Hugging Face Hub            │
│ Local Files                 │
│ Remote Files                │
└─────────────────────────────┘
      ↓
load_dataset()
      ↓
Data Cleaning
      ↓
map()
filter()
select()
      ↓
Data Analysis
      ↓
Pandas / NumPy
      ↓
Train / Validation / Test
      ↓
Large Dataset?
      ↓
Memory Mapping / Streaming
      ↓
Create Own Dataset
      ↓
push_to_hub()
      ↓
Dataset Card
      ↓
Embeddings
      ↓
FAISS
      ↓
Semantic Search
```

---
