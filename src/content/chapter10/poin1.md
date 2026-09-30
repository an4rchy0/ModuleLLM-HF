Supervised Fine-Tuning (SFT) merupakan metode untuk melakukan fine-tuning language model pada berbagai tugas secara bersamaan. Berbeda dengan fine-tuning yang hanya berfokus pada satu tugas, SFT memungkinkan model menjadi lebih fleksibel untuk menangani berbagai kebutuhan.

---


## 1.1 Introduction

Chat template digunakan untuk mengatur struktur interaksi antara pengguna dan language model.

Chat template penting untuk:

* Menjaga struktur percakapan tetap konsisten.
* Memastikan setiap pesan memiliki role yang tepat.
* Mengelola konteks percakapan dalam beberapa turn.
* Mendukung fitur seperti tool use dan function calling.

Struktur pesan umumnya menggunakan role seperti:

* `system`
* `user`
* `assistant`
* `tool`

---

## 1.2 Base Model vs Instruct Model

**Base model** dilatih menggunakan data teks untuk memprediksi token berikutnya.

Sementara itu, **instruct model** telah melalui fine-tuning agar dapat mengikuti instruksi dan berinteraksi dalam percakapan.

Contohnya:

```text
SmolLM2-135M
```

merupakan base model, sedangkan:

```text
SmolLM2-135M-Instruct
```

merupakan versi yang telah di-instruction-tune.

Agar base model dapat digunakan dalam format percakapan, prompt harus disusun menggunakan struktur yang konsisten. Salah satu format yang digunakan adalah **ChatML**.

---

## 1.3 Contoh Struktur Pesan

Contoh percakapan dalam bentuk list Python:

```python
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"},
    {"role": "assistant", "content": "Hi! How can I help you today?"},
    {"role": "user", "content": "What's the weather?"},
]
```

Struktur tersebut kemudian dapat diubah menjadi format yang sesuai dengan chat template model.

---

## 1.4 Perbedaan Format Chat Template

Setiap model dapat menggunakan format template yang berbeda.

Contoh format ChatML:

```text
<|im_start|>system
You are a helpful assistant.<|im_end|>
<|im_start|>user
Hello!<|im_end|>
<|im_start|>assistant
Hi! How can I help you today?<|im_end|>
<|im_start|>user
What's the weather?<|im_start|>assistant
```

Sedangkan Mistral menggunakan format seperti:

```text
<s>[INST] You are a helpful assistant. [/INST]
Hi! How can I help you today?</s>
[INST] Hello! [/INST]
```

Perbedaan template dapat meliputi:

* Cara system message ditulis.
* Penanda awal dan akhir pesan.
* Special tokens yang digunakan.
* Struktur role dalam percakapan.

Karena setiap model dapat memiliki format berbeda, penggunaan template yang salah dapat menyebabkan performa model menjadi buruk atau menghasilkan perilaku yang tidak sesuai.

---

## 1.5 Menggunakan `apply_chat_template()`

Library Transformers dapat menangani perbedaan template tersebut melalui tokenizer.

```python
from transformers import AutoTokenizer

# These will use different templates automatically
mistral_tokenizer = AutoTokenizer.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.1"
)
qwen_tokenizer = AutoTokenizer.from_pretrained(
    "Qwen/Qwen-7B-Chat"
)
smol_tokenizer = AutoTokenizer.from_pretrained(
    "HuggingFaceTB/SmolLM2-135M-Instruct"
)

messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"},
]

# Each will format according to its model's template
mistral_chat = mistral_tokenizer.apply_chat_template(
    messages,
    tokenize=False
)
qwen_chat = qwen_tokenizer.apply_chat_template(
    messages,
    tokenize=False
)
smol_chat = smol_tokenizer.apply_chat_template(
    messages,
    tokenize=False
)
```

Dengan `apply_chat_template()`, percakapan akan diformat sesuai template yang digunakan tokenizer model.

---

## 1.6 Advanced Features

Chat templates tidak hanya digunakan untuk percakapan sederhana. Template juga dapat digunakan untuk:

1. **Tool Use**

   * Model berinteraksi dengan tools atau API eksternal.

2. **Multimodal Inputs**

   * Percakapan dapat berisi gambar, audio, atau media lainnya.

3. **Function Calling**

   * Model menghasilkan struktur untuk menjalankan fungsi tertentu.

4. **Multi-turn Context**

   * Model mempertahankan riwayat percakapan.

Contoh percakapan multimodal:

```python
messages = [
    {
        "role": "system",
        "content": "You are a helpful vision assistant that can analyze images.",
    },
    {
        "role": "user",
        "content": [
            {"type": "text", "text": "What's in this image?"},
            {
                "type": "image",
                "image_url": "https://example.com/image.jpg",
            },
        ],
    },
]
```

Contoh penggunaan tool:

```python
messages = [
    {
        "role": "system",
        "content": "You are an AI assistant that can use tools. Available tools: calculator, weather_api",
    },
    {
        "role": "user",
        "content": "What's 123 * 456 and is it raining in Paris?",
    },
    {
        "role": "assistant",
        "content": "Let me help you with that.",
        "tool_calls": [
            {
                "tool": "calculator",
                "parameters": {
                    "operation": "multiply",
                    "x": 123,
                    "y": 456,
                },
            },
            {
                "tool": "weather_api",
                "parameters": {
                    "city": "Paris",
                    "country": "France",
                },
            },
        ],
    },
    {
        "role": "tool",
        "tool_name": "calculator",
        "content": "56088",
    },
    {
        "role": "tool",
        "tool_name": "weather_api",
        "content": "{'condition': 'rain', 'temperature': 15}",
    },
]
```

---

## 1.7 Best Practices Chat Templates

Beberapa praktik yang perlu diperhatikan:

1. Gunakan format template yang konsisten.
2. Tentukan role dengan jelas.
3. Perhatikan batas token ketika mempertahankan conversation history.
4. Gunakan error handling untuk tool calls dan multimodal input.
5. Validasi struktur pesan sebelum dikirim ke model.

Hal yang perlu dihindari:

* Mencampur beberapa format template.
* Melebihi token limit karena conversation history terlalu panjang.
* Tidak menangani special characters dengan benar.
* Tidak melakukan validasi struktur pesan.
* Mengabaikan kebutuhan template yang spesifik terhadap model.

---

## 1.8 Hands-on Exercise

Materi memberikan latihan untuk mengubah dataset `HuggingFaceTB/smoltalk` menjadi format ChatML.

### 1. Load dataset

```python
from datasets import load_dataset

dataset = load_dataset("HuggingFaceTB/smoltalk")
```

### 2. Membuat fungsi konversi

```python
def convert_to_chatml(example):
    return {
        "messages": [
            {"role": "user", "content": example["input"]},
            {"role": "assistant", "content": example["output"]},
        ]
    }
```

### 3. Terapkan chat template

Setelah struktur `messages` dibuat, chat template dapat diterapkan menggunakan tokenizer model yang dipilih.

Hal penting yang perlu diperhatikan adalah memastikan format output sesuai dengan kebutuhan model target.

---
