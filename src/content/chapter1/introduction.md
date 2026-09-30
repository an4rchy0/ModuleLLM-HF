## Introduction
### 1.1 Apa yang dimaksud dengan NLP?
Natural Language Processing (NLP) adalah bidang yang berfokus pada bagaimana komputer dapat memahami, memproses, serta menghasilkan bahasa yang serupa seperti manusia.

Dari keragaman bahasa manusia memiliki banyak sekali karakteristik yang kompleks karena satu kata atau kalimat dapat memiliki makna yang berbeda tergantung konteks dan kondisinya.

contoh ketika ketika menyebutkan
> "I went to the bank"

kata **bank** dapat bermakna sebagai sarana keuangan atau tempat di tepi sungai. Oleh karena itu NLP Harus memahami konteks untuk menentukan makna yang tepat.

NLP seringkali digunakan dalam berbagai aplikasi seperti:
* klasifikasi teks
* analisis sentimen
* penerjemahan bahasa
* summarization
* question answering
* named entity recognition
* text generation
* chatbot
* speech recognition

### 1.2 NLP kearah Large Language Models

Perkembangan NLP menghasilkan model bahasa dengan kemampuan yang semakib besar.

**Large Language Model (LLM)** merupakan model bahasa berukuran besar yang dilatih menggunakan data dalam jumlah besar untuk mempelajar pola bahasa.

Model tersebut mempelajari hubungan statistik anatara token-token dalam teks sehingga dapat digunakan untuk:

* Memahami teks
* Memprediksi token berikutnya
* Menghasilkan teks
* Menjawab pertanyaan
* Melakukan berbagai tugas bahasa

Salah satu perkembangan penting dalam LLM adalah penggunaan arsitektur **Transformer**.

### 1.3 Mengapa Transformer penting?

Transformer awalnya diperkenalkan untuk tugas **Machine Translation**, tetapi kemudian digunakan untuk berbagai macam tugas AI.

Transformer menjadi dasar bagi banyak model terkenal seperti:

* BERT
* GPT
* GPT-2
* BART
* T5
* dan berbagai model Transformer lainnya.

Hugging Face menyediakan library **Transformers** untuk menggunakan model-model tersebut.

Selain itu, **Model Hub** yang menyediakan berbagai model pretrained yang dapat digunakan kembali.

### 1.4 Pretraining dan Fine-tuning

Konsep ini merupakan bagian dari konsep **transfer learning**.

Terdapat dua tahapan penting:

**Pretraining**

Model dilatih dari awal menggunakan dataset yang sangat besar dengan tujuan membuat model mempelajari pola umum dari data.

Pretraining membutuhkan:

* Data yang sangat besar
* Waktu komputasi yang besar
* Sumber daya yang besar
* Biaya yang besar

**Fine-Tuning**

Setelah model pretrained tersedia, model dapat dilatih kembali menggunakan dataset yang lebih spesifik sesuai kebutuhan.

Sebagai contoh:

> Model pretrained bahasa Inggris -> Fine-Tuning menggunakan dataset artikel ilmiah -> model menjadi lebih sesuai untuk domain ilmiah.

Keuntungan fine-tuning:
* Membutuhkan data lebih sedikit dibandingkan dengan pretraining
* Waktu training lebih singkat
* Biaya lebih rendah
* Kebutuhan komputasi lebih rendah
* Dapat menghasilkan model yang lebih sesuai dengan tugas tertentu

Dengan demikian, daripada selalu membuat model dari awal kita dapat menggunakan model pretrained kemudian menyesuaikan dengan kebutuhan.