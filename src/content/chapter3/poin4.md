# 4. Full Training Loop

Walaupun `Trainer` sangat membantu, terkadang kita membutuhkan kontrol penuh terhadap proses training.

Karena itu, chapter ini juga menunjukkan bagaimana membuat **training loop menggunakan PyTorch secara manual**.

Jika menggunakan `Trainer`, banyak proses dilakukan secara otomatis.

Dengan training loop manual, kita harus menangani sendiri:

* DataLoader
* model
* optimizer
* learning rate scheduler
* device
* forward pass
* loss
* backward pass
* optimizer step
* evaluation

### Persiapan Dataset

Sebelum membuat DataLoader, dataset perlu disesuaikan dengan input yang diharapkan model.

Beberapa langkah yang dilakukan:

```python
tokenized_datasets = tokenized_datasets.remove_columns(
    ["sentence1", "sentence2", "idx"]
)

tokenized_datasets = tokenized_datasets.rename_column(
    "label",
    "labels"
)

tokenized_datasets.set_format("torch")
```

Kemudian dibuat DataLoader:

```python
from torch.utils.data import DataLoader

train_dataloader = DataLoader(
    tokenized_datasets["train"],
    shuffle=True,
    batch_size=8,
    collate_fn=data_collator
)

eval_dataloader = DataLoader(
    tokenized_datasets["validation"],
    batch_size=8,
    collate_fn=data_collator
)
```

`DataLoader` bertugas menyediakan data dalam bentuk batch yang dapat digunakan model.

### Model dan Loss

Model dibuat seperti sebelumnya:

```python
model = AutoModelForSequenceClassification.from_pretrained(
    checkpoint,
    num_labels=2
)
```

Jika batch memiliki `labels`, model dapat mengembalikan `loss` sekaligus `logits`:

```python
outputs = model(**batch)

loss = outputs.loss
logits = outputs.logits
```

Contohnya, untuk batch berisi 8 data dan 2 kelas:

```text
logits.shape = [8, 2]
```

### Optimizer

Training loop membutuhkan optimizer.

Chapter ini menggunakan:

```python
from torch.optim import AdamW

optimizer = AdamW(
    model.parameters(),
    lr=5e-5
)
```

`AdamW` merupakan optimizer yang digunakan oleh `Trainer` dalam contoh tersebut. AdamW juga menerapkan weight decay secara terpisah dari update gradient.

### Learning Rate Scheduler

Learning rate tidak harus selalu konstan sepanjang training.

Dalam contoh ini digunakan linear decay:

```python
from transformers import get_scheduler

num_epochs = 3
num_training_steps = num_epochs * len(train_dataloader)

lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps,
)
```

Learning rate secara bertahap dikurangi selama proses training.

### Training Loop

Setelah semua komponen siap, inti training loop dapat ditulis seperti:

```python
model.train()

for epoch in range(num_epochs):
    for batch in train_dataloader:

        batch = {
            k: v.to(device)
            for k, v in batch.items()
        }

        outputs = model(**batch)
        loss = outputs.loss

        loss.backward()

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
```

Urutan pentingnya adalah:

```text
Batch
 ↓
Model / Forward Pass
 ↓
Loss
 ↓
Backward Pass
 ↓
Gradient
 ↓
Optimizer Step
 ↓
Learning Rate Scheduler
 ↓
Reset Gradient
```

### Evaluation Loop

Training loop tidak otomatis memberi tahu seberapa baik model bekerja.

Karena itu dibuat evaluation loop terpisah:

```python
model.eval()

for batch in eval_dataloader:

    batch = {
        k: v.to(device)
        for k, v in batch.items()
    }

    with torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(
        logits,
        dim=-1
    )

    metric.add_batch(
        predictions=predictions,
        references=batch["labels"]
    )
```

Setelah semua batch selesai:

```python
metric.compute()
```

Dengan cara tersebut, metric dapat dihitung berdasarkan seluruh data evaluasi.

---
