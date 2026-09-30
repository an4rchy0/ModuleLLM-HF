Setelah menyelesaikan Chapter 7, kita sudah mempelajari berbagai task fundamental NLP dan bagaimana task tersebut berhubungan dengan LLM.

Task yang telah dibahas mencakup:

```text
Token Classification
        ↓
Masked Language Modeling
        ↓
Translation
        ↓
Summarization
        ↓
Causal Language Modeling
        ↓
Question Answering
```

### Dari NLP ke LLM

LLM memperluas kemampuan pendekatan NLP tradisional.

LLM dapat digunakan untuk berbagai task tanpa harus selalu membuat model khusus untuk setiap task.

Contohnya:

```text
Text generation
Question answering
Summarization
Translation
Classification
Code generation
```

Namun, pemahaman mengenai NLP dasar tetap penting.

Konsep seperti:

* Tokenization
* Model architecture
* Pretraining
* Fine-tuning
* Evaluation
* Data processing

tetap menjadi fondasi dalam memahami dan menggunakan LLM.

### Arsitektur dan task

Salah satu hal penting yang perlu dipahami adalah hubungan antara arsitektur Transformer dan task:

| Arsitektur      | Contoh penggunaan                                   |
| --------------- | --------------------------------------------------- |
| Encoder-only    | Classification, token classification, extractive QA |
| Decoder-only    | Text generation, causal language modeling           |
| Encoder-decoder | Translation, summarization                          |

Pemilihan arsitektur bergantung pada bentuk input dan output yang dibutuhkan oleh task.

### Pretraining vs Fine-tuning

Perbedaan penting:

```text
PRETRAINING
Data besar
   ↓
Model belajar pola bahasa umum
   ↓
Pretrained model


FINE-TUNING
Pretrained model
   ↓
Dataset task tertentu
   ↓
Model khusus task
```

Pretraining biasanya membutuhkan dataset dan resource komputasi yang jauh lebih besar.

Fine-tuning memanfaatkan pengetahuan yang sudah diperoleh model sehingga biasanya membutuhkan resource lebih sedikit.

### Evaluation

Setiap task juga memiliki metric yang berbeda.

Contohnya:

```text
Translation
→ BLEU

Summarization
→ ROUGE

Classification
→ Accuracy / F1

Question Answering
→ Exact Match / F1
```

Metric membantu mengukur performa model, tetapi setiap metric memiliki keterbatasan dan tidak selalu sepenuhnya menggambarkan kualitas sebenarnya.

### Menggunakan model yang sudah dilatih

Setelah model selesai di-fine-tune, model dapat di-upload ke Hugging Face Hub dan digunakan kembali dengan `from_pretrained()` atau melalui `pipeline()`.

Contoh:

```python
from transformers import AutoModel

model = AutoModel.from_pretrained(
    "your-username/my-awesome-model"
)
```

Atau untuk inference menggunakan pipeline:

```python
from transformers import pipeline

classifier = pipeline(
    "text-classification",
    model="your-username/my-awesome-model"
)
```

Dengan demikian, model yang sudah dilatih dapat digunakan kembali tanpa harus melakukan training dari awal.

---