# 5. Understanding Learning Curves

Setelah memahami proses fine-tuning, kita juga harus memahami bagaimana mengetahui apakah training berjalan dengan baik.

Salah satu cara penting adalah menggunakan **learning curves**.

Learning curve merupakan visualisasi perubahan metric selama proses training.

Dua kurva yang penting adalah:

### Loss Curve

Menunjukkan bagaimana nilai **loss/error** berubah selama training.

Pada training yang berjalan dengan baik, secara umum:

```text
Loss
 ↑
 │\
 │ \
 │  \
 │   \____
 │
 └──────────→ Training
```

Karakteristik yang diperhatikan:

* loss awal relatif tinggi;
* loss menurun selama training;
* akhirnya loss cenderung stabil atau konvergen.

### Accuracy Curve

Accuracy menunjukkan persentase prediksi yang benar.

Secara umum:

* accuracy dimulai lebih rendah;
* meningkat ketika model belajar;
* dapat mengalami plateau;
* peningkatannya tidak selalu mulus.

Hal ini karena accuracy didasarkan pada prediksi benar/salah, sedangkan loss dapat berubah secara kontinu meskipun prediksi akhirnya masih salah.

### Convergence

**Convergence** terjadi ketika performa model mulai stabil dan kurva loss serta accuracy tidak mengalami perubahan besar.

Secara sederhana:

```text
Training
   ↓
Loss turun
   ↓
Accuracy naik
   ↓
Perubahan semakin kecil
   ↓
Convergence
```

Konvergensi menunjukkan bahwa model sudah mempelajari pola tertentu dari data training.

---

## Masalah yang Dapat Terlihat dari Learning Curves

### A. Overfitting

Overfitting terjadi ketika model terlalu banyak mempelajari pola dari data training sehingga kemampuan generalisasinya terhadap validation data menjadi buruk.

Ciri-cirinya:

* training loss terus menurun;
* validation loss meningkat atau berhenti membaik;
* training accuracy jauh lebih tinggi daripada validation accuracy.

Beberapa pendekatan yang disebutkan untuk mengatasi overfitting:

* regularization;
* early stopping;
* data augmentation;
* mengurangi kompleksitas model.

Early stopping dapat digunakan untuk menghentikan training ketika validation performance tidak lagi membaik.

### B. Underfitting

Underfitting terjadi ketika model belum mampu menangkap pola penting dari dataset.

Penyebab yang disebutkan antara lain:

* model terlalu kecil;
* learning rate terlalu rendah;
* dataset terlalu kecil atau tidak representatif;
* regularisasi yang kurang tepat.

Ciri-cirinya:

* training loss tetap tinggi;
* validation loss juga tinggi;
* performa berhenti meningkat terlalu cepat.

Beberapa pendekatan:

* meningkatkan kapasitas model;
* training lebih lama;
* menyesuaikan learning rate;
* memeriksa kualitas preprocessing dataset.

### C. Erratic Learning Curves

Kurva yang tidak stabil dapat menunjukkan training yang tidak berjalan dengan baik.

Penyebab yang disebutkan:

* learning rate terlalu tinggi;
* batch size terlalu kecil;
* regularisasi tidak tepat;
* preprocessing dataset bermasalah.

Gejalanya dapat berupa:

* loss sering naik-turun;
* accuracy tidak stabil;
* performa berosilasi tanpa pola yang jelas.

Beberapa pendekatan:

* menyesuaikan learning rate;
* meningkatkan batch size;
* menggunakan gradient clipping;
* memperbaiki preprocessing data.

---
