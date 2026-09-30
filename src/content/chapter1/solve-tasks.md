# 5. How Transformers Slove Tasks

Transformer tidak langsung menghasilkan semua jenis output dengan cara yang sama.

Arsitektur dasar dapat digunakan kemudian ditambahkan komponen khusus sesuai task.

## 5.1 Text Classification
Untuk text classification model seperti BERT dapat menggunakan **classification head**.

Alurnya:

```text
Input text
    ↓
Tokenizer
    ↓
BERT
    ↓
Hidden states
    ↓
Classification head
    ↓
Logits
    ↓
Class
```

Classification head merupakan layer tambahan yang menggunakan hidden states dari BERT untuk menghasilan prediksi kategori.

---

## 5.2 Token Classification

Untuk token classification, setiap token membutuhkan prediksi masing-masing.

Contoh pada NER:

```text
John works at Hugging Face
 ↓
PER  O      O   ORG
```

Model menggunakan **token classification head** untuk menghasilkan label untuk setiap token.

---

## 5.3 Question Answering

Pada extractive question answeing, model mencari posisi awal dan akhir jawaban dalam context.

Secara sederhana:

```text
Context
   ↓
Transformer
   ↓
Start position
+
End position
   ↓
Answer span
```

Jadi model tidak harus menghasilkan kalimat baru.

Model menentukan bagian mana dari context yang merupakan jawaban.

---

## 5.4 Summarization

Summarization memiliki pola:

```text
Long input
    ↓
Encoder
    ↓
Representation
    ↓
Decoder
    ↓
Shorter output
```

Model seperti **BART** dan **T5** dapat digunakan untuk pola sequence-to-sequence seperti summarization.

---

## 5.5 Text Generation

Pada text generation, model menghasilkan token secara bertahap.

Misalnya:

```text
Input:
"I like"

Prediction:
"I like NLP"

Next:
"I like NLP because..."

Next:
"I like NLP because it..."
```

Model terus memprediksi token berikutnya berdasarkan token-token sebelumnya.

Pola ini disebut **autoregressive generation**.

---

