**Model card** adalah file yang sangat penting dalam sebuah model repository.

Fungsinya adalah memberikan informasi mengenai model sehingga pengguna lain dapat:

* memahami tujuan model;
* memahami bagaimana model dilatih;
* mengetahui dataset yang digunakan;
* mengetahui cara menggunakan model;
* memahami keterbatasan dan bias;
* mereproduksi hasil training dan evaluasi;
* menggunakan model secara lebih tepat.

Model card juga membantu membuat model lebih **reusable** dan **reproducible**.

Model card dibuat melalui file:

```text
README.md
```

File tersebut menggunakan format **Markdown**.

## Struktur model card

Model card biasanya dimulai dengan overview singkat mengenai model, kemudian diikuti beberapa bagian:

* Model description
* Intended uses & limitations
* How to use
* Limitations and bias
* Training data
* Training procedure
* Evaluation results

---

## Model description

Bagian ini berisi informasi dasar mengenai model.

Informasi yang dapat dicantumkan antara lain:

* architecture;
* version;
* paper yang memperkenalkan model, jika ada;
* original implementation, jika tersedia;
* author;
* informasi umum mengenai model;
* copyright;
* informasi mengenai training;
* jumlah parameter;
* disclaimer penting.

Tujuannya adalah memberikan gambaran dasar mengenai model kepada pengguna.

---

## Intended uses & limitations

Bagian ini menjelaskan **untuk apa model tersebut digunakan** dan **di mana model tersebut tidak ditujukan untuk digunakan**.

Informasi yang dapat dicantumkan antara lain:

* use cases;
* bahasa yang didukung;
* bidang atau domain penggunaan;
* kondisi penggunaan;
* area yang berada di luar cakupan model;
* kondisi ketika model diperkirakan memiliki performa yang kurang baik.

Bagian ini membantu pengguna menentukan apakah model sesuai dengan kebutuhan mereka.

---

## How to use

Bagian ini memberikan contoh bagaimana model digunakan.

Contohnya dapat berupa penggunaan:

* `pipeline()`;
* model class;
* tokenizer class;
* kode lain yang diperlukan untuk menggunakan model.

Contoh kode penggunaan sebaiknya dibuat cukup jelas sehingga pengguna lain dapat langsung memahami cara menggunakan model.

---

## Training data

Bagian ini menjelaskan **dataset yang digunakan untuk melatih model**.

Informasi yang dapat diberikan:

* nama dataset;
* deskripsi singkat dataset;
* informasi relevan mengenai data training.

Tujuannya agar pengguna mengetahui sumber data yang digunakan dalam proses training.

---

## Training procedure

Bagian ini menjelaskan aspek-aspek training yang penting untuk **reproducibility**.

Informasi yang dapat dicantumkan antara lain:

* preprocessing;
* postprocessing;
* jumlah epoch;
* batch size;
* learning rate;
* konfigurasi training lainnya yang relevan.

Dengan informasi tersebut, pengguna lain memiliki gambaran yang lebih jelas mengenai bagaimana model dilatih.

---

## Variable and metrics

Bagian ini menjelaskan **metric yang digunakan untuk evaluasi** dan faktor-faktor yang diukur.

Informasi yang perlu dijelaskan meliputi:

* metric yang digunakan;
* dataset yang digunakan;
* dataset split yang digunakan;
* faktor yang diukur.

Metric sebaiknya disesuaikan dengan intended users dan intended use cases yang telah dijelaskan sebelumnya.

---

## Evaluation results

Bagian ini memberikan informasi mengenai performa model pada evaluation dataset.

Jika model menggunakan **decision threshold**, model card sebaiknya mencantumkan:

* threshold yang digunakan ketika evaluasi; atau
* hasil evaluasi pada beberapa threshold yang berbeda.

Hal ini membantu pengguna memahami performa model dalam konteks penggunaan yang dimaksud.

---

## Model card metadata

Selain isi README, model card juga dapat memiliki **metadata**.

Metadata digunakan oleh Hugging Face Hub untuk mengategorikan model sehingga model dapat difilter berdasarkan informasi tertentu seperti:

* task;
* language;
* library;
* license;
* dataset;
* metrics.

Contoh metadata pada model card:

```yaml
language: fr
license: mit
datasets:
- oscar
```

Metadata tersebut menunjukkan bahwa model:

* menggunakan bahasa Prancis (`fr`);
* menggunakan lisensi MIT;
* dilatih menggunakan dataset Oscar.

Metadata kemudian dibaca oleh Hugging Face Hub untuk membantu mengidentifikasi dan mengategorikan model.

---