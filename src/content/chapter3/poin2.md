# 2. Continuing — Menyiapkan Dataset untuk Fine-Tuning

Setelah memahami konsep fine-tuning, langkah berikutnya adalah menyiapkan dataset yang akan digunakan.

Sebagai contoh, digunakan dataset **MRPC (Microsoft Research Paraphrase Corpus)**.

Dataset ini berisi pasangan kalimat dan label yang menunjukkan apakah kedua kalimat tersebut memiliki makna yang ekuivalen atau merupakan paraphrase.

Dataset MRPC terdiri dari:

* **3.668** data training
* **408** data validation
* **1.725** data test

Dataset tersebut tersedia melalui Hugging Face Hub dan dapat dimuat menggunakan library `datasets`:

```python
from datasets import load_dataset

raw_datasets = load_dataset("glue", "mrpc")
```

Hasilnya berupa `DatasetDict` yang berisi beberapa split:

```text
train
validation
test
```

Setiap data memiliki beberapa kolom, antara lain:

* `sentence1`
* `sentence2`
* `label`
* `idx`

Label MRPC terdiri dari dua kelas:

```text
0 → not_equivalent
1 → equivalent
```

Dataset yang sudah tersedia di Hugging Face Hub dapat langsung digunakan sebagai dasar preprocessing dan training.

### Preprocessing Dataset

Model Transformer tidak menerima teks mentah secara langsung. Teks harus diubah menjadi representasi numerik menggunakan tokenizer.

Contohnya:

```python
from transformers import AutoTokenizer

checkpoint = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

tokenized_sentences_1 = tokenizer(raw_datasets["train"]["sentence1"])
tokenized_sentences_2 = tokenizer(raw_datasets["train"]["sentence2"])
```

Namun, karena MRPC merupakan tugas yang membandingkan **dua kalimat**, kedua kalimat harus diberikan sebagai pasangan kepada tokenizer.

```python
inputs = tokenizer(
    "This is the first sentence.",
    "This is the second one."
)
```

Untuk model BERT, hasilnya dapat memiliki:

* `input_ids`
* `token_type_ids`
* `attention_mask`

### `token_type_ids`

`token_type_ids` digunakan untuk menunjukkan bagian mana yang berasal dari kalimat pertama dan bagian mana yang berasal dari kalimat kedua.

Strukturnya kira-kira:

```text
[CLS] sentence1 [SEP] sentence2 [SEP]
  0       0        0       1        1
```

Dengan demikian, model dapat membedakan dua bagian input tersebut.

Perlu diperhatikan bahwa **tidak semua model menggunakan `token_type_ids`**. Misalnya, pada DistilBERT field tersebut tidak dikembalikan. Tokenizer akan menyesuaikan input berdasarkan checkpoint/model yang digunakan.

### Tokenisasi seluruh dataset

Daripada melakukan tokenisasi satu data setiap kali, kita dapat menggunakan `Dataset.map()`.

```python
def tokenize_function(example):
    return tokenizer(
        example["sentence1"],
        example["sentence2"],
        truncation=True
    )

tokenized_datasets = raw_datasets.map(
    tokenize_function,
    batched=True
)
```

`batched=True` membuat preprocessing dilakukan terhadap beberapa data sekaligus sehingga proses tokenisasi menjadi lebih cepat. Library 🤗 Tokenizers sendiri menggunakan implementasi Rust untuk melakukan tokenisasi secara cepat.

### Mengapa Padding Tidak Dilakukan Saat Tokenisasi?

Pada tahap ini, `padding` sengaja tidak langsung diberikan.

Alasannya adalah efisiensi.

Misalnya dalam satu dataset terdapat kalimat sepanjang:

```text
32 token
50 token
67 token
100 token
```

Jika semuanya langsung dipadding ke panjang maksimum dataset, banyak token tambahan yang sebenarnya tidak diperlukan.

Karena itu digunakan konsep **dynamic padding**.

### Dynamic Padding

Dynamic padding berarti padding dilakukan **ketika data akan dibuat menjadi batch**, sehingga setiap batch hanya dipadding sampai panjang maksimum yang ada pada batch tersebut.

Untuk melakukan hal ini digunakan:

```python
from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(
    tokenizer=tokenizer
)
```

Misalnya satu batch memiliki panjang:

```text
50, 59, 47, 67, 59, 50, 62, 32
```

Maka seluruh data dalam batch tersebut cukup dipadding sampai:

```text
67 token
```

bukan sampai panjang maksimum seluruh dataset.

Hal ini dapat mengurangi padding yang tidak diperlukan dan membuat proses training lebih efisien.

---
