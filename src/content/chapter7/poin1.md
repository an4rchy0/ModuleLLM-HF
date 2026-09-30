## 1. Introduction

Pada Chapter 3, kita sudah mempelajari cara melakukan fine-tuning model untuk **text classification**. Pada Chapter 7, kita akan menerapkan pengetahuan tersebut ke beberapa task bahasa yang umum digunakan dalam NLP dan LLM.

Task yang dibahas adalah:

1. **Token classification**
2. **Masked language modeling**
3. **Translation**
4. **Summarization**
5. **Causal language modeling**
6. **Question answering**

Setiap bagian dapat dipelajari secara terpisah. Kita dapat menggunakan `Trainer` API untuk training yang lebih praktis, atau membuat training loop sendiri menggunakan `Accelerate` jika membutuhkan kontrol yang lebih besar.

Secara sederhana:

```text
Dataset
   ↓
Tokenizer
   ↓
Preprocessing
   ↓
Model
   ↓
Training
   ↓
Evaluation
   ↓
Upload ke Hub
```

Chapter ini menunjukkan bagaimana komponen-komponen tersebut digunakan bersama untuk menyelesaikan berbagai task NLP.

---