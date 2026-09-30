**Summarization** adalah task untuk mengubah teks panjang menjadi teks yang lebih pendek dengan mempertahankan informasi penting.

Contoh:

```text
Input:
Teks artikel yang panjang...

Output:
Ringkasan singkat dari artikel tersebut.
```

Summarization umumnya menggunakan arsitektur **encoder-decoder**, misalnya:

```text
BART
T5
```

### Sequence-to-sequence

Model menerima dokumen sebagai input:

```text
Long document
     ↓
  Encoder
     ↓
  Decoder
     ↓
Short summary
```

Berbeda dengan extractive summarization yang memilih bagian dari teks asli, model sequence-to-sequence dapat **menghasilkan teks ringkasan baru**.

### Tokenisasi

Input dapat diproses:

```python
inputs = tokenizer(
    examples["text"],
    max_length=1024,
    truncation=True
)
```

Target berupa summary:

```python
labels = tokenizer(
    text_target=examples["summary"],
    max_length=128,
    truncation=True
)
```

### Data collator

Karena summarization merupakan sequence-to-sequence task:

```python
from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(
    tokenizer=tokenizer,
    model=model
)
```

Training dapat dilakukan menggunakan:

```python
from transformers import Seq2SeqTrainer

trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
)

trainer.train()
```

### Evaluasi dengan ROUGE

Metric yang umum digunakan adalah **ROUGE**.

ROUGE membandingkan summary yang dihasilkan model dengan reference summary.

Beberapa varian yang umum:

```text
ROUGE-1
ROUGE-2
ROUGE-L
```

ROUGE-1 melihat overlap unigram, ROUGE-2 melihat bigram, sedangkan ROUGE-L menggunakan longest common subsequence.

Seperti BLEU, ROUGE memiliki keterbatasan karena kualitas ringkasan tidak selalu dapat direpresentasikan sepenuhnya hanya dengan overlap antara prediction dan reference.

---
