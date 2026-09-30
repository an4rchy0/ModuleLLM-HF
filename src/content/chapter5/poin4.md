# 4. Big data? Datasets to the rescue!

Dataset machine learning dapat memiliki ukuran yang sangat besar.

Contohnya, corpus dapat berukuran:

```text
GB → puluhan GB → ratusan GB → TB
```

Jika dataset terlalu besar untuk RAM atau bahkan hard drive lokal, pendekatan biasa akan menjadi masalah.

Datasets menyediakan dua konsep penting untuk mengatasi masalah ini:

1. **Memory mapping**
2. **Streaming**

---

## Memory mapping

🤗 Datasets menggunakan **memory-mapped files**.

Secara sederhana, memory mapping memungkinkan dataset tetap berada pada filesystem dan hanya bagian data yang diperlukan yang diakses ke memory.

Jadi bukan:

```text
Dataset besar
     ↓
Load semuanya
     ↓
RAM
```

melainkan lebih seperti:

```text
Dataset di filesystem
        ↓
Memory mapping
        ↓
Ambil bagian yang dibutuhkan
        ↓
RAM
```

Memory mapping merupakan mapping antara RAM dan filesystem storage.

Keuntungannya adalah aplikasi tidak harus memasukkan seluruh file besar ke RAM untuk mengakses sebagian data.

Di balik mekanisme tersebut digunakan **Apache Arrow** dan `pyarrow`.

---

## Mengukur penggunaan RAM

Library `psutil` dapat digunakan untuk melihat penggunaan RAM:

```python
!pip install psutil
```

Kemudian:

```python
import psutil

print(
    f"RAM used: "
    f"{psutil.Process().memory_info().rss / (1024 * 1024):.2f} MB"
)
```

Ukuran dataset pada disk dapat dilihat melalui:

```python
print(f"Dataset size in bytes: {pubmed_dataset.dataset_size}")

size_gb = pubmed_dataset.dataset_size / (1024**3)

print(
    f"Dataset size (cache file): "
    f"{size_gb:.2f} GB"
)
```

Dengan memory mapping, dataset yang ukurannya jauh lebih besar daripada RAM tetap dapat diakses tanpa harus memuat seluruh dataset ke memory sekaligus.

---

## Streaming datasets

Memory mapping membantu ketika dataset masih dapat disimpan pada disk.

Namun, bagaimana jika dataset bahkan terlalu besar untuk disimpan di hard drive?

Gunakan **streaming**.

Streaming dapat diaktifkan dengan:

```python
pubmed_dataset_streamed = load_dataset(
    "json",
    data_files=data_files,
    split="train",
    streaming=True
)
```

Ketika menggunakan:

```python
streaming=True
```

hasilnya bukan `Dataset`, tetapi:

```text
IterableDataset
```

Data kemudian diakses dengan melakukan iteration.

Contohnya:

```python
next(iter(pubmed_dataset_streamed))
```

Data tidak perlu di-download seluruhnya terlebih dahulu. Data diakses secara bertahap ketika dibutuhkan.

---

## Processing streamed dataset

`IterableDataset` tetap dapat diproses menggunakan `map()`.

Contohnya tokenisasi:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(
    "distilbert-base-uncased"
)

tokenized_dataset = pubmed_dataset_streamed.map(
    lambda x: tokenizer(x["text"])
)

next(iter(tokenized_dataset))
```

Kita juga dapat menggunakan:

```python
batched=True
```

untuk memproses data secara batch:

```python
tokenized_dataset = pubmed_dataset_streamed.map(
    lambda x: tokenizer(x["text"]),
    batched=True
)
```

---

## Shuffle pada streaming dataset

Streaming dataset dapat di-shuffle:

```python
shuffled_dataset = pubmed_dataset_streamed.shuffle(
    buffer_size=10_000,
    seed=42
)
```

Perbedaannya dengan `Dataset.shuffle()` adalah streaming dataset menggunakan **buffer**.

---

## `take()` dan `skip()`

Untuk mengambil sebagian data dari streamed dataset:

```python
dataset_head = pubmed_dataset_streamed.take(5)

list(dataset_head)
```

Untuk melewati sejumlah data:

```python
train_dataset = shuffled_dataset.skip(1000)
validation_dataset = shuffled_dataset.take(1000)
```

Dengan demikian:

```text
Streamed Dataset
       ↓
shuffle()
       ↓
       ├── take(1000) → validation
       └── skip(1000) → training
```

Teknik ini berguna ketika dataset terlalu besar untuk di-download atau disimpan seluruhnya secara lokal.

---
