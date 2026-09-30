Sampai bagian sebelumnya, kita banyak menggunakan pretrained model dan melakukan fine-tuning.

Pada bagian ini pendekatannya berbeda: **model baru dilatih dari awal**.

Pendekatan ini dapat masuk akal ketika:

* Memiliki dataset yang sangat banyak.
* Dataset sangat berbeda dari data pretraining model yang tersedia.
* Domain datanya sangat khusus.

Contohnya:

```text
Musical notes
DNA sequences
Programming languages
```

Untuk code generation, model causal/autoregressive seperti GPT-2 cocok digunakan karena model memprediksi token berdasarkan token-token sebelumnya.

### Menyiapkan dataset

Materi menggunakan dataset `codeparrot` yang berisi source code Python.

Karena dataset sangat besar, kita tidak ingin mendownload semuanya. Dataset diproses menggunakan `streaming=True`.

Contoh filtering:

```python
def any_keyword_in_string(string, keywords):
    for keyword in keywords:
        if keyword in string:
            return True
    return False
```

Keyword yang digunakan:

```python
filters = ["pandas", "sklearn", "matplotlib", "seaborn"]
```

Kemudian dataset di-stream:

```python
from datasets import load_dataset

split = "train"
filters = ["pandas", "sklearn", "matplotlib", "seaborn"]

data = load_dataset(
    f"transformersbook/codeparrot-{split}",
    split=split,
    streaming=True
)
```

Setelah filtering, materi menghasilkan dataset khusus yang berkaitan dengan Python data science.

### Dataset hasil filtering

Dataset yang sudah tersedia di Hub dapat dimuat dengan:

```python
from datasets import load_dataset, DatasetDict

ds_train = load_dataset(
    "huggingface-course/codeparrot-ds-train",
    split="train"
)

ds_valid = load_dataset(
    "huggingface-course/codeparrot-ds-valid",
    split="validation"
)

raw_datasets = DatasetDict(
    {
        "train": ds_train,
        "valid": ds_valid,
    }
)
```

Dataset tersebut memiliki sekitar 606 ribu contoh training dan 3.322 contoh validation dalam materi.

### Tokenisasi

Pada Chapter 6 kita sudah membuat tokenizer khusus Python.

Tokenizer tersebut kemudian digunakan untuk mengubah source code menjadi token:

```text
Python source code
        ↓
Python tokenizer
        ↓
input_ids
        ↓
Causal language model
```

### Causal language modeling

Pada causal language modeling, model belajar memprediksi token berikutnya.

Contoh:

```text
Input:
import pandas as

Target:
pd
```

Kemudian:

```text
Input:
import pandas as pd

Target:
df
```

dan seterusnya.

Secara sederhana:

```text
Token 1 → Token 2 → Token 3 → Token 4
                    ↓
              prediksi Token 5
```

Model tidak boleh menggunakan informasi dari token masa depan ketika memprediksi token saat ini. Karena itu digunakan **causal attention mask**.

### Training

Setelah tokenizer dan dataset siap, model GPT-2 dapat dibuat dan dilatih menggunakan `Trainer` atau training loop dengan `Accelerate`.

Pendekatan ini jauh lebih mahal dibandingkan fine-tuning model yang sudah pretrained karena seluruh parameter model harus dipelajari dari awal.

Materi juga menekankan bahwa pretraining model dari scratch membutuhkan resource komputasi yang jauh lebih besar dibandingkan fine-tuning model yang sudah tersedia.

---
