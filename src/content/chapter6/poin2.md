## 2. Training a New Tokenizer from an Old One

Jika bahasa atau domain data kita berbeda jauh dari model yang tersedia, kita dapat melatih tokenizer baru dengan karakteristik yang mirip dengan tokenizer lama.

Hugging Face menyediakan API:

```python
AutoTokenizer.train_new_from_iterator()
```

Contoh pada materi menggunakan dataset **CodeSearchNet** bagian Python sebagai corpus karena targetnya adalah membuat tokenizer yang lebih cocok untuk kode Python. Dataset tersebut berisi jutaan fungsi dari berbagai library open source.

### Menyiapkan corpus

Dataset dapat dimuat menggunakan:

```python
from datasets import load_dataset

# This can take a few minutes to load, so grab a coffee or tea while you wait!
raw_datasets = load_dataset("code_search_net", "python")
```

Kita dapat melihat struktur dataset:

```python
raw_datasets["train"]
```

Contoh hasilnya:

```python
Dataset({
    features: ['repository_name', 'func_path_in_repository', 'func_name', 'whole_func_string', 'language', 
      'func_code_string', 'func_code_tokens', 'func_documentation_string', 'func_documentation_tokens', 'split_name', 
      'func_code_url'
    ],
    num_rows: 412178
})
```

Untuk training tokenizer, materi menggunakan kolom:

```text
whole_func_string
```

Contoh isi data:

```python
print(raw_datasets["train"][123456]["whole_func_string"])
```

yang berisi kode Python beserta dokumentasinya.

### Membuat training corpus

Karena dataset cukup besar, corpus diberikan kepada tokenizer dalam bentuk batch menggunakan iterator:

```python
training_corpus = (
    raw_datasets["train"][i : i + 1000]["whole_func_string"]
    for i in range(0, len(raw_datasets["train"]), 1000)
)
```

Alternatif yang lebih fleksibel adalah generator:

```python
def get_training_corpus():
    dataset = raw_datasets["train"]
    for start_idx in range(0, len(dataset), 1000):
        samples = dataset[start_idx : start_idx + 1000]
        yield samples["whole_func_string"]
```

Pendekatan iterator/generator membantu menghindari penyimpanan seluruh corpus dalam memory sekaligus.

### Melatih tokenizer baru

Pertama, kita memuat tokenizer lama:

```python
from transformers import AutoTokenizer

old_tokenizer = AutoTokenizer.from_pretrained("gpt2")
```

Kemudian tokenizer baru dilatih berdasarkan corpus:

```python
tokenizer = old_tokenizer.train_new_from_iterator(training_corpus, 52000)
```

Angka `52000` merupakan ukuran vocabulary tokenizer baru.

Sebagai contoh, tokenizer GPT-2 lama dapat memecah kode:

```python
example = '''def add_numbers(a, b):
    """Add the two numbers `a` and `b`."""
    return a + b'''

tokens = old_tokenizer.tokenize(example)
tokens
```

Hasilnya masih memecah `numbers` menjadi beberapa bagian:

```python
['def', 'Ġadd', '_', 'n', 'umbers', '(', 'a', ',', 'Ġb', '):', 'Ċ', 'Ġ', 'Ġ', 'Ġ', 'Ġ"""', 'Add', 'Ġthe', 'Ġtwo',
 'Ġnumbers', 'Ġ`', 'a', '`', 'Ġand', 'Ġ`', 'b', '`', '."', '""', 'Ċ', 'Ġ', 'Ġ', 'Ġreturn', 'Ġa', 'Ġ+', 'Ġb']
```

Setelah tokenizer baru dilatih:

```python
tokens = tokenizer.tokenize(example)
tokens
```

Hasilnya menjadi lebih sesuai dengan corpus Python yang digunakan, misalnya:

```python
['def', 'Ġadd', '_', 'numbers', '(', 'a', ',', 'Ġb', '):', 'ĊĠĠĠ', 'Ġ"""', 'Add', 'Ġthe', 'Ġtwo', 'Ġnumbers', 'Ġ`',
 'a', '`', 'Ġand', 'Ġ`', 'b', '`."""', 'ĊĠĠĠ', 'Ġreturn', 'Ġa', 'Ġ+', 'Ġb']
```

Jumlah token turun dari 36 menjadi 27 pada contoh tersebut.

Tokenizer yang sudah dibuat juga dapat disimpan:

```python
tokenizer.save_pretrained("code-search-net-tokenizer")
```

Kemudian dapat di-upload ke Hugging Face Hub:

```python
from huggingface_hub import notebook_login

notebook_login()
```

atau:

```bash
huggingface-cli login
```

Lalu:

```python
tokenizer.push_to_hub("code-search-net-tokenizer")
```

Dan dapat digunakan kembali dengan:

```python
tokenizer = AutoTokenizer.from_pretrained("huggingface-course/code-search-net-tokenizer")
```

---
