# 8. Bias and Limitations

Walaupun Transformer dan LLM memiliki kemampuan besar, model tetap memiliki keterbatasan.

## 8.1 Bias

Model belajar dari data yang digunakan selama training.

Jika terdapat bias dalam data, model dapat mempelajari dan mereproduksi bias tersebut.

Karena itu, output model tidak selalu bebas dari bias.

Bias dapat muncul dalam berbagai bentuk, misalnya asosiasi tertentu antara kata, kelompok, atau karakteristik tertentu.

---

## 8.2 Fine-tuning tidak otomatis menghilangkan bias

Fine-tuning dapat membuat model lebih sesuai dengan task tertentu.

Namun fine-tuning tidak berarti seluruh bias yang sudah dipelajari model akan otomatis hilang.

Model tetap membawa pengetahuan dan pola yang diperoleh selama pretraining.

Karena itu, evaluasi terhadap model tetap diperlukan setelah fine-tuning.

---

## 8.3 Hallucination

LLM dapat menghasilkan informasi yang terdengar benar tetapi sebenarnya tidak sesuai dengan fakta atau context yang tersedia.

Hal ini dikenal sebagai **hallucination**.

Karena model pada dasarnya melakukan prediksi token berdasarkan pola yang dipelajari, output yang terlihat meyakinkan tidak selalu berarti informasi tersebut benar.

---

## 8.4 Context limitation

Model memiliki batas context.

Semakin panjang context yang diberikan:

* semakin banyak informasi yang harus diproses;
* kebutuhan memory meningkat;
* processing dapat menjadi lebih mahal.

Materi inference menekankan bahwa peningkatan context length memiliki konsekuensi terhadap memory dan processing performance.

---

## 8.5 Computational Cost

LLM membutuhkan resource besar terutama pada:

* training;
* inference;
* memory;
* GPU/VRAM.

Pretraining membutuhkan dataset besar dan dapat memerlukan waktu yang sangat lama.

Fine-tuning lebih murah dibandingkan pretraining, tetapi inference tetap dapat membutuhkan resource yang signifikan tergantung ukuran model dan workload.

---
