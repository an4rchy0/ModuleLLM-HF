**Machine translation** adalah task untuk mengubah teks dari satu bahasa ke bahasa lain.

Contoh:

```text
English:
This course is produced by Hugging Face.

Spanish:
Este curso es producido por Hugging Face.
```

Translation biasanya menggunakan arsitektur **encoder-decoder**.

Secara sederhana:

```text
Source sentence
       ↓
    Encoder
       ↓
Representation
       ↓
    Decoder
       ↓
Target sentence
```

Model seperti T5 dan BART dapat digunakan untuk task sequence-to-sequence seperti translation.

### Dataset

Dataset translation biasanya mempunyai pasangan:

```text
source → target
```

Misalnya:

```python
{
    "translation": {
        "en": "Hello",
        "fr": "Bonjour"
    }
}
```

Kemudian tokenizer digunakan untuk memproses source dan target.

Contoh konsep tokenisasi:

```python
inputs = tokenizer(
    examples["source"],
    max_length=128,
    truncation=True
)
```

Untuk target:

```python
labels = tokenizer(
    text_target=examples["target"],
    max_length=128,
    truncation=True
)
```

### Data collator

Untuk sequence-to-sequence task, dapat digunakan:

```python
from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(
    tokenizer=tokenizer,
    model=model
)
```

Kemudian model dapat dilatih menggunakan `Seq2SeqTrainer`.

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

### Evaluasi

Translation biasanya dievaluasi menggunakan metric seperti **BLEU**.

BLEU membandingkan hasil terjemahan model dengan reference translation.

Namun, BLEU tidak sempurna. Dua terjemahan yang berbeda tetapi sama-sama benar dapat memperoleh score berbeda karena metric bekerja berdasarkan kesamaan dengan reference.

---