# 9. Summary

Chapter 1 memberikan dasar untuk memahami hubungan antara **NLP, Transformer, dan LLM**.

Urutan konsep yang dapat digunakan untuk memahami chapter ini adalah:

```text
Natural Language Processing
          ↓
Language Models
          ↓
Transformer
          ↓
Attention
          ↓
Transformer Architecture
          ↓
Pretraining
          ↓
Fine-tuning
          ↓
Task-specific Model
          ↓
Inference
          ↓
Text Generation
```

## Hal-hal utama yang perlu diingat

### 1. NLP

NLP memungkinkan komputer memproses bahasa manusia dan mencakup berbagai task seperti classification, NER, question answering, summarization, translation, dan generation.

### 2. Transformer

Transformer merupakan arsitektur yang menggunakan attention untuk memproses hubungan antar-token dan konteks.

### 3. Attention

Attention memungkinkan model memberikan perhatian lebih terhadap bagian input yang relevan ketika memproses suatu token.

### 4. Tiga arsitektur utama

```text
Encoder-only
→ memahami/menganalisis input

Decoder-only
→ menghasilkan teks

Encoder-decoder
→ mengubah input menjadi output
```

### 5. Pretraining dan Fine-tuning

Model dapat dipretrain menggunakan data dalam jumlah besar kemudian disesuaikan dengan task tertentu menggunakan fine-tuning.

### 6. Inference

Inference adalah proses menggunakan model yang telah dilatih untuk menghasilkan output.

Pada LLM generatif, proses utamanya dapat dipahami melalui:

```text
Prefill → Decode → Token Selection → Output
```

### 7. Generation

LLM menghasilkan teks secara autoregressive, yaitu memprediksi token berikutnya berdasarkan token-token yang telah tersedia.

### 8. Optimization

Inference dapat dioptimalkan menggunakan teknik seperti **KV Cache**, sedangkan performanya dapat dievaluasi menggunakan:

* TTFT;
* TPOT;
* throughput;
* VRAM usage.

### 9. Limitations

LLM tetap memiliki keterbatasan seperti:

* bias;
* hallucination;
* context limitation;
* computational cost;
* kebutuhan memory dan resource.

---

## Kesimpulan

Chapter 1 pada dasarnya membangun pemahaman dari level paling dasar sampai proses LLM menghasilkan teks.

Kita mulai dari **NLP dan task yang dapat dilakukan**, kemudian memahami bahwa banyak task tersebut dapat diselesaikan menggunakan **Transformer**.

Transformer menggunakan **attention** untuk memahami hubungan antar-token. Dari sini muncul tiga bentuk arsitektur utama, yaitu **encoder-only, decoder-only, dan encoder-decoder**, yang masing-masing memiliki karakteristik dan penggunaan berbeda.

Model kemudian dapat melalui proses **pretraining** untuk memperoleh pengetahuan umum dan **fine-tuning** untuk menyesuaikan model dengan task tertentu.

Untuk LLM generatif, proses penggunaan model disebut **inference**, yang secara sederhana terdiri dari **prefill dan decode**. Pada tahap decode, model menghasilkan token satu per satu dengan menggunakan berbagai strategi seperti temperature, top-k, top-p, penalties, dan beam search.

Namun, kemampuan tersebut tetap memiliki batas. Model dapat membawa **bias**, menghasilkan **hallucination**, memiliki keterbatasan **context**, serta membutuhkan resource komputasi yang besar.

Dengan memahami konsep-konsep tersebut, kita memiliki dasar untuk mempelajari bagian berikutnya dari Hugging Face LLM Course, terutama mengenai bagaimana input teks diproses lebih detail melalui **tokenization**, bagaimana model direpresentasikan, dan bagaimana Transformer bekerja pada level yang lebih dalam.
