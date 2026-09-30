Model Hub mempermudah proses pemilihan pretrained model yang sesuai dengan kebutuhan.

Sebagai contoh, kita ingin menggunakan model berbahasa Prancis untuk melakukan **mask filling**.

Model yang digunakan adalah:

```text
camembert-base
```

Model tersebut dapat digunakan melalui `pipeline()`:

```python
from transformers import pipeline

camembert_fill_mask = pipeline("fill-mask", model="camembert-base")
results = camembert_fill_mask("Le camembert est <mask> :)")
```

Outputnya berisi beberapa kemungkinan kata untuk menggantikan `<mask>`, lengkap dengan `score`:

```python
[
  {
    'sequence': 'Le camembert est délicieux :)',
    'score': 0.490910053173253,
    'token': 7200,
    'token_str': 'délicieux'
  },
  {
    'sequence': 'Le camembert est excellent :)',
    'score': 0.1055697426199913,
    'token': 2183,
    'token_str': 'excellent'
  }
]
```

Hal penting yang perlu diperhatikan adalah **checkpoint yang digunakan harus sesuai dengan task**.

Contohnya:

```python
pipeline("fill-mask", model="camembert-base")
```

sesuai karena `camembert-base` dapat digunakan untuk masked language modeling.

Sebaliknya, menggunakan checkpoint tersebut pada:

```python
pipeline("text-classification", model="camembert-base")
```

tidak sesuai karena model head yang digunakan tidak ditujukan untuk task tersebut.

Karena itu, Hugging Face menyarankan penggunaan **task selector** pada Hub untuk membantu memilih checkpoint yang sesuai.

## Menggunakan model architecture secara langsung

Checkpoint juga dapat digunakan secara langsung melalui architecture-specific classes:

```python
from transformers import CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")
```

Namun, Hugging Face merekomendasikan penggunaan **`Auto*` classes** karena bersifat architecture-agnostic.

Contohnya:

```python
from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = AutoModelForMaskedLM.from_pretrained("camembert-base")
```

Keuntungan pendekatan ini adalah kode tidak terlalu bergantung pada arsitektur tertentu. Jika checkpoint diganti, kode tetap dapat digunakan dengan lebih mudah.

## Hal yang perlu diperiksa sebelum menggunakan pretrained model

Sebelum menggunakan sebuah pretrained model, kita perlu memeriksa:

* bagaimana model tersebut dilatih;
* dataset yang digunakan untuk training;
* keterbatasan model;
* bias yang mungkin terdapat pada model.

Informasi tersebut seharusnya tersedia pada **model card** model yang bersangkutan.

> **Ketika menggunakan pretrained model, jangan hanya melihat performanya. Periksa juga bagaimana model tersebut dilatih, dataset yang digunakan, keterbatasan, dan biasnya melalui model card.**

---
