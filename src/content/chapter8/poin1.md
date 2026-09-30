Pada bagian sebelumnya, kita telah menggunakan `Interface` untuk membuat demo machine learning. Pada bagian ini diperkenalkan API tingkat rendah dari Gradio, yaitu `gr.Blocks`.

Perbedaan utama antara `Interface` dan `Blocks` adalah tingkat fleksibilitasnya:

* `Interface` merupakan API tingkat tinggi yang memungkinkan pembuatan demo machine learning dengan mudah hanya dengan menentukan input dan output.
* `Blocks` merupakan API tingkat rendah yang memberikan kontrol lebih besar terhadap **alur data** dan **layout** aplikasi.

Dengan `Blocks`, kita dapat membuat aplikasi yang lebih kompleks dan memiliki beberapa tahapan.

Beberapa hal yang dapat dilakukan menggunakan `Blocks` antara lain:

* Mengelompokkan beberapa demo ke dalam beberapa tab.
* Mengatur posisi input dan output.
* Membuat aplikasi multi-step, yaitu output dari satu model menjadi input untuk model berikutnya.
* Mengubah properti komponen berdasarkan input pengguna, seperti pilihan pada dropdown atau visibility suatu komponen.

---
