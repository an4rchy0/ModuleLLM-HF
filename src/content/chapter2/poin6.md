# 6. Putting It All Together

Setelah memahami semua komponen secara terpisah, kita dapat menggabungkan semuanya.

Proses lengkapnya:

```text
Raw Text
   ↓
Tokenizer
   ↓
Tokenization
   ↓
Input IDs
   ↓
Padding / Truncation
   ↓
Attention Mask
   ↓
PyTorch Tensor
   ↓
Transformer Model
   ↓
Logits / Model Output
   ↓
Prediction
```

---

## 6.1 Menggunakan tokenizer secara langsung

Kita tidak perlu lagi melakukan setiap proses secara manual.

Contohnya:

```python
from transformers import AutoTokenizer

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"

tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)
```

Variabel:

```python
model_inputs
```

berisi input yang dibutuhkan model.

Untuk DistilBERT, misalnya, terdapat `input_ids` dan `attention_mask`.

---

# 6.2 Memproses beberapa sequence

Tokenizer juga dapat menerima beberapa sequence sekaligus.

```python
sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!"
]

model_inputs = tokenizer(sequences)
```

API-nya tetap sama.

Perbedaannya adalah input sekarang berupa list sequence.

---

# 6.3 Padding

Kita dapat meminta tokenizer melakukan padding.

### Padding sampai sequence terpanjang

```python
tokenizer(
    sequences,
    padding="longest"
)
```

Semua sequence akan disesuaikan dengan panjang sequence terpanjang dalam batch.

---

### Padding sampai panjang maksimum model

```python
tokenizer(
    sequences,
    padding="max_length"
)
```

Padding dilakukan sampai maximum length yang ditentukan model.

---

### Padding sampai panjang tertentu

```python
tokenizer(
    sequences,
    padding="max_length",
    max_length=8
)
```

Semua sequence dibuat memiliki panjang 8 token.

---

# 6.4 Truncation

Tokenizer juga dapat melakukan truncation:

```python
tokenizer(
    sequences,
    truncation=True
)
```

atau:

```python
tokenizer(
    sequences,
    max_length=8,
    truncation=True
)
```

Dengan demikian tokenizer dapat sekaligus mengatur:

```text
Different lengths
       ↓
Padding
       +
Truncation
       ↓
Uniform batch
```

---

# 6.5 Menghasilkan tensor

Tokenizer juga dapat langsung menghasilkan tensor untuk framework tertentu.

Contoh PyTorch:

```python
tokenizer(
    sequences,
    padding=True,
    return_tensors="pt"
)
```

`"pt"` berarti output dikembalikan sebagai **PyTorch tensors**.

Untuk NumPy:

```python
tokenizer(
    sequences,
    padding=True,
    return_tensors="np"
)
```

Dengan begitu kita tidak perlu melakukan konversi tensor secara manual.

---

# 6.6 Dari tokenizer langsung ke model

Pada akhirnya proses dapat dibuat sangat ringkas:

```python
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"

tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequences = [
    "I've been waiting for a HuggingFace course my whole life.",
    "So have I!"
]

tokens = tokenizer(
    sequences,
    padding=True,
    truncation=True,
    return_tensors="pt"
)

output = model(**tokens)
```

Di sini:

```text
sequences
   ↓
tokenizer()
   ↓
input_ids + attention_mask
   ↓
PyTorch tensors
   ↓
model(**tokens)
   ↓
output
```

Inilah inti dari bagaimana `pipeline()` sebenarnya bekerja di belakang layar.

---
