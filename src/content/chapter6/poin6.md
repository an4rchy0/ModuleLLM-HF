## 6. Byte-Pair Encoding Tokenization

**Byte-Pair Encoding (BPE)** awalnya dikembangkan sebagai algoritma kompresi teks. Kemudian algoritma ini digunakan OpenAI untuk tokenisasi GPT dan digunakan oleh berbagai model Transformer seperti GPT, GPT-2, RoBERTa, BART, dan DeBERTa.

### Training algorithm

BPE memulai training dengan:

1. Mengambil semua kata unik dari corpus setelah normalization dan pre-tokenization.
2. Membuat vocabulary awal dari karakter-karakter yang muncul.
3. Menghitung pasangan token yang paling sering muncul.
4. Menggabungkan pasangan tersebut menjadi token baru.
5. Mengulangi proses sampai ukuran vocabulary yang diinginkan tercapai.

Contoh corpus:

```python
"hug", "pug", "pun", "bun", "hugs"
```

Dengan frekuensi:

```python
("hug", 10), ("pug", 5), ("pun", 12), ("bun", 4), ("hugs", 5)
```

Awalnya setiap kata dipecah menjadi karakter:

```python
("h" "u" "g", 10), ("p" "u" "g", 5), ("p" "u" "n", 12), ("b" "u" "n", 4), ("h" "u" "g" "s", 5)
```

Kemudian dihitung pasangan karakter yang paling sering.

Pasangan:

```text
("u", "g")
```

muncul paling banyak, sehingga digabung menjadi:

```text
("u", "g") -> "ug"
```

Vocabulary menjadi:

```python
Vocabulary: ["b", "g", "h", "n", "p", "s", "u", "ug"]
Corpus: ("h" "ug", 10), ("p" "ug", 5), ("p" "u" "n", 12), ("b" "u" "n", 4), ("h" "ug" "s", 5)
```

Kemudian proses dilanjutkan dengan pasangan yang paling sering berikutnya:

```python
("u", "n") -> "un"
("h", "ug") -> "hug"
```

Dengan demikian, BPE secara bertahap membangun subword yang sering muncul dalam corpus.

### Tokenization algorithm

Saat digunakan untuk melakukan tokenisasi, BPE menerapkan merge rules yang telah dipelajari ketika training.

Jadi secara sederhana:

```text
Corpus
  ↓
Hitung frekuensi pasangan
  ↓
Pilih pasangan paling sering
  ↓
Merge
  ↓
Vocabulary baru
  ↓
Ulangi
```

Salah satu keunggulan pendekatan ini adalah kata yang sering muncul dapat direpresentasikan sebagai satu atau beberapa subword besar, sedangkan kata yang lebih jarang masih dapat dipecah menjadi bagian-bagian yang tersedia dalam vocabulary.

---