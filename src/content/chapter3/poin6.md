# 6. Fine-Tuning, Check!

Setelah menyelesaikan bagian-bagian sebelumnya, proses fine-tuning secara keseluruhan dapat dirangkum menjadi:

```text
1. Pilih pretrained model
        ↓
2. Pilih dataset
        ↓
3. Load dataset
        ↓
4. Preprocess / tokenize
        ↓
5. Dynamic padding
        ↓
6. Siapkan model
        ↓
7. Fine-tuning
        ↓
8. Evaluation
        ↓
9. Analisis learning curves
        ↓
10. Optimasi / perbaikan
```

Chapter ini memperkenalkan dua cara utama untuk melakukan training:

### Menggunakan `Trainer`

```text
Dataset
 ↓
Preprocessing
 ↓
Trainer
 ↓
Training
 ↓
Evaluation
```

Kelebihannya adalah banyak detail training ditangani secara otomatis.

### Menggunakan Custom Training Loop

```text
Dataset
 ↓
DataLoader
 ↓
Model
 ↓
Loss
 ↓
Backward
 ↓
Optimizer
 ↓
Scheduler
 ↓
Evaluation
```

Pendekatan ini memberikan kontrol yang lebih besar terhadap setiap tahap training.

---

## 🤗 Accelerate untuk Distributed Training

Training loop manual pada satu CPU/GPU dapat dikembangkan menggunakan **🤗 Accelerate**.

Accelerate membantu menangani:

* device placement;
* distributed training;
* multiple GPU;
* TPU;
* mixed precision.

Contoh inisialisasi:

```python
from accelerate import Accelerator

accelerator = Accelerator()
```

Kemudian model, optimizer, dan dataloader dipersiapkan:

```python
train_dl, eval_dl, model, optimizer = accelerator.prepare(
    train_dataloader,
    eval_dataloader,
    model,
    optimizer
)
```

Pada backward pass:

```python
accelerator.backward(loss)
```

Dengan perubahan tersebut, training loop yang sebelumnya dibuat untuk satu device dapat disiapkan untuk distributed setup.

Untuk menjalankannya, Accelerate menyediakan:

```bash
accelerate config
```

untuk konfigurasi environment, kemudian:

```bash
accelerate launch train.py
```

untuk menjalankan training.

---
