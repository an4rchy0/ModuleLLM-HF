# 7. Kesimpulan

Chapter 3 membawa pembelajaran dari sekadar **menggunakan pretrained model** menjadi **melatih model tersebut agar sesuai dengan task tertentu**.

Hal-hal utama yang dipelajari:

* Dataset dapat diambil langsung dari Hugging Face Hub menggunakan 🤗 Datasets.
* Dataset perlu diproses sebelum dapat digunakan oleh model.
* Tokenizer mengubah teks menjadi input numerik.
* Untuk pasangan kalimat, tokenizer dapat menangani kedua sequence sekaligus.
* `token_type_ids` dapat digunakan untuk membedakan bagian input pertama dan kedua pada model yang mendukungnya.
* `Dataset.map()` membantu melakukan preprocessing secara efisien.
* `batched=True` dapat mempercepat proses preprocessing.
* Padding sebaiknya dapat dilakukan secara dinamis ketika batch dibuat.
* `DataCollatorWithPadding` membantu melakukan dynamic padding.
* `Trainer` menyediakan API tingkat tinggi untuk fine-tuning.
* `TrainingArguments` digunakan untuk mengatur konfigurasi training.
* Evaluation membutuhkan metric agar performa model dapat dianalisis dengan lebih jelas.
* `Evaluate` dapat digunakan untuk menghitung metric seperti accuracy dan F1.
* Custom PyTorch training loop memberikan kontrol lebih besar terhadap proses training.
* Komponen penting training loop meliputi model, loss, backward pass, optimizer, scheduler, dan evaluation.
* 🤗 Accelerate dapat membantu menjalankan training pada beberapa GPU atau TPU.
* Learning curves membantu memahami apakah model belajar dengan baik.
* Overfitting, underfitting, dan training yang tidak stabil dapat dikenali melalui pola learning curves.

**Inti Chapter 3:**

> **Pretrained model tidak harus digunakan apa adanya. Dengan dataset yang sesuai, model dapat di-fine-tune untuk tugas tertentu. Hugging Face menyediakan beberapa tingkat abstraksi, mulai dari `Trainer` yang sederhana hingga custom training loop dengan PyTorch dan Accelerate untuk kontrol serta distributed training yang lebih besar.**

Dengan demikian, setelah Chapter 3 kita sudah memiliki alur yang cukup lengkap:

```text
Understand Model
      ↓
Tokenizer
      ↓
Dataset
      ↓
Preprocessing
      ↓
Fine-Tuning
      ↓
Evaluation
      ↓
Learning Curves
      ↓
Optimization
```

Ini menjadi fondasi penting sebelum masuk ke tahap berikutnya dalam ekosistem Hugging Face, yaitu **menyimpan, membagikan, dan menggunakan model yang telah dilatih melalui Hugging Face Hub**.
