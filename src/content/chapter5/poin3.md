Dataset yang kita dapatkan biasanya belum langsung siap digunakan.

Sering kali kita perlu:

* membersihkan data;
* menghapus data yang tidak valid;
* membuat kolom baru;
* mengubah nilai kolom;
* melakukan filtering;
* melakukan sorting;
* memilih subset data;
* mengubah format dataset.

🤗 Datasets menyediakan berbagai fungsi untuk melakukan data manipulation.

Contoh dataset yang digunakan pada bagian ini adalah **Drug Review Dataset**, yang berisi review pasien mengenai obat, kondisi yang ditangani, serta rating kepuasan.

---

## `Dataset.map()`

`map()` digunakan untuk menerapkan fungsi terhadap data.

Contoh membuat fungsi untuk mengubah `condition` menjadi lowercase:

```python
def lowercase_condition(example):
    return {"condition": example["condition"].lower()}
```

Kemudian:

```python
drug_dataset.map(lowercase_condition)
```

Namun, apabila terdapat nilai `None`, kode tersebut akan menghasilkan error karena `None` tidak memiliki method `.lower()`.

Karena itu, data perlu dibersihkan terlebih dahulu menggunakan `filter()`.

---

## `Dataset.filter()`

`filter()` digunakan untuk mempertahankan data yang memenuhi kondisi tertentu.

Contohnya:

```python
drug_dataset = drug_dataset.filter(
    lambda x: x["condition"] is not None
)
```

Atau menggunakan function:

```python
def filter_nones(x):
    return x["condition"] is not None

drug_dataset = drug_dataset.filter(filter_nones)
```

Dengan demikian, data yang memiliki `condition = None` dapat dihapus.

---

## Creating new columns

Kita juga dapat membuat kolom baru menggunakan `map()`.

Contohnya menghitung jumlah kata dalam setiap review:

```python
def compute_review_length(example):
    return {
        "review_length": len(example["review"].split())
    }
```

Kemudian:

```python
drug_dataset = drug_dataset.map(compute_review_length)
```

Kolom baru:

```text
review_length
```

akan ditambahkan ke dataset.

Alternatif lainnya adalah `Dataset.add_column()`.

---

## Filtering berdasarkan kolom baru

Setelah `review_length` dibuat, kita dapat membuang review yang terlalu pendek:

```python
drug_dataset = drug_dataset.filter(
    lambda x: x["review_length"] > 30
)
```

Artinya hanya review dengan jumlah kata lebih dari 30 yang dipertahankan.

---

## Membersihkan HTML characters

Dataset yang berasal dari web dapat memiliki HTML character codes.

Contoh:

```python
import html

text = "I&#039;m a transformer called BERT"

html.unescape(text)
```

Output:

```text
"I'm a transformer called BERT"
```

Untuk menerapkannya ke seluruh dataset:

```python
drug_dataset = drug_dataset.map(
    lambda x: {"review": html.unescape(x["review"])}
)
```

---

## `batched=True`

`Dataset.map()` memiliki parameter `batched`.

Jika:

```python
batched=False
```

fungsi dipanggil terhadap satu contoh pada satu waktu.

Sedangkan:

```python
batched=True
```

fungsi menerima beberapa contoh sekaligus.

Contohnya:

```python
new_drug_dataset = drug_dataset.map(
    lambda x: {
        "review": [html.unescape(o) for o in x["review"]]
    },
    batched=True
)
```

Pendekatan ini dapat mempercepat processing karena beberapa data diproses sekaligus.

`batched=True` juga sangat penting ketika menggunakan **fast tokenizer**, karena tokenizer tersebut dirancang untuk memproses banyak input sekaligus.

---

## `num_proc`

Untuk preprocessing tertentu, kita juga dapat menggunakan multiprocessing:

```python
tokenized_dataset = drug_dataset.map(
    tokenize_function,
    batched=True,
    num_proc=8
)
```

Namun, penggunaan `num_proc` perlu disesuaikan dengan proses yang digunakan. Untuk fast tokenizer dengan `batched=True`, multiprocessing Python tidak selalu memberikan keuntungan tambahan.

---

## Mengubah jumlah data dengan `map()`

`map()` dengan `batched=True` juga dapat digunakan ketika satu contoh menghasilkan beberapa feature.

Untuk contoh tokenisasi teks panjang:

```python
def tokenize_and_split(examples):
    return tokenizer(
        examples["review"],
        truncation=True,
        max_length=128,
        return_overflowing_tokens=True,
    )
```

Parameter:

```python
return_overflowing_tokens=True
```

memungkinkan teks panjang dipecah menjadi beberapa bagian.

---

## Dataset → Pandas

🤗 Datasets juga dapat digunakan bersama Pandas.

Untuk mengubah format output menjadi Pandas:

```python
drug_dataset.set_format("pandas")
```

Kemudian:

```python
drug_dataset["train"][:3]
```

dapat menghasilkan `pandas.DataFrame`.

Jika ingin mengambil seluruh training set:

```python
train_df = drug_dataset["train"][:]
```

Setelah menjadi DataFrame, kita dapat menggunakan operasi Pandas.

Contohnya menghitung distribusi `condition`:

```python
frequencies = (
    train_df["condition"]
    .value_counts()
    .to_frame()
    .reset_index()
    .rename(
        columns={
            "index": "condition",
            "count": "frequency"
        }
    )
)

frequencies.head()
```

---

## Pandas → Dataset

Setelah selesai melakukan analisis menggunakan Pandas, kita dapat mengubah DataFrame kembali menjadi Dataset:

```python
from datasets import Dataset

freq_dataset = Dataset.from_pandas(frequencies)

freq_dataset
```

Hasilnya merupakan objek `Dataset`.

Jadi alurnya:

```text
🤗 Dataset
     ↓
set_format("pandas")
     ↓
Pandas DataFrame
     ↓
Analisis / Manipulasi
     ↓
Dataset.from_pandas()
     ↓
🤗 Dataset
```

---

## Membuat validation set

Dataset biasanya memiliki `train` dan `test`.

Namun selama development, sebaiknya test set tidak digunakan terus-menerus untuk evaluasi.

Kita dapat membuat validation set dari training data menggunakan:

```python
drug_dataset_clean = drug_dataset["train"].train_test_split(
    train_size=0.8,
    seed=42
)
```

Kemudian mengubah split `test` menjadi `validation`:

```python
drug_dataset_clean["validation"] = drug_dataset_clean.pop("test")
```

Dan menambahkan test set asli:

```python
drug_dataset_clean["test"] = drug_dataset["test"]
```

Hasil akhirnya:

```text
DatasetDict({
    train: ...
    validation: ...
    test: ...
})
```

Dengan struktur:

```text
Original train
     ↓
train_test_split()
     ├── train
     └── validation

Original test
     ↓
test
```

---

## Saving a dataset

🤗 Datasets menyediakan beberapa cara untuk menyimpan dataset:

| **Data format** | **Function**             |
| --------------- | ------------------------ |
| Arrow           | `Dataset.save_to_disk()` |
| CSV             | `Dataset.to_csv()`       |
| JSON            | `Dataset.to_json()`      |

Contoh menyimpan dalam format Arrow:

```python
drug_dataset_clean.save_to_disk("drug-reviews")
```

Dataset tersebut kemudian dapat dimuat kembali:

```python
from datasets import load_from_disk

drug_dataset_reloaded = load_from_disk("drug-reviews")
```

Format Arrow dirancang untuk pemrosesan dataset berperforma tinggi.

---