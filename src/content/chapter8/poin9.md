`gr.Blocks` memberikan kontrol yang lebih besar dibandingkan `Interface` dalam membangun aplikasi Gradio.

Konsep penting yang perlu dipahami:

1. **Komponen**

   * Membuat elemen aplikasi seperti `Textbox`, `Image`, `Button`, `Audio`, dan `Label`.

2. **Layout**

   * `Row` untuk menyusun komponen secara horizontal.
   * `Column` untuk menyusun komponen secara vertikal.
   * `Tabs` dan `TabItem` untuk membuat beberapa tab.

3. **Events**

   * Menentukan kapan suatu fungsi dijalankan.
   * Contohnya `click()`, `change()`, dan `submit()`.

4. **Data flow**

   * Output suatu fungsi dapat menjadi input fungsi berikutnya.
   * Hal ini memungkinkan pembuatan aplikasi multi-step.

5. **Component properties**

   * Properties komponen dapat diubah berdasarkan input pengguna.
   * Contohnya `visible` dan `lines`.

Dengan konsep tersebut, `Blocks` dapat digunakan untuk membuat aplikasi machine learning yang lebih kompleks dan fleksibel dibandingkan demo sederhana menggunakan `Interface`.
