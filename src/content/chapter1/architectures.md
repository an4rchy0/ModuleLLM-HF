# 6. Transformer Architecture

Chapter menjelaskan tiga jenis arsitektur utama.

## 6.1 Encoder-only

Encoder-only model hanya menggunakan bagian encoder.

Contoh:

* BERT;
* RoBERTa.

Arsitektur ini cocok untuk tugas yang membutuhkan pemahaman terhadap input.

Contohnya:

* text classification;
* sentiment analysis;
* NER;
* extractive question answering.

Karena encoder dapat melihat konteks dari kedua arah, model dapat menggunakan informasi sebelum dan sesudah token yang sedang diproses.

---

## 6.2 Decoder-only

Decoder-only model menggunakan bagian decoder.

Contoh:

* GPT;
* LLaMA.

Model jenis ini sangat cocok untuk **text generation**.

Cara kerjanya:

```text
Token 1
  ↓
Prediksi Token 2
  ↓
Prediksi Token 3
  ↓
Prediksi Token 4
  ↓
...
```

Model hanya menggunakan token sebelumnya untuk memprediksi token berikutnya.

Pendekatan ini disebut **causal language modeling (CLM)**.

---

## 6.3 Encoder-decoder

Encoder-decoder menggunakan kedua bagian:

```text
Input
 ↓
Encoder
 ↓
Representation
 ↓
Decoder
 ↓
Output
```

Model ini cocok ketika input perlu diubah menjadi output lain.

Contoh:

* translation;
* summarization;
* sequence-to-sequence tasks.

Contoh model:

* BART;
* T5;
* mBART;
* Marian.

---

## 6.4 Masked Language Modeling

Model encoder seperti BERT dapat dilatih menggunakan **Masked Language Modeling (MLM)**.

Contoh:

```text
I love [MASK].
```

Model harus memprediksi kata yang hilang.

Model menggunakan informasi dari sisi kiri dan kanan.

```text
I love [MASK] very much
      ↑
  melihat konteks
  kiri + kanan
```

Tujuannya adalah membuat model memahami konteks secara bidirectional.

---

## 6.5 Causal Language Modeling

Model decoder seperti GPT menggunakan **Causal Language Modeling (CLM)**.

Contoh:

```text
I love
```

Model memprediksi:

```text
NLP
```

Kemudian:

```text
I love NLP
```

Model memprediksi token berikutnya.

Model tidak boleh menggunakan token masa depan ketika memprediksi token saat ini.

---

## 6.6 Pretraining → Fine-tuning

Salah satu konsep penting dari Transformer adalah model dapat dipretrain terlebih dahulu.

Kemudian model yang sudah memiliki pengetahuan umum tersebut dapat digunakan untuk task tertentu.

Contohnya:

```text
Large Dataset
     ↓
Pretraining
     ↓
Pretrained Model
     ↓
Fine-tuning
     ↓
Specific Task
```

Hal ini membuat pengembangan model untuk task tertentu menjadi jauh lebih efisien dibandingkan melatih model dari awal.

---

## 6.7 Arsitektur dan task

Secara sederhana:

| Arsitektur      | Cocok untuk                   | Contoh        |
| --------------- | ----------------------------- | ------------- |
| Encoder-only    | Memahami/menganalisis input   | BERT, RoBERTa |
| Decoder-only    | Menghasilkan teks             | GPT, LLaMA    |
| Encoder-decoder | Mengubah input menjadi output | T5, BART      |

Contoh pemetaan:

* Sentiment → Encoder
* NER → Encoder
* Extractive QA → Encoder
* Text Generation → Decoder
* Translation → Encoder-decoder
* Summarization → Encoder-decoder
* Conversational AI → Decoder

Pemilihan arsitektur bergantung pada karakteristik task: apakah kita perlu **memahami input**, **menghasilkan teks**, atau **mengubah satu sequence menjadi sequence lainnya**.

---
