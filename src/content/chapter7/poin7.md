**Question Answering (QA)** merupakan task untuk menjawab pertanyaan berdasarkan suatu context.

Chapter ini berfokus pada **extractive question answering**.

Artinya, jawaban diambil sebagai span teks dari context yang diberikan.

Contoh:

```text
Context:
Transformers is backed by Jax, PyTorch, and TensorFlow.

Question:
Which deep learning libraries back Transformers?

Answer:
Jax, PyTorch, and TensorFlow
```

Berbeda dengan generative question answering, model extractive QA tidak membuat jawaban baru di luar context.

### Dataset SQuAD

Dataset yang digunakan adalah **SQuAD (Stanford Question Answering Dataset)**.

Dataset dapat dimuat dengan:

```python
from datasets import load_dataset

raw_datasets = load_dataset("squad")
```

Struktur dataset:

```text
DatasetDict({
    train: Dataset({
        features: ['id', 'title', 'context', 'question', 'answers'],
        ...
    })
    validation: Dataset({
        features: ['id', 'title', 'context', 'question', 'answers'],
        ...
    })
})
```

Tiga bagian terpenting adalah:

```text
context
question
answers
```

`answers` berisi:

```python
{
    "text": ["Saint Bernadette Soubirous"],
    "answer_start": [515]
}
```

`answer_start` menunjukkan posisi karakter awal jawaban di dalam context.

### Tokenisasi Question Answering

Question dan context diberikan sebagai pasangan:

```python
tokenizer(
    questions,
    contexts,
    truncation="only_second",
    max_length=384,
)
```

`"only_second"` berarti ketika input terlalu panjang, truncation diterapkan pada bagian kedua, yaitu context.

Masalah utama adalah satu context dapat lebih panjang daripada maximum sequence length model.

Karena itu context dapat dibagi menjadi beberapa bagian menggunakan:

```python
return_overflowing_tokens=True
```

Kemudian kita perlu mengetahui bagian context mana yang menghasilkan setiap feature.

Fast tokenizer menyediakan informasi:

```python
overflow_to_sample_mapping
```

dan:

```python
offset_mapping
```

Keduanya digunakan untuk menghubungkan hasil tokenisasi dengan context asli.

### Menentukan posisi jawaban

Model Question Answering menghasilkan dua output utama:

```text
start_logits
end_logits
```

`start_logits` digunakan untuk menentukan posisi awal jawaban.

`end_logits` digunakan untuk menentukan posisi akhir jawaban.

Secara konsep:

```text
Context:
The Transformer architecture was introduced in 2017.

          ↓

start_logits → posisi "2017"
end_logits   → posisi akhir "2017"
```

Kemudian span dengan kombinasi score terbaik dipilih sebagai jawaban.

### Fine-tuning

Model seperti BERT atau DistilBERT dapat di-fine-tune menggunakan dataset SQuAD.

Secara umum:

```text
Question + Context
        ↓
      BERT
        ↓
Start logits + End logits
        ↓
Answer span
```

Model yang telah dilatih dapat digunakan melalui pipeline:

```python
from transformers import pipeline

question_answerer = pipeline("question-answering")

question_answerer(
    question="Where do I work?",
    context="My name is Sylvain and I work at Hugging Face in Brooklyn",
)
```

Hasilnya berupa informasi seperti:

```python
{
    'score': ...,
    'start': 33,
    'end': 45,
    'answer': 'Hugging Face'
}
```

Perlu dibedakan antara **extractive QA** dan **generative QA**. Model encoder-only seperti BERT cocok untuk mengambil jawaban faktual dari context, sedangkan pertanyaan terbuka yang membutuhkan sintesis informasi lebih cocok ditangani oleh model encoder-decoder seperti T5 atau BART.

---
