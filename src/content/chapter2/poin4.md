# 4. Tokenizer

Tokenizer merupakan salah satu bagian terpenting dalam pipeline NLP.

Model hanya dapat memproses angka, sedangkan pengguna memberikan input dalam bentuk teks.

Karena itu diperlukan tokenizer sebagai penghubung:

```text
Human-readable text
        ↓
     Tokenizer
        ↓
Numerical representation
        ↓
       Model
```

File Chapter 2 menjelaskan bahwa tujuan tokenizer adalah mengubah teks menjadi data yang dapat diproses model.

---

## 4.1 Mengapa tokenizer dibutuhkan?

Misalnya kita memiliki:

```text
Jim Henson was a puppeteer
```

Model tidak dapat menerima kalimat tersebut secara langsung.

Tokenizer mengubahnya menjadi token, kemudian token tersebut menjadi angka.

```text
Jim Henson was a puppeteer
            ↓
["Jim", "Henson", "was", "a", "puppeteer"]
            ↓
[Token IDs]
```

---

# 4.2 Word-based tokenization

Cara paling sederhana adalah memecah teks berdasarkan kata.

Contoh:

```text
Jim Henson was a puppeteer
```

menjadi:

```text
["Jim", "Henson", "was", "a", "puppeteer"]
```

Setiap kata kemudian memiliki ID dalam vocabulary.

### Kelebihan

* mudah dipahami;
* implementasinya sederhana;
* satu kata biasanya menjadi satu token.

### Kekurangan

Vocabulary dapat menjadi sangat besar.

Selain itu, kata yang memiliki bentuk berbeda dapat dianggap sebagai token yang berbeda.

Contoh:

```text
dog
dogs
```

atau:

```text
run
running
```

Tokenizer berbasis kata tidak secara otomatis memahami bahwa kata-kata tersebut memiliki hubungan.

Masalah lainnya adalah kata yang tidak terdapat dalam vocabulary dapat menghasilkan:

```text
[UNK]
```

atau **unknown token**.

Materi menjelaskan bahwa terlalu banyak `[UNK]` menunjukkan tokenizer kehilangan informasi karena tidak menemukan representasi yang sesuai.

---

# 4.3 Character-based tokenization

Pendekatan berikutnya adalah memecah teks berdasarkan karakter.

Contoh:

```text
hello
```

menjadi:

```text
h e l l o
```

### Kelebihan

* vocabulary lebih kecil;
* hampir tidak ada unknown token;
* kata baru tetap dapat direpresentasikan karena tersusun dari karakter.

### Kekurangan

Representasi menjadi lebih panjang.

Satu kata yang sebelumnya hanya membutuhkan satu token dapat berubah menjadi banyak token.

Selain itu, satu karakter biasanya memiliki makna yang lebih sedikit dibandingkan sebuah kata atau subword.

Karena itu character-based tokenization juga bukan solusi sempurna.

---

# 4.4 Subword tokenization

Subword tokenization mencoba menggabungkan kelebihan word-based dan character-based tokenization.

Prinsipnya:

> Kata yang sering digunakan dapat dipertahankan sebagai token, sedangkan kata yang lebih jarang dapat dipecah menjadi subword yang lebih kecil.

Contohnya:

```text
annoyingly
```

dapat dipecah menjadi:

```text
annoying + ly
```

Contoh lainnya:

```text
tokenization
```

dapat direpresentasikan sebagai:

```text
token + ization
```

Keuntungannya:

* vocabulary tidak terlalu besar;
* unknown token dapat diminimalkan;
* kata yang panjang dapat direpresentasikan secara efisien;
* subword masih dapat membawa informasi makna.

Subword tokenization juga sangat berguna untuk bahasa yang memiliki kata kompleks dan panjang.

---

# 4.5 Jenis tokenizer yang umum

Chapter menyebut beberapa teknik:

* **Byte-level BPE** → digunakan oleh GPT-2;
* **WordPiece** → digunakan oleh BERT;
* **SentencePiece / Unigram** → digunakan oleh beberapa model multilingual.

Jadi tidak semua model menggunakan algoritma tokenizer yang sama.

---

# 4.6 Loading tokenizer

Tokenizer dapat dimuat menggunakan:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
```

`AutoTokenizer` akan memilih class tokenizer yang sesuai berdasarkan checkpoint.

Tokenizer juga dapat disimpan dengan:

```python
tokenizer.save_pretrained("directory_on_my_computer")
```

Jadi tokenizer dapat disimpan dan digunakan kembali.

---

# 4.7 Output tokenizer

Ketika kita menjalankan:

```python
tokenizer("Using a Transformer network is simple")
```

tokenizer dapat menghasilkan beberapa jenis informasi, seperti:

```text
input_ids
token_type_ids
attention_mask
```

Contoh:

```text
{
    "input_ids": [...],
    "token_type_ids": [...],
    "attention_mask": [...]
}
```

Ketiganya memiliki fungsi yang berbeda.

---

## 4.8 Special Tokens

Tokenizer dapat menambahkan **special tokens** yang diperlukan oleh model.

Contoh pada BERT:

```text
[CLS] sentence [SEP]
```

`[CLS]` ditambahkan di awal sequence.

`[SEP]` ditambahkan di akhir sequence.

Contohnya:

```text
Input:
I've been waiting for a HuggingFace course.

↓ tokenizer

[CLS] i've been waiting for a huggingface course. [SEP]
```

Special tokens tersebut bukan sekadar tambahan kosmetik.

Model memang dipretrain menggunakan token-token tersebut sehingga tokenizer perlu menambahkannya ketika melakukan inference.

---
