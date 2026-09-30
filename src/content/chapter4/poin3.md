Hugging Face mendorong pengguna yang telah melatih model untuk membagikannya kepada komunitas.

Model yang dibagikan, termasuk model yang dilatih menggunakan dataset yang sangat spesifik, tetap dapat bermanfaat bagi pengguna lain karena:

* menghemat waktu training;
* menghemat resource komputasi;
* menyediakan trained artifact yang dapat digunakan kembali;
* memungkinkan komunitas memanfaatkan hasil pekerjaan yang sudah dilakukan.

Ada **tiga cara utama** untuk membuat model repository baru:

* menggunakan `push_to_hub` API;
* menggunakan library `huggingface_hub`;
* menggunakan web interface.

Setelah repository dibuat, file dapat di-upload menggunakan Git dan Git LFS.

## Menggunakan `push_to_hub` API

Cara sederhana untuk meng-upload model ke Hub adalah menggunakan `push_to_hub`.

Sebelum melakukan upload, diperlukan authentication token agar API mengetahui identitas pengguna dan namespace yang memiliki izin untuk ditulis.

Pada notebook:

```python
from huggingface_hub import notebook_login

notebook_login()
```

Atau melalui terminal:

```bash
huggingface-cli login
```

### Upload menggunakan `Trainer`

Jika menggunakan `Trainer`, model dapat otomatis di-upload ke Hub dengan mengatur:

```python
from transformers import TrainingArguments

training_args = TrainingArguments(
    "bert-finetuned-mrpc",
    save_strategy="epoch",
    push_to_hub=True
)
```

Ketika:

```python
trainer.train()
```

dijalankan, `Trainer` akan meng-upload model ke Hub setiap kali model disimpan.

Setelah training selesai, versi terakhir model dapat di-upload menggunakan:

```python
trainer.push_to_hub()
```

Proses ini juga menghasilkan **model card** dengan metadata yang relevan, termasuk hyperparameters dan evaluation results.

### Upload model dan tokenizer secara langsung

Model dan tokenizer juga memiliki method `push_to_hub()`.

Contohnya:

```python
from transformers import AutoModelForMaskedLM, AutoTokenizer

checkpoint = "camembert-base"

model = AutoModelForMaskedLM.from_pretrained(checkpoint)
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
```

Setelah model siap:

```python
model.push_to_hub("dummy-model")
```

Kemudian tokenizer juga di-upload:

```python
tokenizer.push_to_hub("dummy-model")
```

Jika repository berada pada organization tertentu:

```python
tokenizer.push_to_hub(
    "dummy-model",
    organization="huggingface"
)
```

Dengan demikian, repository dapat berisi file model sekaligus tokenizer.

---

## Menggunakan `huggingface_hub` Python library

Library `huggingface_hub` menyediakan tools dan API untuk berinteraksi dengan Hugging Face Hub.

Library ini dapat digunakan untuk:

* mengelola repository;
* membuat repository;
* menghapus repository;
* mengubah visibility repository;
* mengambil informasi repository;
* melakukan upload file;
* mengelola model dan dataset.

Contoh import:

```python
from huggingface_hub import (
    login,
    logout,
    whoami,

    create_repo,
    delete_repo,
    update_repo_visibility,

    list_models,
    list_datasets,
    list_metrics,
    list_repo_files,
    upload_file,
    delete_file,
)
```

Repository dapat dibuat dengan:

```python
from huggingface_hub import create_repo

create_repo("dummy-model")
```

Repository juga dapat dibuat pada organization:

```python
from huggingface_hub import create_repo

create_repo(
    "dummy-model",
    organization="huggingface"
)
```

Beberapa parameter yang dapat digunakan antara lain:

* `private` → menentukan apakah repository bersifat private;
* `token` → menggunakan token tertentu;
* `repo_type` → menentukan tipe repository seperti `"dataset"` atau `"space"`.

---

## Menggunakan web interface

Repository juga dapat dibuat langsung melalui web interface Hugging Face Hub.

Melalui interface tersebut, pengguna dapat:

* membuat repository;
* menambahkan file;
* meng-upload file berukuran besar;
* melihat model;
* melihat perubahan atau diff;
* mengelola repository.

Saat membuat repository, pengguna dapat menentukan:

* owner repository;
* nama model;
* apakah model public atau private.

Repository kemudian dapat diisi dengan `README.md`.

File `README.md` menggunakan Markdown dan menjadi tempat penting untuk mendokumentasikan model.

---

## Uploading model files

Sistem pengelolaan file pada Hugging Face Hub menggunakan:

* **Git** untuk regular files;
* **Git LFS (Git Large File Storage)** untuk file berukuran besar.

Ada beberapa pendekatan untuk meng-upload file.

### `upload_file`

Pendekatan `upload_file` tidak membutuhkan Git dan Git LFS secara langsung.

Contohnya:

```python
from huggingface_hub import upload_file

upload_file(
    "<path_to_file>/config.json",
    path_in_repo="config.json",
    repo_id="<namespace>/dummy-model",
)
```

Pendekatan ini memiliki keterbatasan untuk file berukuran lebih dari **5 GB**.

---

## `Repository` class

`Repository` class digunakan untuk mengelola local repository dengan pendekatan seperti Git.

Contohnya:

```python
from huggingface_hub import Repository

repo = Repository(
    "<path_to_dummy_folder>",
    clone_from="<namespace>/dummy-model"
)
```

Setelah repository di-clone, tersedia beberapa method seperti:

```python
repo.git_pull()
repo.git_add()
repo.git_commit()
repo.git_push()
repo.git_tag()
```

Model dan tokenizer dapat disimpan ke folder repository:

```python
model.save_pretrained("<path_to_dummy_folder>")
tokenizer.save_pretrained("<path_to_dummy_folder>")
```

Kemudian file dapat di-stage, commit, dan push:

```python
repo.git_add()
repo.git_commit("Add model and tokenizer files")
repo.git_push()
```

---

## Git-based approach

Pendekatan paling langsung adalah menggunakan Git dan Git LFS.

Pertama, Git LFS perlu diinisialisasi:

```bash
git lfs install
```

Kemudian repository dapat di-clone:

```bash
git clone https://huggingface.co/<namespace>/<your-model-id>
```

Masuk ke repository:

```bash
cd dummy && ls
```

Setelah model dan tokenizer disimpan ke repository, file dapat terlihat seperti:

```text
config.json
pytorch_model.bin
README.md
sentencepiece.bpe.model
special_tokens_map.json
tokenizer_config.json
tokenizer.json
```

File model yang besar akan ditangani menggunakan Git LFS.

File kemudian dapat ditambahkan:

```bash
git add .
```

Status Git dapat diperiksa:

```bash
git status
```

Status Git LFS juga dapat diperiksa:

```bash
git lfs status
```

Setelah itu lakukan commit:

```bash
git commit -m "First model version"
```

Dan upload ke Hub:

```bash
git push
```

Dengan demikian, file model dan tokenizer akan tersedia di model repository pada Hugging Face Hub.

---