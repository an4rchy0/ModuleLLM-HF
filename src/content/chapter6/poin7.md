## 7. WordPiece Tokenization

**WordPiece** dikembangkan Google untuk pretraining BERT dan kemudian digunakan oleh berbagai model berbasis BERT seperti DistilBERT, MobileBERT, Funnel Transformers, dan MPNET.

WordPiece mirip dengan BPE dalam proses training, tetapi mempunyai cara berbeda dalam memilih pasangan token yang akan digabungkan.

### Training algorithm

WordPiece menggunakan prefix `##` untuk menandai subword yang berada di dalam sebuah kata.

Misalnya:

```text
word
```

awalnya menjadi:

```text
w ##o ##r ##d
```

Berbeda dengan BPE yang memilih pasangan berdasarkan frekuensi tertinggi, WordPiece menghitung **score** untuk setiap pasangan:

```math
score=(freq_of_pair)/(freq_of_first_element×freq_of_second_element)
```

Pasangan dengan score paling tinggi dipilih untuk digabungkan.

Contoh corpus:

```python
("hug", 10), ("pug", 5), ("pun", 12), ("bun", 4), ("hugs", 5)
```

Representasinya:

```python
("h" "##u" "##g", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("h" "##u" "##g" "##s", 5)
```

Setelah pasangan tertentu digabung, vocabulary dapat berkembang menjadi:

```python
Vocabulary: ["b", "h", "p", "##g", "##n", "##s", "##u", "##gs"]
Corpus: ("h" "##u" "##g", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("h" "##u" "##gs", 5)
```

Kemudian merge berikutnya dapat menghasilkan:

```python
Vocabulary: ["b", "h", "p", "##g", "##n", "##s", "##u", "##gs", "hu"]
Corpus: ("hu" "##g", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("hu" "##gs", 5)
```

dan akhirnya:

```python
Vocabulary: ["b", "h", "p", "##g", "##n", "##s", "##u", "##gs", "hu", "hug"]
Corpus: ("hug", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("hu" "##gs", 5)
```

### Perbedaan utama BPE dan WordPiece

| BPE                                          | WordPiece                                    |
| -------------------------------------------- | -------------------------------------------- |
| Memilih pasangan dengan frekuensi tertinggi  | Memilih pasangan dengan score tertinggi      |
| Merge berdasarkan frekuensi                  | Merge berdasarkan rasio frekuensi            |
| Tidak menggunakan `##` sebagai penanda utama | Menggunakan `##` untuk subword di dalam kata |

Perlu diperhatikan bahwa materi juga menyebut bahwa implementasi training WordPiece milik Google tidak bersifat open-source, sehingga algoritma yang dijelaskan merupakan rekonstruksi berdasarkan literatur dan tidak dijamin 100% identik dengan implementasi aslinya.

---
