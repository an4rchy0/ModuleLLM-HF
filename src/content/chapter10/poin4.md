Setelah model selesai di-fine-tune menggunakan SFT atau LoRA, model perlu dievaluasi.

Evaluasi digunakan untuk mengetahui seberapa baik model bekerja pada tugas yang ditargetkan.

Benchmark otomatis dapat digunakan sebagai salah satu cara evaluasi, tetapi hasil benchmark tidak selalu menggambarkan performa model pada penggunaan nyata.

---

## 4.1 Automatic Benchmarks

Automatic benchmark merupakan dataset dan evaluasi terstandarisasi yang memiliki tugas serta metric tertentu.

Keuntungannya:

* Hasil dapat dibandingkan secara konsisten.
* Evaluasi dapat direproduksi.
* Kemampuan model dapat diukur pada berbagai tugas.

Namun, benchmark tidak selalu merepresentasikan kebutuhan dunia nyata.

Model yang mendapatkan hasil baik pada benchmark akademik belum tentu bekerja dengan baik pada domain aplikasi tertentu.

---

## 4.2 General Knowledge Benchmarks

Beberapa benchmark yang digunakan untuk menguji pengetahuan umum:

### MMLU

**MMLU (Massive Multitask Language Understanding)** menguji pengetahuan pada 57 bidang.

### TruthfulQA

TruthfulQA digunakan untuk mengevaluasi kecenderungan model dalam menghasilkan jawaban yang benar dan tidak sekadar mengulang miskonsepsi umum.

---

## 4.3 Reasoning Benchmarks

### BBH

**Big Bench Hard (BBH)** digunakan untuk tugas yang membutuhkan reasoning dan logical thinking.

### GSM8K

**GSM8K** berfokus pada kemampuan menyelesaikan persoalan matematika.

Keduanya membantu mengukur kemampuan reasoning, tetapi belum tentu mencerminkan semua bentuk reasoning yang dibutuhkan dalam aplikasi nyata.

---

## 4.4 Language Understanding

**HELM** merupakan framework evaluasi yang mencakup berbagai aspek kemampuan language model, seperti:

* Commonsense.
* World knowledge.
* Reasoning.
* Language processing.

Namun, benchmark seperti ini tetap memiliki keterbatasan ketika digunakan untuk merepresentasikan percakapan alami atau domain tertentu.

---

## 4.5 Domain-Specific Benchmarks

Beberapa benchmark dibuat khusus untuk domain tertentu.

### MATH

MATH berisi 12.500 masalah matematika yang berasal dari berbagai kompetisi matematika.

Materinya mencakup:

* Algebra.
* Geometry.
* Number theory.
* Counting.
* Probability.

Benchmark ini membutuhkan multi-step reasoning dan kemampuan memahami notasi matematika.

### HumanEval

HumanEval merupakan benchmark untuk kemampuan menghasilkan kode Python.

Terdapat 164 programming problems yang menguji apakah kode yang dihasilkan benar-benar dapat menyelesaikan tugas berdasarkan test case.

### Alpaca Eval

Alpaca Eval digunakan untuk mengevaluasi kualitas instruction-following model.

Framework ini menggunakan model lain sebagai judge untuk mengevaluasi output.

---

# 4.6 Alternative Evaluation Approaches

## LLM-as-Judge

Satu language model digunakan untuk mengevaluasi output language model lainnya.

Pendekatan ini dapat memberikan feedback yang lebih fleksibel dibandingkan metric tradisional, tetapi tetap memiliki bias dan keterbatasan.

## Evaluation Arenas

Contohnya adalah Chatbot Arena.

Pengguna membandingkan output dua model secara anonim dan memberikan preferensi berdasarkan jawaban yang mereka lihat.

Pendekatan ini dapat menangkap pola penggunaan nyata, tetapi hasilnya juga dapat dipengaruhi oleh karakteristik pengguna dan distribusi prompt.

## Custom Benchmark Suites

Organisasi juga dapat membuat benchmark internal yang sesuai dengan kebutuhan mereka sendiri.

Contohnya:

* Domain-specific knowledge.
* Kasus penggunaan nyata.
* Edge cases.
* Skenario deployment.

---

# 4.7 Custom Evaluation

Benchmark standar sebaiknya bukan satu-satunya metode evaluasi.

Pendekatan yang dapat digunakan:

1. Mulai dengan benchmark standar sebagai baseline.
2. Identifikasi kebutuhan spesifik aplikasi.
3. Buat dataset evaluasi yang merepresentasikan penggunaan sebenarnya.
4. Gunakan evaluasi berlapis.

Evaluasi berlapis dapat terdiri dari:

* Automated metrics.
* Human evaluation.
* Domain expert review.
* A/B testing dalam lingkungan terkontrol.

---

# 4.8 Evaluasi dengan Lighteval

`lighteval` dapat digunakan untuk mengevaluasi model pada berbagai benchmark.

Format task Lighteval:

```text
{suite}|{task}|{num_few_shot}|{auto_reduce}
```

Parameter:

| Parameter      | Fungsi                                                 |
| -------------- | ------------------------------------------------------ |
| `suite`        | Benchmark suite, misalnya `mmlu` atau `truthfulqa`     |
| `task`         | Task tertentu dalam suite                              |
| `num_few_shot` | Jumlah contoh yang dimasukkan ke prompt                |
| `auto_reduce`  | Mengurangi contoh few-shot jika prompt terlalu panjang |

Contoh:

```text
mmlu|abstract_algebra|0|0
```

Artinya model dievaluasi pada task `abstract_algebra` dari MMLU menggunakan zero-shot.

---

## 4.9 Contoh Evaluation Pipeline

Contoh evaluasi model pada beberapa task yang berhubungan dengan bidang medis:

```bash
lighteval accelerate \
    "pretrained=your-model-name" \
    "mmlu|anatomy|0|0" \
    "mmlu|high_school_biology|0|0" \
    "mmlu|high_school_chemistry|0|0" \
    "mmlu|professional_medicine|0|0" \
    --max_samples 40 \
    --batch_size 1 \
    --output_path "./results" \
    --save_generations true
```

Hasil evaluasi ditampilkan dalam bentuk tabel yang berisi task, metric, value, dan standard error.

Contoh:

```text
|                  Task                  |Version|Metric|Value |   |Stderr|
|----------------------------------------|------:|------|-----:|---|-----:|
|all                                     |       |acc   |0.3333|±  |0.1169|
|leaderboard:mmlu:_average:5             |       |acc   |0.3400|±  |0.1121|
|leaderboard:mmlu:anatomy:5              |      0|acc   |0.4500|±  |0.1141|
|leaderboard:mmlu:high_school_biology:5  |      0|acc   |0.1500|±  |0.0819|
```

Lighteval juga menyediakan Python API untuk melakukan evaluasi yang lebih fleksibel.

---
