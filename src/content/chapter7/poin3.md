**Masked Language Modeling (MLM)** merupakan objective yang digunakan oleh model seperti BERT.

Ide dasarnya adalah sebagian token pada kalimat disembunyikan, kemudian model diminta memprediksi token yang hilang.

Contoh:

```text
The cat is sitting on the [MASK].
```

Model harus memprediksi:

```text
mat
```

atau token lain yang paling sesuai dengan konteks.

Berbeda dengan causal language modeling, MLM memungkinkan model melihat konteks dari **sebelum dan sesudah token**.

Secara sederhana:

```text
Causal LM:

The cat is sitting on the ...
                      ↑
              memprediksi berikutnya


Masked LM:

The cat is [MASK] on the mat.
          ↑
   melihat konteks kiri dan kanan
```

### Data collator

Karena token yang akan dimasking dapat dipilih secara dinamis ketika batch dibuat, kita dapat menggunakan:

```python
from transformers import DataCollatorForLanguageModeling

data_collator = DataCollatorForLanguageModeling(
    tokenizer=tokenizer,
    mlm_probability=0.15
)
```

`mlm_probability=0.15` berarti sekitar 15% token dipilih untuk objective masked language modeling.

### Training

Setelah dataset ditokenisasi, model dapat dilatih menggunakan `Trainer`.

Secara umum:

```python
from transformers import Trainer

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
)

trainer.train()
```

Dengan pendekatan ini, kita dapat melakukan continued pretraining atau fine-tuning model menggunakan corpus yang sesuai dengan domain tertentu.

Contohnya, jika model awal dilatih menggunakan corpus umum, kita dapat melatihnya lagi menggunakan corpus yang lebih spesifik seperti:

```text
dokumen medis
dokumen hukum
dokumentasi teknis
artikel ilmiah
```

Tujuannya adalah membuat representasi model lebih sesuai dengan domain tersebut.

---