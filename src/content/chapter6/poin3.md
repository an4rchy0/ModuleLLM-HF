## 3. Fast Tokenizers' Special Powers

Fast tokenizer merupakan tokenizer yang menggunakan library `Tokenizers` dan diimplementasikan dalam **Rust**, sedangkan slow tokenizer ditulis dalam Python.

Perbedaan kecepatannya terutama terlihat ketika memproses banyak teks sekaligus menggunakan batching. Materi menunjukkan contoh perbandingan:

| Pengaturan      | Fast tokenizer | Slow tokenizer |
| --------------- | -------------: | -------------: |
| `batched=True`  |          10.8s |        4min41s |
| `batched=False` |          59.2s |         5min3s |

Fast tokenizer juga memiliki kemampuan tambahan yang sangat penting, yaitu mempertahankan hubungan antara token dengan posisi token tersebut pada teks asli.

### BatchEncoding

Ketika melakukan tokenisasi:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
example = "My name is Sylvain and I work at Hugging Face in Brooklyn."
encoding = tokenizer(example)
print(type(encoding))
```

Hasilnya adalah:

```python
<class 'transformers.tokenization_utils_base.BatchEncoding'>
```

Kita dapat mengecek apakah tokenizer merupakan fast tokenizer:

```python
tokenizer.is_fast
```

atau:

```python
encoding.is_fast
```

Keduanya akan menghasilkan:

```python
True
```

### Mengakses token

Fast tokenizer memungkinkan kita mendapatkan token secara langsung:

```python
encoding.tokens()
```

Contohnya:

```python
['[CLS]', 'My', 'name', 'is', 'S', '##yl', '##va', '##in', 'and', 'I', 'work', 'at', 'Hu', '##gging', 'Face', 'in',
 'Brooklyn', '.', '[SEP]']
```

### Menghubungkan token dengan kata

Kita dapat mengetahui token berasal dari kata keberapa menggunakan:

```python
encoding.word_ids()
```

Contohnya:

```python
[None, 0, 1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, None]
```

Fast tokenizer juga dapat mengubah indeks kata menjadi posisi karakter:

```python
start, end = encoding.word_to_chars(3)
example[start:end]
```

Hasil:

```text
Sylvain
```

Kemampuan ini disebut **offset mapping** dan sangat penting untuk task seperti Named Entity Recognition (NER) dan Question Answering.

### Fast tokenizer pada token classification

Pipeline dapat langsung digunakan:

```python
from transformers import pipeline

token_classifier = pipeline("token-classification")
token_classifier("My name is Sylvain and I work at Hugging Face in Brooklyn.")
```

Karena sebuah kata dapat dipecah menjadi beberapa subword, output awal dapat berisi beberapa token untuk satu entity.

Fast tokenizer menggunakan offset mapping untuk mengetahui posisi setiap token pada teks asli, kemudian token-token tersebut dapat digabung kembali menjadi entity utuh.

Contohnya:

```python
from transformers import pipeline

token_classifier = pipeline("token-classification", aggregation_strategy="simple")
token_classifier("My name is Sylvain and I work at Hugging Face in Brooklyn.")
```

Hasilnya dapat berupa entity seperti:

```text
Sylvain
Hugging Face
Brooklyn
```

Jadi, salah satu kekuatan utama fast tokenizer adalah kemampuannya menjaga hubungan antara **token, kata, dan posisi karakter pada teks asli**.

---
