# 3. Fine-Tuning dengan `Trainer` API

Setelah dataset selesai diproses, langkah berikutnya adalah melakukan fine-tuning.

Hugging Face menyediakan class **`Trainer`** yang menangani banyak bagian dari proses training secara otomatis.

Alur sederhananya:

```text
Dataset
   ↓
Tokenizer
   ↓
Tokenized Dataset
   ↓
Data Collator
   ↓
Trainer
   ↓
Training
   ↓
Evaluation
```

`Trainer` dapat digunakan untuk melakukan fine-tuning pretrained model tanpa harus menulis seluruh training loop secara manual.

### `TrainingArguments`

Sebelum membuat `Trainer`, kita perlu menentukan konfigurasi training menggunakan `TrainingArguments`.

```python
from transformers import TrainingArguments

training_args = TrainingArguments(
    "test-trainer"
)
```

Parameter tersebut digunakan untuk menentukan berbagai konfigurasi training, seperti:

* lokasi penyimpanan model,
* checkpoint,
* batch size,
* learning rate,
* jumlah epoch,
* strategi evaluasi,
* dan berbagai konfigurasi training lainnya.

### Membuat Model

Model dapat dibuat menggunakan:

```python
from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(
    checkpoint,
    num_labels=2
)
```

Karena BERT pada awalnya bukan pretrained khusus untuk klasifikasi pasangan kalimat MRPC, classification head yang sesuai akan ditambahkan.

Dengan kata lain:

```text
Pretrained BERT
      ↓
Transformer representation
      ↓
Classification Head
      ↓
2 kelas output
```

Beberapa weight berasal dari pretrained model, sedangkan bagian classification head yang baru perlu dilatih menggunakan dataset task tersebut.

### Membuat `Trainer`

```python
from transformers import Trainer

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
    processing_class=tokenizer,
)
```

`Trainer` kemudian dapat menjalankan fine-tuning dengan:

```python
trainer.train()
```

Namun, training saja belum cukup. Kita juga perlu mengetahui apakah model memiliki performa yang baik.

### Evaluation

Untuk melakukan evaluasi, `Trainer` perlu mengetahui:

1. kapan evaluasi dilakukan;
2. metric apa yang harus dihitung.

Contohnya:

```python
training_args = TrainingArguments(
    "test-trainer",
    eval_strategy="epoch"
)
```

Kemudian kita dapat menggunakan `Trainer.predict()` untuk mendapatkan prediction.

Output model berupa **logits**. Untuk mendapatkan kelas prediksi, digunakan nilai dengan skor terbesar:

```python
preds = np.argmax(
    predictions.predictions,
    axis=-1
)
```

Untuk MRPC, metric yang digunakan adalah:

* **Accuracy**
* **F1 score**

Library 🤗 Evaluate dapat digunakan untuk menghitung metric tersebut:

```python
import evaluate

metric = evaluate.load("glue", "mrpc")

metric.compute(
    predictions=preds,
    references=predictions.label_ids
)
```

Dengan `compute_metrics()`, metric tersebut dapat diintegrasikan langsung ke dalam `Trainer`.

### Advanced Training Features

`Trainer` juga menyediakan beberapa fitur untuk meningkatkan efisiensi training.

#### Mixed Precision

```python
TrainingArguments(
    "test-trainer",
    eval_strategy="epoch",
    fp16=True
)
```

Mixed precision menggunakan representasi floating point dengan precision yang lebih rendah pada bagian tertentu sehingga training dapat menjadi lebih cepat dan menggunakan lebih sedikit memory.

#### Gradient Accumulation

Jika GPU memiliki keterbatasan memory, gradient accumulation dapat digunakan untuk memperoleh **effective batch size** yang lebih besar.

Contohnya:

```python
per_device_train_batch_size=4
gradient_accumulation_steps=4
```

Effective batch size menjadi:

```text
4 × 4 = 16
```

#### Learning Rate Scheduling

Learning rate dapat diatur menggunakan scheduler tertentu.

Contohnya:

```python
learning_rate=2e-5
lr_scheduler_type="cosine"
```

`Trainer` juga mendukung training pada beberapa GPU atau TPU dan menyediakan berbagai konfigurasi distributed training.

---