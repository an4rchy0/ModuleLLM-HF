# 5. Creating your own dataset

Tidak semua kebutuhan NLP memiliki dataset yang sudah tersedia.

Jika dataset yang dibutuhkan belum tersedia, kita dapat **membuat dataset sendiri**.

Pada Chapter 5 digunakan contoh dataset berupa **GitHub issues** dari repository 🤗 Datasets.

Dataset tersebut dapat digunakan untuk berbagai kebutuhan, misalnya:

* menganalisis issue;
* membuat classifier;
* mengelompokkan issue berdasarkan label;
* membuat semantic search engine.

---

## Getting the data

Data GitHub issues dapat diperoleh menggunakan GitHub REST API.

Library `requests` dapat digunakan untuk melakukan HTTP request:

```python
!pip install requests
```

Kemudian:

```python
import requests
```

Data yang diperoleh dari API dapat diproses menjadi dataset menggunakan 🤗 Datasets.

Intinya:

```text
GitHub API
    ↓
JSON data
    ↓
Data processing
    ↓
🤗 Dataset
```

---

## Uploading the dataset to the Hub

Setelah dataset selesai dibuat dan diproses, dataset dapat dibagikan ke Hugging Face Hub.

Pertama lakukan login:

```python
from huggingface_hub import notebook_login

notebook_login()
```

Atau melalui terminal:

```bash
huggingface-cli login
```

Kemudian dataset dapat di-upload menggunakan:

```python
issues_with_comments_dataset.push_to_hub(
    "github-issues"
)
```

Setelah dataset di-upload, pengguna lain dapat mengambilnya menggunakan:

```python
from datasets import load_dataset

remote_dataset = load_dataset(
    "lewtun/github-issues",
    split="train"
)

remote_dataset
```

Dengan demikian, dataset yang kita buat sendiri dapat digunakan kembali oleh komunitas.

---

## Creating a dataset card

Selain dataset, dokumentasi juga penting.

Dataset yang dibagikan sebaiknya memiliki **dataset card**.

Dataset card membantu pengguna memahami:

* bagaimana dataset dibuat;
* isi dataset;
* intended use;
* task yang sesuai;
* kemungkinan bias;
* risiko penggunaan dataset;
* informasi lain yang relevan.

Dataset card disimpan pada:

```text
README.md
```

di repository dataset pada Hugging Face Hub.

Dataset card juga dapat memiliki metadata agar dataset lebih mudah ditemukan dan dikategorikan pada Hub.

---