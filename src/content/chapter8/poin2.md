Setelah Gradio terpasang, kode berikut dapat dijalankan sebagai Python script, Jupyter Notebook, maupun Google Colab.

```python
import gradio as gr


def flip_text(x):
    return x[::-1]


demo = gr.Blocks()

with demo:
    gr.Markdown(
        """
    # Flip Text!
    Start typing below to see the output.
    """
    )
    input = gr.Textbox(placeholder="Flip this text")
    output = gr.Textbox()

    input.change(fn=flip_text, inputs=input, outputs=output)

demo.launch()
```

Pada contoh tersebut, fungsi `flip_text()` digunakan untuk membalik teks:

```python
def flip_text(x):
    return x[::-1]
```

Kemudian dibuat aplikasi menggunakan:

```python
demo = gr.Blocks()
```

Komponen-komponen aplikasi dibuat di dalam konteks:

```python
with demo:
```

Terdapat `Markdown` untuk menampilkan judul dan penjelasan:

```python
gr.Markdown(
    """
# Flip Text!
Start typing below to see the output.
"""
)
```

Kemudian dibuat dua `Textbox`:

```python
input = gr.Textbox(placeholder="Flip this text")
output = gr.Textbox()
```

Event `change()` digunakan agar fungsi `flip_text()` dijalankan ketika nilai pada `input` berubah:

```python
input.change(fn=flip_text, inputs=input, outputs=output)
```

Terakhir, aplikasi dijalankan dengan:

```python
demo.launch()
```

### Konsep utama dari Blocks

Contoh sederhana tersebut memperkenalkan beberapa konsep dasar `Blocks`:

1. `Blocks` memungkinkan kita membuat aplikasi web yang menggabungkan Markdown, HTML, tombol, dan komponen interaktif dengan membuat objek Python di dalam konteks `gr.Blocks`.

2. Kita dapat menggunakan fungsi Python biasa sebagai fungsi pemrosesan input pengguna.

   Fungsi tersebut tidak harus sederhana seperti membalik teks. Fungsi Python juga dapat digunakan untuk melakukan perhitungan atau memproses hasil prediksi model machine learning.

3. Setiap komponen `Blocks` dapat diberikan event.

   Event menentukan kapan suatu fungsi dijalankan, misalnya ketika komponen diklik atau ketika nilainya berubah.

   Event menerima tiga parameter utama:

   * `fn`: fungsi yang akan dijalankan.
   * `inputs`: komponen input yang nilainya diberikan kepada fungsi.
   * `outputs`: komponen yang nilainya akan diperbarui berdasarkan hasil fungsi.

4. `Blocks` dapat menentukan apakah sebuah komponen bersifat interaktif berdasarkan event yang digunakan.

   Jika diperlukan, perilaku tersebut dapat diubah secara manual menggunakan parameter `interactive`.

Contohnya:

```python
gr.Textbox(
    placeholder="Flip this text",
    interactive=True
)
```

---

