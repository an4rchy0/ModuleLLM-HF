## 2. Token Classification

**Token classification** adalah task ketika model memberikan sebuah label kepada setiap token dalam suatu sequence.

Salah satu contoh paling terkenal adalah **Named Entity Recognition (NER)**.

Misalnya:

```text
My name is Sylvain and I work at Hugging Face in Brooklyn.
```

Model dapat memberikan label:

```text
Sylvain      → PER
Hugging Face → ORG
Brooklyn     → LOC
```

Contoh sederhana menggunakan pipeline:

```python
from transformers import pipeline

ner = pipeline("ner", grouped_entities=True)

ner("My name is Sylvain and I work at Hugging Face in Brooklyn.")
```

Contoh hasil:

```python
[
    {
        'entity_group': 'PER',
        'score': 0.99816,
        'word': 'Sylvain',
        'start': 11,
        'end': 18
    },
    {
        'entity_group': 'ORG',
        'score': 0.97991,
        'word': 'Hugging Face',
        'start': 33,
        'end': 45
    },
    {
        'entity_group': 'LOC',
        'score': 0.99321,
        'word': 'Brooklyn',
        'start': 49,
        'end': 57
    }
]
```

### Hubungan token dengan label

Masalah utama dalam token classification adalah satu kata dapat dipecah menjadi beberapa token.

Misalnya:

```text
Sylvain
```

dapat menjadi:

```text
S
##yl
##va
##in
```

Jika label untuk kata tersebut adalah `PER`, maka label tersebut perlu dikaitkan dengan token-token yang membentuk kata tersebut.

Fast tokenizer yang dipelajari pada Chapter 6 membantu proses ini karena menyediakan informasi seperti:

```python
encoding.word_ids()
```

Dengan `word_ids()`, kita dapat mengetahui token tertentu berasal dari kata yang mana.

Ini sangat berguna untuk menyesuaikan label dataset dengan token hasil tokenisasi.

### Fine-tuning model untuk token classification

Model seperti BERT dapat diberikan classification head pada setiap token.

Secara konsep:

```text
Input tokens
     ↓
BERT
     ↓
Hidden states
     ↓
Token classification head
     ↓
Label untuk setiap token
```

Loss kemudian dihitung antara prediksi model dan label sebenarnya untuk setiap token.

Task seperti NER dan POS tagging termasuk dalam kategori ini.

---
