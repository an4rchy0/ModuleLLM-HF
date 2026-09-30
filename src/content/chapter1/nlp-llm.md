# 2. Natural Language Processing and Large Language Models

## 2.1 Berbagai tugas NLP

Transformer dapat digunakan untuk banyak tugas NLP.

### Text Classification

Model memberikan kategori terhadap sebuah teks.

Contoh:

> "OMG i love programming"

Pada output akhir model memberikan:

> POSITIVE

Contoh penggunaan:

* Sentiment Analysis;
* Klasifikasi Topik;
* Spam detection

---

### Token Classification

Berbeda dari yang sebelumnya dengan text classification, **Token Classification memberikan label terhadap setiap token**.

Salah satu contohnya adalah **Named Entity Recognition (NER)**.

Contohnya:

> "My cat working as programmer in Indonesia".

Model dapat mengidentifikasi sebagai:

* Cat -> Tokoh utama/Person/Animal
* Programmer -> Profesion/Pekerjaan
* Indonesia -> Location

Model juga dapat melakukan proses grouping terhadap beberapa token yang sebenarnya merupakan satu entity.

Misalnya:

> Hugging + Face

Digabung menjadi:

> Hugging Face -> ORG

Hal ini berkaitan dengan proses tokenization karena satu kata dapat dipecah menjadi beberapa token.

---

### Question Answering

Question Answering dapat digunakan untuk menemukan jawaban dari sebuah pertanyaan berdasarkan **context** tertentu.

Contoh:

**Question:**

> Where do I work?

**Context:**

> My cat working as programmer in Indonesia.

Output:

> Indonesia

Oleh karena itu model question ini akan menjawab berdasarkan context dan bukan membuat dengan jawaban yang baru.

---

### Summarization

Proses merubah teks panjang menjadi teks yang lebih pendek dengan tetapp mempertahankan informasi penting.

Tujuan utamanya adalah bukan hanya memotong jumlah kata, tetapi mempertahankan informasi penting dari teks asli.

---

### Translation

Transformer juga dapat digunakan untuk menerjemahkan teks dari suatu bahasa ke bahasa yang lainnya.

Contoh:

> "I just recopy material LLM from Hugging Face just to be understand material with typing"

menjadi:

> "Saya hanya melakukan ketik ulang materi dari Hugging Face hanya untuk memahami materi dengan mengetik"

---

### Text Generation

Merupakan proses menghasilkan teks berdasarkan input yang diberikan.

Example:

> "I will make ... cake tommorrow"

Model dapat melanjutkan kalimat tersebut sebagai:

> "I will make a strawberry cake tommorrow"

Intinya adalah model akan melanjutkan kalimat tersebut dengan memprediksi tokenn berikutnya secara berurutan.

---

## 2.2 Transformer tidak hanya untuk teks

Transformer dapat digunakan untuk untuk

### Computer Vision

Contohnya:

* Image classification
* Object detection
* Image segmentation
* Depth estimation

Contoh model
* ViT
* DETR
* Mask2Former
* GLPN

### Speech dan Audio

Transformer juga dapat digunakan untuk:

* Speech Recognition
* Audio Procesing

Salah satuu contoh model yang ditujukan adalah **Whisper** untuk automatic speech recognition.

Dengan demikian transformer merupakan arsitektur yang dapat diterapkan pada berbagai jenis data atau **modalities** bukan hanya teks.

---
