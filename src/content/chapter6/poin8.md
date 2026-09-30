## 8. Unigram Tokenization

Unigram digunakan bersama **SentencePiece** dan digunakan oleh model seperti ALBERT, T5, mBART, BigBird, dan XLNet.

SentencePiece mempunyai karakteristik penting: input dapat diproses sebagai **raw input stream**, sehingga pendekatan ini tidak bergantung pada spasi sebagai pemisah kata. Hal tersebut berguna untuk bahasa yang tidak selalu menggunakan spasi sebagai pemisah kata.

### Perbedaan arah training

BPE dan WordPiece pada dasarnya mulai dari vocabulary kecil lalu **menambahkan token**.

Unigram melakukan kebalikannya:

```text
Vocabulary besar
      ↓
Menghitung loss
      ↓
Menghapus token yang paling tidak penting
      ↓
Vocabulary semakin kecil
      ↓
Ukuran vocabulary target
```

Pada setiap langkah, Unigram menghitung loss corpus berdasarkan vocabulary saat ini. Kemudian dihitung perubahan loss jika setiap token dihapus.

Token yang penghapusannya memberikan peningkatan loss paling kecil dianggap paling tidak diperlukan dan menjadi kandidat untuk dihapus.

Unigram tidak menghapus karakter dasar agar setiap kata tetap dapat ditokenisasi.

### Cara tokenisasi

Unigram menggunakan probabilitas token.

Misalnya vocabulary awal:

```python
["h", "u", "g", "hu", "ug", "p", "pu", "n", "un", "b", "bu", "s", "hug", "gs", "ugs"]
```

Frekuensi subword dapat dihitung:

```python
("h", 15) ("u", 36) ("g", 20) ("hu", 15) ("ug", 20) ("p", 17) ("pu", 17) ("n", 16)
("un", 16) ("b", 4) ("bu", 4) ("s", 5) ("hug", 15) ("gs", 5) ("ugs", 5)
```

Probabilitas sebuah token ditentukan berdasarkan frekuensinya terhadap total frekuensi token.

Satu kata dapat mempunyai beberapa kemungkinan segmentasi.

Contoh:

```python
["p", "u", "g"] : 0.000389
["p", "ug"] : 0.0022676
["pu", "g"] : 0.0022676
```

Segmentasi dengan probabilitas lebih tinggi lebih disukai.

Dengan demikian, Unigram dapat dipahami sebagai pendekatan yang mencari segmentasi berdasarkan **probabilitas subword**, bukan sekadar melakukan merge secara berurutan seperti BPE atau WordPiece.

---
