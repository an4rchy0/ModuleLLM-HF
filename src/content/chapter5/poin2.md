Tidak semua dataset tersedia di Hugging Face Hub.

Dataset yang kita butuhkan bisa saja berada:

* di laptop;
* di desktop;
* di server perusahaan;
* di remote server;
* dalam bentuk file lokal;
* dalam URL tertentu.

🤗 Datasets menyediakan `load_dataset()` untuk memuat berbagai format data tersebut.

## Working with local and remote datasets

Beberapa format data yang umum didukung:

| **Data format**    | **Loading script** | **Example**                                             |
| ------------------ | ------------------ | ------------------------------------------------------- |
| CSV & TSV          | `csv`              | `load_dataset("csv", data_files="my_file.csv")`         |
| Text files         | `text`             | `load_dataset("text", data_files="my_file.txt")`        |
| JSON & JSON Lines  | `json`             | `load_dataset("json", data_files="my_file.jsonl")`      |
| Pickled DataFrames | `pandas`           | `load_dataset("pandas", data_files="my_dataframe.pkl")` |

Pada dasarnya kita menentukan:

1. format dataset;
2. lokasi file melalui `data_files`.

Contohnya:

```python
from datasets import load_dataset

dataset = load_dataset(
    "csv",
    data_files="my_file.csv"
)
```

---

## Loading a local dataset

Sebagai contoh, digunakan **SQuAD-it**, yaitu dataset question answering berbahasa Italia.

File dataset dapat di-download terlebih dahulu:

```bash
!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-train.json.gz
!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-test.json.gz
```

Kemudian file `.gz` dapat didekompresi:

```bash
!gzip -dkv SQuAD_it-*.json.gz
```

Setelah file menjadi JSON, dataset dapat dimuat menggunakan:

```python
from datasets import load_dataset

squad_it_dataset = load_dataset(
    "json",
    data_files="SQuAD_it-train.json",
    field="data"
)
```

Hasilnya berupa `DatasetDict`:

```text
DatasetDict({
    train: Dataset({
        features: ['title', 'paragraphs'],
        num_rows: 442
    })
})
```

Artinya dataset memiliki:

* split `train`;
* 442 rows;
* kolom `title`;
* kolom `paragraphs`.

Contoh data dapat dilihat menggunakan:

```python
squad_it_dataset["train"][0]
```

---

## Loading multiple splits

Kita juga dapat menentukan beberapa file sekaligus menggunakan dictionary pada `data_files`.

```python
data_files = {
    "train": "SQuAD_it-train.json",
    "test": "SQuAD_it-test.json"
}

squad_it_dataset = load_dataset(
    "json",
    data_files=data_files,
    field="data"
)

squad_it_dataset
```

Hasilnya:

```text
DatasetDict({
    train: Dataset({
        features: ['title', 'paragraphs'],
        num_rows: 442
    })
    test: Dataset({
        features: ['title', 'paragraphs'],
        num_rows: 48
    })
})
```

Dengan cara ini, kita dapat memiliki `train` dan `test` dalam satu `DatasetDict`.

---

## `data_files` cukup fleksibel

`data_files` dapat berupa:

* satu file;
* list file;
* dictionary yang memetakan nama split ke file;
* pattern menggunakan wildcard/glob.

Contohnya:

```python
data_files = "data/*.json"
```

Artinya seluruh file JSON yang sesuai pattern akan digunakan sebagai dataset.

🤗 Datasets juga dapat melakukan dekompresi otomatis untuk format umum seperti:

* GZIP;
* ZIP;
* TAR.

Sehingga kita dapat langsung memberikan file terkompresi:

```python
data_files = {
    "train": "SQuAD_it-train.json.gz",
    "test": "SQuAD_it-test.json.gz"
}

squad_it_dataset = load_dataset(
    "json",
    data_files=data_files,
    field="data"
)
```

---

## Loading a remote dataset

Dataset juga tidak harus di-download secara manual terlebih dahulu.

Jika file tersedia pada remote server atau URL, URL tersebut dapat langsung diberikan ke `data_files`.

Contohnya:

```python
url = "https://github.com/crux82/squad-it/raw/master/"

data_files = {
    "train": url + "SQuAD_it-train.json.gz",
    "test": url + "SQuAD_it-test.json.gz",
}

squad_it_dataset = load_dataset(
    "json",
    data_files=data_files,
    field="data"
)
```

Dengan demikian:

```text
Remote File
     ↓
load_dataset()
     ↓
Dataset / DatasetDict
```

Tidak diperlukan proses download dan dekompresi secara manual.

---
