# 5. Handling Multiple Sequences — PyTorch

Setelah memahami tokenizer, masalah berikutnya adalah bagaimana memasukkan lebih dari satu sequence ke model.

---

## 5.1 Model mengharapkan batch

Transformer biasanya bekerja menggunakan input dalam bentuk **batch**.

Jika hanya memiliki satu sequence, kita tetap dapat membuat batch yang berisi satu sequence.

Misalnya:

```text
1 sequence
↓
Batch size = 1
```

Secara bentuk:

```text
[sequence]
```

bukan hanya:

```text
sequence
```

Materi menunjukkan bahwa memberikan sequence secara langsung tanpa dimensi batch dapat menyebabkan error.

---

## 5.2 Apa itu batching?

**Batching** adalah proses memasukkan beberapa sequence ke model sekaligus.

Contoh:

```text
Sentence 1
Sentence 2
Sentence 3
```

menjadi:

```text
Batch
├── Sentence 1
├── Sentence 2
└── Sentence 3
```

Keuntungannya adalah beberapa input dapat diproses bersama.

---

# 5.3 Masalah sequence dengan panjang berbeda

Misalnya kita memiliki:

```text
Sentence A → 3 tokens
Sentence B → 5 tokens
```

Kita tidak dapat langsung membuat tensor rectangular dari:

```text
[1, 2, 3]
[4, 5, 6, 7, 8]
```

Karena panjangnya berbeda.

Tensor membutuhkan bentuk yang konsisten.

Solusinya adalah **padding**.

---

# 5.4 Padding

Padding berarti menambahkan token khusus ke sequence yang lebih pendek.

Misalnya:

```text
Sentence A:
[200, 200, 200]

Sentence B:
[200, 200]
```

setelah padding:

```text
Sentence A:
[200, 200, 200]

Sentence B:
[200, 200, PAD]
```

Sekarang keduanya memiliki panjang yang sama.

Padding memungkinkan sequence dengan panjang berbeda dimasukkan ke dalam satu tensor.

---

# 5.5 Padding tidak boleh dianggap sebagai informasi

Masalahnya:

Transformer menggunakan attention.

Jika padding token ikut diperhatikan oleh attention, maka hasil model dapat berubah.

Materi menunjukkan bahwa sequence yang diproses sendiri dapat menghasilkan logits berbeda ketika dimasukkan ke batch dengan padding.

Karena itu kita membutuhkan **attention mask**.

---

# 5.6 Attention Mask

Attention mask memberi tahu model token mana yang boleh diperhatikan.

Nilai:

```text
1 → token diperhatikan
0 → token diabaikan
```

Contoh:

```text
Input:
[200, 200, 200]
[200, 200, PAD]

Attention mask:
[1, 1, 1]
[1, 1, 0]
```

Pada sequence kedua, padding diberi nilai `0`.

Artinya attention layer tidak boleh menggunakan padding tersebut sebagai informasi.

Dengan attention mask, hasil sequence kedua ketika diproses bersama batch dapat kembali konsisten dengan hasil ketika diproses sendiri.

---

# 5.7 Truncation

Masalah lainnya adalah sequence yang terlalu panjang.

Setiap model memiliki batas panjang input.

Jika sequence melebihi batas tersebut, kita dapat menggunakan **truncation**.

Contoh:

```python
tokenizer(
    sequence,
    truncation=True
)
```

Tokenizer akan memotong sequence yang terlalu panjang.

Kita juga dapat menentukan panjang tertentu:

```python
tokenizer(
    sequence,
    max_length=8,
    truncation=True
)
```

Artinya sequence akan dipotong agar tidak melebihi 8 token.

---

# 5.8 Padding dan Truncation secara bersamaan

Dalam penggunaan nyata, kita sering menggunakan:

```python
tokenizer(
    sequences,
    padding=True,
    truncation=True
)
```

Artinya:

* sequence yang terlalu panjang akan dipotong;
* sequence yang lebih pendek akan diberi padding.

Ini sangat berguna ketika memproses batch dengan sequence yang panjangnya berbeda-beda.

---
