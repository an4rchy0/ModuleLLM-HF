# Kesimpulan Chapter 2

Chapter 2 menjelaskan apa yang sebenarnya terjadi di balik fungsi `pipeline()` pada Hugging Face Transformers.

Konsep terpentingnya adalah bahwa **model Transformer tidak menerima teks secara langsung**. Teks terlebih dahulu diproses oleh **tokenizer**, kemudian diubah menjadi representasi numerik seperti `input_ids` dan `attention_mask`.

Input tersebut kemudian diubah menjadi tensor dan diberikan kepada model.

```text
Text
 ↓
Tokenizer
 ↓
Input IDs + Attention Mask
 ↓
Tensor
 ↓
Transformer
 ↓
Logits
 ↓
Prediction
```

Tokenizer sendiri memiliki berbagai strategi tokenization, mulai dari:

* word-based;
* character-based;
* subword.

Subword menjadi pendekatan penting karena dapat memberikan keseimbangan antara ukuran vocabulary, jumlah token, dan kemampuan merepresentasikan kata yang jarang.

Chapter ini juga menjelaskan bagaimana model menangani banyak sequence melalui **batching**. Karena setiap sequence dapat memiliki panjang berbeda, digunakan **padding** agar bentuk tensor seragam. Namun padding tidak boleh dianggap sebagai informasi sehingga digunakan **attention mask** untuk memberitahu model token mana yang harus diperhatikan dan mana yang harus diabaikan.

Untuk sequence yang terlalu panjang, digunakan **truncation**.

Pada akhirnya, seluruh proses tersebut dapat dilakukan secara praktis melalui:

```python
tokens = tokenizer(
    sequences,
    padding=True,
    truncation=True,
    return_tensors="pt"
)

output = model(**tokens)
```

Setelah memahami inference dasar, Chapter 2 memperkenalkan optimasi deployment menggunakan **TGI, vLLM, dan llama.cpp**.

* **TGI** berfokus pada production serving dengan teknik seperti Flash Attention dan continuous batching.
* **vLLM** menggunakan PagedAttention untuk mengelola KV Cache secara lebih efisien.
* **llama.cpp** berfokus pada inference yang ringan dan portable, termasuk melalui quantization.

Dengan demikian, Chapter 2 membawa pemahaman dari:

> **"Bagaimana menggunakan Transformer?"**

menjadi:

> **"Apa yang sebenarnya terjadi di balik pipeline dan bagaimana model tersebut dijalankan secara efisien?"**
