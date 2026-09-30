## 3.1 Pengertian LoRA

Fine-tuning LLM berukuran besar membutuhkan resource yang besar.

**LoRA (Low-Rank Adaptation)** merupakan teknik parameter-efficient fine-tuning yang memungkinkan kita melakukan fine-tuning dengan jumlah parameter yang lebih sedikit.

Konsep utamanya adalah:

* Bobot pretrained model tetap dibekukan.
* Matriks kecil yang dapat dilatih ditambahkan ke layer model.
* Update bobot direpresentasikan menggunakan low-rank matrices.
* Jumlah parameter yang harus dilatih menjadi jauh lebih kecil.

LoRA biasanya diterapkan pada attention weights.

---

## 3.2 Cara Kerja LoRA

Daripada melakukan update terhadap seluruh parameter model, LoRA menggunakan matriks berukuran lebih kecil untuk merepresentasikan perubahan bobot.

Secara sederhana:

```text
Pretrained Model
      |
      |-- Frozen Weights
      |
      |-- LoRA Adapter
             |
             +-- Trainable Parameters
```

Dengan pendekatan tersebut, model dasar tidak perlu dilatih ulang sepenuhnya.

Pada saat inference, adapter dapat digabungkan kembali dengan base model sehingga tidak menghasilkan tambahan latency akibat adapter terpisah.

---

## 3.3 Keuntungan LoRA

### Memory Efficiency

* Hanya parameter adapter yang perlu dilatih.
* Bobot base model tetap frozen.
* Base model dapat dimuat menggunakan precision yang lebih rendah.
* Fine-tuning model besar dapat dilakukan pada hardware yang lebih terbatas.

### Training

PEFT/LoRA dapat diintegrasikan dengan mudah.

Selain LoRA, tersedia juga **QLoRA**, yang menggunakan quantization untuk mengurangi kebutuhan memory lebih jauh.

### Adapter Management

Adapter dapat:

* Disimpan dalam checkpoint.
* Diganti dengan adapter lain.
* Digabungkan kembali ke base model.

---

## 3.4 Loading LoRA Adapter dengan PEFT

PEFT menyediakan interface untuk menggunakan berbagai parameter-efficient fine-tuning method, termasuk LoRA.

Contoh memuat adapter:

```python
from peft import PeftModel, PeftConfig

config = PeftConfig.from_pretrained(
    "ybelkada/opt-350m-lora"
)

model = AutoModelForCausalLM.from_pretrained(
    config.base_model_name_or_path
)

lora_model = PeftModel.from_pretrained(
    model,
    "ybelkada/opt-350m-lora"
)
```

Adapter dapat digunakan tanpa menggabungkannya langsung dengan base model.

---

## 3.5 LoRA dengan `SFTTrainer`

`SFTTrainer` dari TRL dapat dikombinasikan dengan PEFT untuk melakukan supervised fine-tuning menggunakan LoRA.

Alur dasarnya:

1. Membuat konfigurasi LoRA.
2. Membuat `SFTTrainer`.
3. Melakukan training.
4. Menyimpan adapter.

---

## 3.6 LoRA Configuration

Beberapa parameter penting dalam `LoraConfig`:

| Parameter        | Fungsi                                  |
| ---------------- | --------------------------------------- |
| `r`              | Rank dari low-rank matrices             |
| `lora_alpha`     | Scaling factor untuk LoRA               |
| `lora_dropout`   | Dropout pada LoRA layers                |
| `bias`           | Menentukan bagaimana bias diperlakukan  |
| `target_modules` | Menentukan module yang menggunakan LoRA |

Contoh konfigurasi:

```python
from peft import LoraConfig

# TODO: Configure LoRA parameters
# r: rank dimension for LoRA update matrices (smaller = more compression)
rank_dimension = 6

# lora_alpha: scaling factor for LoRA layers (higher = stronger adaptation)
lora_alpha = 8

# lora_dropout: dropout probability for LoRA layers (helps prevent overfitting)
lora_dropout = 0.05

peft_config = LoraConfig(
    r=rank_dimension,
    lora_alpha=lora_alpha,
    lora_dropout=lora_dropout,
    bias="none",
    target_modules="all-linear",
    task_type="CAUSAL_LM",
)
```

`r` menentukan dimensi low-rank matrices.

Semakin kecil rank, semakin sedikit parameter yang perlu dilatih, tetapi kemampuan adapter untuk merepresentasikan perubahan juga dapat berkurang.

---

## 3.7 Menggunakan `SFTTrainer` dengan LoRA

Setelah `LoraConfig` dibuat, konfigurasi tersebut dapat diberikan kepada `SFTTrainer`.

```python
# Create SFTTrainer with LoRA configuration
trainer = SFTTrainer(
    model=model,
    args=args,
    train_dataset=dataset["train"],
    peft_config=peft_config,
    max_seq_length=max_seq_length,
    processing_class=tokenizer,
)
```

Dengan pendekatan tersebut, training tetap menggunakan SFT tetapi hanya parameter LoRA yang dilatih.

---

## 3.8 Merging LoRA Adapter

Setelah training selesai, adapter dapat digabungkan kembali dengan base model.

Tujuannya adalah menghasilkan satu model yang sudah memiliki bobot hasil adaptasi sehingga saat deployment adapter tidak perlu dimuat secara terpisah.

Contoh:

```python
import torch
from transformers import AutoModelForCausalLM
from peft import PeftModel

# 1. Load the base model
base_model = AutoModelForCausalLM.from_pretrained(
    "base_model_name",
    torch_dtype=torch.float16,
    device_map="auto"
)

# 2. Load the PEFT model with adapter
peft_model = PeftModel.from_pretrained(
    base_model,
    "path/to/adapter",
    torch_dtype=torch.float16
)

# 3. Merge adapter weights with base model
merged_model = peft_model.merge_and_unload()
```

Jika menyimpan model hasil merge, tokenizer juga perlu disimpan:

```python
# Save both model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("base_model_name")

merged_model.save_pretrained(
    "path/to/save/merged_model"
)

tokenizer.save_pretrained(
    "path/to/save/merged_model"
)
```

---

