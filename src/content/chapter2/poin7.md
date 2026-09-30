# 7. Optimized Inference

Setelah memahami inference menggunakan model secara langsung, Chapter 2 kemudian masuk ke masalah yang lebih praktis:

> Bagaimana menjalankan LLM secara efisien dalam production?

Menjalankan model secara sederhana belum tentu cukup ketika:

* model berukuran besar;
* jumlah pengguna banyak;
* request datang secara bersamaan;
* GPU memory terbatas;
* latency perlu rendah;
* throughput perlu tinggi.

Karena itu terdapat framework khusus untuk **optimized inference deployment**.

Materi membahas tiga framework:

1. **Text Generation Inference (TGI)**
2. **vLLM**
3. **llama.cpp**

Ketiganya memiliki tujuan yang sama secara umum, yaitu membantu menjalankan dan melayani LLM secara lebih efisien, tetapi pendekatan dan target penggunaannya berbeda.

---

# 7.1 Text Generation Inference — TGI

**Text Generation Inference (TGI)** dirancang untuk deployment LLM dalam production.

Salah satu fokus TGI adalah membuat penggunaan memory dan inference lebih efisien dan konsisten.

TGI menggunakan beberapa teknik, termasuk:

* Flash Attention 2;
* continuous batching;
* optimasi penggunaan GPU;
* pemindahan sebagian model antara CPU dan GPU jika diperlukan.

---

## 7.2 Flash Attention

Attention pada Transformer dapat menjadi mahal terutama ketika sequence semakin panjang.

Flash Attention mengoptimalkan bagaimana operasi attention menggunakan memory.

Masalah yang ingin dikurangi adalah bottleneck pada perpindahan data antara memory GPU yang berbeda.

Secara sederhana:

```text
Traditional Attention
→ banyak memory transfer
→ memory bottleneck

Flash Attention
→ memory access lebih efisien
→ attention lebih efisien
```

Hal ini dapat membantu mengurangi penggunaan VRAM dan meningkatkan efisiensi inference.

---

# 7.3 Continuous Batching

Pada sistem production, request tidak selalu datang bersamaan.

Misalnya:

```text
Request A → datang
Request B → datang
Request C → datang beberapa saat kemudian
```

Continuous batching memungkinkan sistem mengatur request yang masuk secara dinamis sehingga GPU dapat terus diberi pekerjaan.

Tujuannya adalah meningkatkan penggunaan resource dan throughput dibandingkan hanya memproses batch statis.

TGI menggunakan continuous batching sebagai salah satu mekanisme optimasinya.

---

# 7.4 vLLM

vLLM menggunakan pendekatan berbeda melalui **PagedAttention**.

Masalah yang ingin ditangani adalah penggunaan memory untuk **KV Cache**.

KV Cache dapat menjadi sangat besar terutama ketika:

* sequence panjang;
* banyak request diproses bersamaan.

vLLM membagi memory tersebut ke dalam blok atau "pages".

Secara sederhana:

```text
KV Cache
   ↓
Dibagi menjadi pages
   ↓
Page management
   ↓
Memory lebih fleksibel
```

Pendekatan ini membantu mengurangi memory fragmentation dan memungkinkan penggunaan memory yang lebih fleksibel.

---

# 7.5 PagedAttention

PagedAttention memiliki beberapa karakteristik:

1. KV cache dibagi menjadi blok/page;
2. page tidak harus berada secara contiguous di memory;
3. terdapat mekanisme page table untuk melacak page;
4. page tertentu dapat digunakan bersama dalam skenario tertentu.

Tujuan akhirnya adalah membuat penggunaan KV cache lebih efisien.

Materi menyebutkan bahwa pendekatan PagedAttention dapat menghasilkan peningkatan throughput yang sangat besar dibandingkan pendekatan tradisional dalam kondisi tertentu.

---

# 7.6 llama.cpp

Berbeda dengan TGI dan vLLM, **llama.cpp** berfokus pada implementasi yang ringan dan efisien menggunakan C/C++.

Salah satu tujuan utamanya adalah memungkinkan model besar dijalankan pada hardware dengan resource terbatas.

llama.cpp mendukung:

* CPU inference;
* optional GPU acceleration;
* quantization;
* optimasi hardware;
* KV cache management.

---

# 7.7 Quantization

Quantization merupakan salah satu teknik penting dalam llama.cpp.

Model biasanya memiliki weights dengan precision tertentu, misalnya:

```text
FP32
FP16
```

Quantization mengubah representasi tersebut menjadi precision yang lebih rendah, misalnya:

```text
INT8
4-bit
3-bit
2-bit
```

Tujuannya adalah:

* mengurangi ukuran model;
* mengurangi penggunaan memory;
* memungkinkan model lebih besar dijalankan pada hardware yang lebih terbatas;
* meningkatkan efisiensi inference.

Tentunya terdapat trade-off karena pengurangan precision dapat memengaruhi kualitas model.

---

# 7.8 Perbedaan TGI, vLLM, dan llama.cpp

Secara sederhana:

| Framework | Fokus utama                          | Teknik utama                         |
| --------- | ------------------------------------ | ------------------------------------ |
| TGI       | Production deployment                | Flash Attention, continuous batching |
| vLLM      | High-performance serving             | PagedAttention                       |
| llama.cpp | Local/resource-constrained inference | Quantization, optimized C/C++        |

### TGI

Lebih berorientasi pada deployment production dan integrasi sistem.

Materi menyebut fitur seperti:

* Kubernetes;
* monitoring;
* Prometheus;
* Grafana;
* autoscaling;
* logging;
* rate limiting;
* content filtering.

### vLLM

Lebih berorientasi pada:

* performance;
* fleksibilitas;
* Python;
* API compatibility;
* deployment dengan cluster.

### llama.cpp

Lebih berorientasi pada:

* portability;
* simplicity;
* local deployment;
* CPU;
* hardware dengan resource terbatas.

---

# 7.9 Hubungan Chapter 2 secara keseluruhan

Chapter 2 sebenarnya memiliki alur pembelajaran yang cukup jelas:

```text
Chapter 1
Memahami Transformer dan pipeline
          ↓
Chapter 2
Membongkar isi pipeline
          ↓
Tokenizer
          ↓
Token IDs
          ↓
Tensor
          ↓
Model
          ↓
Logits
          ↓
Prediction
```

Kemudian masalah yang lebih kompleks:

```text
Single Sequence
      ↓
Multiple Sequences
      ↓
Batching
      ↓
Different Lengths
      ↓
Padding
      ↓
Attention Mask
      ↓
Truncation
```

Setelah memahami penggunaan model:

```text
Model Inference
      ↓
Production Inference
      ↓
Optimization
      ↓
TGI / vLLM / llama.cpp
```

---

