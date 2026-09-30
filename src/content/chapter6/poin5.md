## 5. Normalization and Pre-tokenization

Sebelum teks diproses oleh algoritma subword seperti BPE, WordPiece, atau Unigram, tokenizer melakukan beberapa tahap preprocessing.

Secara umum:

```text
Text
  ↓
Normalization
  ↓
Pre-tokenization
  ↓
Subword Tokenization
  ↓
Post-processing
```

### Normalization

Normalization merupakan tahap pembersihan teks, misalnya:

* Menghapus whitespace yang tidak diperlukan.
* Mengubah huruf menjadi lowercase.
* Menghapus accent.
* Melakukan Unicode normalization.

Kita dapat melihat normalizer yang digunakan tokenizer:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
print(type(tokenizer.backend_tokenizer))
```

Kemudian:

```python
print(tokenizer.backend_tokenizer.normalizer.normalize_str("Héllò hôw are ü?"))
```

Hasil:

```python
'hello how are u?'
```

Artinya tokenizer `bert-base-uncased` melakukan lowercase dan menghapus accent.

### Pre-tokenization

Setelah normalization, teks dipecah menjadi unit awal seperti kata dan tanda baca.

Contoh:

```python
tokenizer.backend_tokenizer.pre_tokenizer.pre_tokenize_str("Hello, how are  you?")
```

Hasil:

```python
[('Hello', (0, 5)), (',', (5, 6)), ('how', (7, 10)), ('are', (11, 14)), ('you', (16, 19)), ('?', (19, 20))]
```

Selain menghasilkan potongan teks, tokenizer juga menyimpan **offset** posisi masing-masing bagian pada teks asli.

Jenis tokenizer dapat mempunyai aturan pre-tokenization yang berbeda.

GPT-2 misalnya:

```python
tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokenizer.backend_tokenizer.pre_tokenizer.pre_tokenize_str("Hello, how are  you?")
```

menghasilkan representasi dengan simbol `Ġ` untuk mempertahankan informasi spasi:

```python
[('Hello', (0, 5)), (',', (5, 6)), ('Ġhow', (6, 10)), ('Ġare', (10, 14)), ('Ġ', (14, 15)), ('Ġyou', (15, 19)),
 ('?', (19, 20))]
```

SentencePiece menggunakan pendekatan berbeda, misalnya simbol `▁` untuk merepresentasikan batas spasi.

---
