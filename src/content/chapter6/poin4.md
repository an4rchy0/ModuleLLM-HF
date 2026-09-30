## 4. Fast Tokenizers in the QA Pipeline

Fast tokenizer juga sangat berguna untuk **Question Answering**.

Pipeline dasar:

```python
from transformers import pipeline

question_answerer = pipeline("question-answering")
context = """
 Transformers is backed by the three most popular deep learning libraries — Jax, PyTorch, and TensorFlow — with a seamless integration
between them. It's straightforward to train your models with one before loading them for inference with the other.
"""
question = "Which deep learning libraries back Transformers?"
question_answerer(question=question, context=context)
```

Contoh hasil:

```python
{'score': 0.97773,
 'start': 78,
 'end': 105,
 'answer': 'Jax, PyTorch and TensorFlow'}
```

Pipeline Question Answering mencari jawaban **di dalam context yang diberikan**, bukan membuat jawaban baru.

### Cara kerjanya

Kita juga dapat menggunakan model secara langsung:

```python
from transformers import AutoTokenizer, AutoModelForQuestionAnswering

model_checkpoint = "distilbert-base-cased-distilled-squad"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors="pt")
outputs = model(**inputs)
```

Model menghasilkan dua jenis logits:

```python
start_logits = outputs.start_logits
end_logits = outputs.end_logits
print(start_logits.shape, end_logits.shape)
```

Hasil:

```text
torch.Size([1, 66]) torch.Size([1, 66])
```

`start_logits` menunjukkan kemungkinan posisi awal jawaban, sedangkan `end_logits` menunjukkan kemungkinan posisi akhir jawaban.

Kemudian probabilitas dihitung:

```python
start_probabilities = torch.nn.functional.softmax(start_logits, dim=-1)[0]
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-1)[0]
```

Semua kombinasi posisi awal dan akhir dapat dihitung:

```python
scores = start_probabilities[:, None] * end_probabilities[None, :]
```

Agar posisi akhir tidak berada sebelum posisi awal:

```python
scores = torch.triu(scores)
```

Kemudian pasangan dengan score terbesar dipilih:

```python
max_index = scores.argmax().item()
start_index = max_index // scores.shape[1]
end_index = max_index % scores.shape[1]
print(scores[start_index, end_index])
```

Untuk mendapatkan teks sebenarnya dari posisi tersebut, fast tokenizer menyediakan offset mapping:

```python
inputs_with_offsets = tokenizer(question, context, return_offsets_mapping=True)
offsets = inputs_with_offsets["offset_mapping"]

start_char, _ = offsets[start_index]
_, end_char = offsets[end_index]
answer = context[start_char:end_char]
```

Hasil akhirnya:

```python
result = {
    "answer": answer,
    "start": start_char,
    "end": end_char,
    "score": scores[start_index, end_index],
}
print(result)
```

### Menangani context yang panjang

Jika context terlalu panjang, tokenizer dapat melakukan truncation. Contohnya:

```python
inputs = tokenizer(question, long_context, max_length=384, truncation="only_second")
```

`"only_second"` digunakan agar truncation diterapkan pada bagian kedua dari pasangan input, yaitu context. Materi kemudian membahas bagaimana Question Answering pipeline menangani context yang lebih panjang dari maximum length model dengan membuat beberapa bagian dan mencari jawaban di antaranya.

---
