# 3. Apa saja yang bisa dilakukan?

## 3.1 `pipeline()`

Hugging Face menyediakan fungsi `pipeline()` untuk mempermudah penggunaan pretrained Transformer.

Secara sederhana:

```text
Input
↓
Preprocessing
↓
Transformer Model
↓
Post-processing
↓
Output
```

`pipeline()` menggabungkan proses-proses teserbut sehingga pengguna tidak harus menangani setiap bagian secara manual.

Contohnya:

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis")

classifier("I've been waiting for a HuggingFace course my whole life.")

Model akan menghasilkan prediksi seperti:
```text
POSITIVE
```

Dengan 'pipeline()', pengguna dapat langsung mencoba model pretrained untuk berbagai task.

---

## 3.2 Tiga proses utama dalam pipeline

Ketika sebuah input diberikan kepada pipeline, terdapat tiga tahap utama:

### 1. Preprocessing

Input diubah menjadi format yang dapat dipahami model.

Untuk teks, proses ini mencakup tokenization.

Contoh:
```text
"I love NLP"
```

diubah menjadi representasi token.

### 2. Model Processing

Token yang telah diproses diberikan kepada Transformer.

Model kemudian menghasilkan representasi atau prediksi.

### 3. Post-processing

Output mentah dari model diubah menjadi format yang lebih mudah dipahami manusia.

Contohnya:

```text
label = POSITIVE
score = 0.95
```

Jadi pipeline berfungsi sebgaai penghubung antara input manusia dengan proses internal model.

---

## 3.3 Contoh kemampuan Transformer

Chapter memberikan beberapa contoh kemampuan Transformer:

| Task                 | Fungsi                          |
| -------------------- | ------------------------------- |
| Sentiment Analysis   | Menentukan sentimen teks        |
| Text Classification  | Mengklasifikasikan teks         |
| Fill Mask            | Mengisi bagian teks yang kosong |
| NER                  | Menemukan entity dalam teks     |
| Question Answering   | Menemukan jawaban dari context  |
| Summarization        | Membuat ringkasan               |
| Translation          | Menerjemahkan teks              |
| Text Generation      | Menghasilkan teks               |
| Image Classification | Mengklasifikasikan gambar       |
| Speech Recognition   | Mengubah suara menjadi teks     |

Jadi satu arsitektur Transformer dapat digunakan untuk berbagai macam kebutuhan dengan model dan konfigurasi yang berbeda.

---

