## 9. Building a Tokenizer, Block by Block

Bagian terakhir menunjukkan bagaimana membuat tokenizer dari awal menggunakan library `tokenizers`.

Pipeline tokenizer terdiri dari beberapa tahap:

```text
Normalization
↓
Pre-tokenization
↓
Model
↓
Post-processing
```

Tahapan tersebut dapat dikombinasikan menggunakan berbagai komponen dari library Tokenizers.

Library menyediakan beberapa komponen utama:

* `normalizers`
* `pre_tokenizers`
* `models`
* `trainers`
* `post_processors`
* `decoders`

### Menyiapkan corpus

Materi menggunakan WikiText-2:

```python
from datasets import load_dataset

dataset = load_dataset("wikitext", name="wikitext-2-raw-v1", split="train")


def get_training_corpus():
    for i in range(0, len(dataset), 1000):
        yield dataset[i : i + 1000]["text"]
```

Kita juga dapat menyimpan corpus menjadi file:

```python
with open("wikitext-2.txt", "w", encoding="utf-8") as f:
    for i in range(len(dataset)):
        f.write(dataset[i]["text"] + "\n")
```

Generator tersebut menghasilkan batch berisi 1.000 teks yang kemudian digunakan untuk training tokenizer.

### Membuat WordPiece tokenizer

Pertama, import komponen yang dibutuhkan:

```python
from tokenizers import (
    decoders,
    models,
    normalizers,
    pre_tokenizers,
    processors,
    trainers,
    Tokenizer,
)
```

Buat model WordPiece:

```python
tokenizer = Tokenizer(models.WordPiece(unk_token="[UNK]"))
```

Kemudian tentukan normalizer:

```python
tokenizer.normalizer = normalizers.BertNormalizer(lowercase=True)
```

Atau menggunakan kombinasi normalizer:

```python
tokenizer.normalizer = normalizers.Sequence(
    [normalizers.NFD(), normalizers.Lowercase(), normalizers.StripAccents()]
)
```

Pre-tokenizer dapat menggunakan:

```python
tokenizer.pre_tokenizer = pre_tokenizers.BertPreTokenizer()
```

atau:

```python
tokenizer.pre_tokenizer = pre_tokenizers.Whitespace()
```

Kita dapat menguji hasilnya:

```python
tokenizer.pre_tokenizer.pre_tokenize_str("Let's test my pre-tokenizer.")
```

Contoh hasil:

```python
[('Let', (0, 3)), ("'", (3, 4)), ('s', (4, 5)), ('test', (6, 10)), ('my', (11, 13)), ('pre', (14, 17)),
 ('-', (17, 18)), ('t
```
