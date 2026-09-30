# 3. Model Inputs dan Model Outputs

Setelah memahami bahwa model menerima angka, kita perlu memahami bentuk input dan output tersebut.

---

## 3.1 Input IDs

**Input IDs** merupakan representasi numerik dari token.

Misalnya teks:

```text
"I love NLP"
```

akan melalui tokenizer dan setiap token akan dikonversi menjadi ID.

Secara sederhana:

```text
Text
 ↓
Tokens
 ↓
Token IDs
```

Contoh:

```text
["I", "love", "NLP"]
```

dapat menjadi:

```text
[101, 1045, 2293, ...]
```

Angka tersebut kemudian diberikan kepada model.

---

## 3.2 Tensor

Model machine learning tidak bekerja dengan list Python biasa secara langsung dalam sebagian besar kasus.

Input biasanya perlu dikonversi menjadi **tensor**.

Contoh dengan PyTorch:

```python
import torch

input_ids = torch.tensor([[101, 1045, 2293, 102]])
```

Tensor tersebut kemudian dapat diberikan kepada model.

---

## 3.3 Logits

Output model untuk classification biasanya berupa **logits**.

Misalnya:

```text
[-2.72, 2.87]
```

Angka tersebut belum secara langsung berarti:

```text
positive
negative
```

Logits perlu diproses lebih lanjut untuk mendapatkan probabilitas atau label.

Untuk classification, nilai logits dapat digunakan untuk menentukan kelas dengan nilai yang paling tinggi.

---

## 3.4 Dari logits menjadi prediction

Secara sederhana:

```text
Input IDs
    ↓
Transformer
    ↓
Logits
    ↓
Probability / Class
    ↓
Prediction
```

Misalnya:

```text
NEGATIVE = -2.72
POSITIVE =  2.87
```

maka kelas dengan nilai lebih tinggi adalah:

```text
POSITIVE
```

Inilah salah satu proses yang sebelumnya ditangani secara otomatis oleh `pipeline()`.

---
