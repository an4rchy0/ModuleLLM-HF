# Chapter 2 — Penggunaan Transformers

## 1. Pendahuluan

Pada Chapter 1, kita sudah diperkenalkan dengan Transformer dan penggunaan fungsi `pipeline()` untuk menjalankan berbagai tugas NLP.

Namun, `pipeline()` sebenarnya menyembunyikan banyak proses yang terjadi di belakangnya.

Ketika kita menjalankan:

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis")
classifier("I love this course!")
```

terlihat sangat sederhana.

Tetapi di balik proses tersebut terdapat beberapa tahapan:

```text
Text
 ↓
Tokenizer
 ↓
Numerical Inputs
 ↓
Transformer Model
 ↓
Model Output
 ↓
Post-processing
 ↓
Prediction
```

Chapter 2 bertujuan untuk membuka proses tersebut dan memahami bagaimana setiap komponennya bekerja.

---

### 1.1 Masalah yang ingin diselesaikan Transformers

Model Transformer biasanya berukuran besar dan memiliki jutaan hingga miliaran parameter.

Masalahnya:

* model memiliki ukuran besar;
* setiap model dapat memiliki implementasi yang berbeda;
* proses training membutuhkan resource besar;
* deployment model tidak sederhana;
* mencoba banyak model satu per satu dapat menjadi sulit.

Library **🤗 Transformers** dibuat untuk memberikan API yang seragam sehingga berbagai model Transformer dapat digunakan dengan cara yang relatif konsisten.

---

### 1.2 Tiga karakteristik utama Transformers

Chapter menjelaskan tiga keunggulan utama library Transformers:

#### Ease of use

Pengguna dapat:

* download model;
* load model;
* melakukan inference;

dengan kode yang relatif sederhana.

Hal ini membuat pengguna tidak harus memahami seluruh implementasi internal model hanya untuk menjalankannya.

---

#### Flexibility

Model Transformers pada dasarnya dapat digunakan sebagai model dalam framework machine learning seperti PyTorch.

Dengan demikian, model dapat diperlakukan seperti model `nn.Module` biasa.

Artinya, pengguna tetap dapat melakukan berbagai operasi machine learning terhadap model tersebut.

---

#### Simplicity

Transformers berusaha menjaga implementasi model agar relatif mudah dipahami.

Salah satu konsepnya adalah **"All in one file"**.

Implementasi forward pass dari suatu model didefinisikan dalam file model tersebut sehingga pengguna dapat lebih mudah membaca, memahami, dan memodifikasi kode.

Hal ini juga memungkinkan eksperimen pada satu model tanpa harus mengubah implementasi model lain.

---

### 1.3 Tujuan Chapter 2

Chapter 2 akan membongkar proses yang sebelumnya disembunyikan oleh `pipeline()`.

Urutannya:

```text
pipeline()
   ↓
Model + Tokenizer
   ↓
Tokenizer
   ↓
Numerical Inputs
   ↓
Transformer Model
   ↓
Predictions
```

Materi kemudian membahas:

* model API;
* configuration;
* loading model;
* tokenizer;
* tokenization;
* input IDs;
* attention mask;
* padding;
* truncation;
* batching;
* tensor PyTorch;
* model output;
* penggunaan tokenizer secara langsung;
* optimized inference.

Dengan memahami bagian-bagian tersebut, kita tidak lagi hanya menggunakan `pipeline()`, tetapi mulai memahami apa yang terjadi di baliknya.

---