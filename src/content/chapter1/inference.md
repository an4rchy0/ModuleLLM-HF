# 7. Deep Dive into Text Generation / LLM Inference

Bagian ini berfokus pada bagaimana LLM menghasilkan teks ketika model sudah selesai dilatih.

## 7.1 Apa itu inference?

**Inference** adalah proses menggunakan model yang sudah dilatih untuk menghasilkan output berdasarkan input.

Contoh:

```text
Prompt
 ↓
LLM
 ↓
Prediksi token
 ↓
Output
```

LLM tidak langsung menghasilkan seluruh jawaban sekaligus.

Model menghasilkan token secara bertahap.

---

## 7.2 Attention dalam inference

Attention membantu model menentukan informasi mana yang relevan ketika memprediksi token berikutnya.

Misalnya:

> "The capital of France is ..."

Model perlu memperhatikan kata:

* capital;
* France.

Informasi tersebut membantu model memprediksi:

> Paris

Jadi attention membantu model mempertahankan konteks ketika menghasilkan teks.

---

## 7.3 Context Length

LLM bekerja dengan **context** yang memiliki batas tertentu.

Context dapat berisi:

* prompt;
* percakapan sebelumnya;
* dokumen;
* token-token yang sudah dihasilkan.

Semakin panjang context, semakin besar informasi yang harus diproses oleh model.

Namun context yang lebih panjang juga memiliki konsekuensi terhadap:

* memory usage;
* processing time;
* kebutuhan VRAM.

---

## 7.4 Dua tahap utama inference

Proses inference dibagi menjadi:

1. **Prefill**
2. **Decode**

### Prefill

Prefill merupakan tahap ketika model memproses seluruh input awal.

Secara sederhana:

```text
Prompt
 ↓
Tokenization
 ↓
Embedding
 ↓
Transformer processing
 ↓
Context representation
```

Tahap ini memproses token input sebelum model mulai menghasilkan output.

### Decode

Setelah prefill selesai, model mulai menghasilkan output.

Token dihasilkan satu per satu:

```text
Token 1
 ↓
Token 2
 ↓
Token 3
 ↓
Token 4
 ↓
...
```

Setiap token baru bergantung pada token-token sebelumnya.

Inilah yang disebut proses **autoregressive**.

---

## 7.5 Token Selection

Ketika model ingin menghasilkan token berikutnya, model menghasilkan nilai probabilitas/logits untuk token-token yang tersedia dalam vocabulary.

Secara sederhana:

```text
Model
 ↓
Probabilities
 ↓
Token Selection
 ↓
Next Token
```

Misalnya model memperkirakan:

```text
"Paris"     70%
"London"    10%
"Berlin"     5%
"Rome"       3%
...
```

Sistem kemudian menentukan token mana yang akan dipilih berdasarkan strategi decoding/sampling yang digunakan.

---

## 7.6 Sampling Strategies

Strategi sampling digunakan untuk mengontrol bagaimana token berikutnya dipilih.

Beberapa konsep yang dibahas:

### Temperature

Temperature memengaruhi tingkat variasi dalam pemilihan token.

Secara konseptual:

* temperature rendah → output cenderung lebih deterministik;
* temperature lebih tinggi → pilihan token lebih beragam.

---

### Top-k

Top-k membatasi pilihan token hanya pada sejumlah kandidat dengan probabilitas tertinggi.

Contoh:

```text
Vocabulary = 50.000 token

Top-k = 10
```

Maka pemilihan hanya dilakukan dari 10 kandidat teratas.

---

### Top-p

Top-p menggunakan probabilitas kumulatif untuk menentukan kumpulan token kandidat.

Dengan demikian, jumlah kandidat dapat berubah tergantung distribusi probabilitas.

---

## 7.7 Mengontrol Repetition

LLM dapat mengalami pengulangan kata atau frasa.

Materi juga membahas:

### Presence Penalty

Memberikan penalty terhadap token yang sudah pernah muncul.

Tujuannya mengurangi kecenderungan model menggunakan token yang sama.

### Frequency Penalty

Penalty dipengaruhi oleh seberapa sering token tersebut sudah digunakan.

Semakin sering token muncul, semakin besar penalti yang diberikan.

Keduanya digunakan untuk mendorong output agar tidak terlalu repetitif.

---

## 7.8 Mengontrol panjang output

Panjang output dapat dikontrol menggunakan:

### Token limits

Menentukan batas minimum atau maksimum token.

### Stop sequences

Menentukan pola tertentu yang menyebabkan generation berhenti.

### End-of-sequence (EOS)

Model dapat berhenti ketika menghasilkan token khusus yang menandakan akhir sequence.

---

## 7.9 Beam Search

Selain sampling, materi juga membahas **beam search**.

Alih-alih hanya memilih satu kemungkinan token, beam search mempertahankan beberapa kandidat sequence sekaligus.

Secara sederhana:

```text
             ┌─ Candidate A
Input ───────┼─ Candidate B
             ├─ Candidate C
             └─ Candidate D
                    ↓
             pilih kandidat
             paling menjanjikan
```

Proses tersebut dilakukan berulang kali sampai menghasilkan sequence akhir.

Keuntungannya adalah dapat mempertimbangkan beberapa kemungkinan sequence sekaligus, tetapi membutuhkan resource komputasi lebih besar dibandingkan strategi yang lebih sederhana.

---

## 7.10 Performance Metrics

Untuk deployment LLM, beberapa metrik penting adalah:

### Time to First Token (TTFT)

Waktu yang dibutuhkan sampai token pertama muncul.

Metrik ini berkaitan erat dengan pengalaman pengguna dan dipengaruhi oleh proses prefill.

### Time Per Output Token (TPOT)

Waktu yang diperlukan untuk menghasilkan token-token berikutnya.

### Throughput

Jumlah request yang dapat diproses dalam periode tertentu.

Throughput penting untuk sistem yang melayani banyak pengguna.

### VRAM Usage

Jumlah memory GPU yang dibutuhkan.

VRAM dapat menjadi salah satu batasan utama ketika menjalankan LLM.

---

## 7.11 KV Cache

Salah satu optimisasi penting dalam inference adalah **KV Cache**.

Tanpa caching, model harus melakukan perhitungan yang berulang terhadap informasi sebelumnya.

KV Cache menyimpan hasil perhitungan tertentu sehingga dapat digunakan kembali.

Manfaatnya:

* mengurangi perhitungan berulang;
* meningkatkan kecepatan generation;
* membantu membuat long-context generation lebih praktis.

Trade-off-nya adalah penggunaan memory tambahan.

---
