Chapter 5 membahas beberapa pertanyaan penting:

* Bagaimana jika dataset tidak tersedia di Hugging Face Hub?
* Bagaimana melakukan slicing, filtering, dan manipulasi dataset?
* Bagaimana menggunakan Pandas bersama 🤗 Datasets?
* Bagaimana menangani dataset yang sangat besar?
* Apa itu **memory mapping** dan **Apache Arrow**?
* Bagaimana membuat dataset sendiri?
* Bagaimana meng-upload dataset ke Hugging Face Hub?
* Bagaimana menggunakan dataset untuk membuat **semantic search** dengan FAISS?

Dengan demikian, Chapter 5 lebih berfokus pada **data preparation dan data management** sebelum dataset digunakan untuk training model.

---

# 1. Introduction

Pada Chapter 3, 🤗 Datasets digunakan dalam proses fine-tuning model.

Alur sederhananya:

```text
Load Dataset
     ↓
Dataset.map()
     ↓
Preprocessing
     ↓
Training
     ↓
Evaluation
```

Pada Chapter 5, pembahasannya diperluas.

🤗 Datasets dapat digunakan untuk:

* memuat dataset dari berbagai sumber;
* membersihkan dataset;
* memfilter data;
* memilih sebagian data;
* mengubah format data;
* bekerja dengan Pandas;
* menangani dataset berukuran sangat besar;
* membuat dataset sendiri;
* menyimpan dataset;
* meng-upload dataset ke Hugging Face Hub;
* membuat semantic search menggunakan embeddings dan FAISS.

Jadi, fokus utama chapter ini bukan lagi hanya **menggunakan dataset untuk training**, tetapi memahami bagaimana dataset dikelola dari awal sampai siap digunakan.

---