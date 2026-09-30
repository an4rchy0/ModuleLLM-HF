# Chapter 3 — Fine-Tuning a Pretrained Model

## 1. Introduction

Pada Chapter 2, kita sudah mempelajari bagaimana menggunakan **pretrained model** dan tokenizer untuk menghasilkan prediksi. Pada Chapter 3, pembahasannya berkembang ke tahap berikutnya, yaitu **fine-tuning**.

Fine-tuning adalah proses melatih kembali model yang sebelumnya sudah pretrained menggunakan dataset yang lebih spesifik terhadap tugas tertentu.

Secara umum, alur yang dipelajari dalam chapter ini adalah:

**Pretrained Model → Dataset → Preprocessing → Fine-tuning → Evaluation → Optimization**

Chapter ini memperkenalkan beberapa library dalam ekosistem Hugging Face:

* **🤗 Datasets** → mengambil, menyimpan, dan memproses dataset.
* **🤗 Transformers** → menyediakan pretrained model dan API untuk training.
* **🤗 Tokenizers** → melakukan tokenisasi teks secara efisien.
* **🤗 Evaluate** → menghitung metrik evaluasi.
* **🤗 Accelerate** → membantu menjalankan training pada berbagai hardware, termasuk beberapa GPU atau TPU.

Chapter ini berfokus pada **PyTorch** sebagai framework deep learning yang digunakan dalam proses training.

Ada tiga pendekatan utama yang dipelajari:

1. **Preprocessing dataset** secara efisien.
2. Fine-tuning menggunakan **`Trainer` API**.
3. Membuat **training loop sendiri menggunakan PyTorch**, kemudian menggunakan **Accelerate** untuk distributed training.

Pada akhir chapter, kita memahami bagaimana melakukan fine-tuning model BERT untuk tugas **text classification** dan bagaimana menerapkan konsep tersebut pada dataset atau task lain.

---
