Berikut contoh aplikasi yang memiliki dua tab: satu untuk membalik teks dan satu untuk membalik gambar.

```python
import numpy as np
import gradio as gr

demo = gr.Blocks()


def flip_text(x):
    return x[::-1]


def flip_image(x):
    return np.fliplr(x)


with demo:
    gr.Markdown("Flip text or image files using this demo.")
    with gr.Tabs():
        with gr.TabItem("Flip Text"):
            with gr.Row():
                text_input = gr.Textbox()
                text_output = gr.Textbox()
            text_button = gr.Button("Flip")
        with gr.TabItem("Flip Image"):
            with gr.Row():
                image_input = gr.Image()
                image_output = gr.Image()
            image_button = gr.Button("Flip")

    text_button.click(flip_text, inputs=text_input, outputs=text_output)
    image_button.click(flip_image, inputs=image_input, outputs=image_output)

demo.launch()
```

Pada contoh tersebut terdapat dua tab:

```python
with gr.TabItem("Flip Text"):
```

dan:

```python
with gr.TabItem("Flip Image"):
```

Tab pertama digunakan untuk teks, sedangkan tab kedua digunakan untuk gambar.

Komponen yang berada di dalam:

```python
with gr.Row():
```

akan disusun secara horizontal.

Aplikasi juga menggunakan `Button` untuk menjalankan fungsi:

```python
text_button.click(flip_text, inputs=text_input, outputs=text_output)
```

dan:

```python
image_button.click(flip_image, inputs=image_input, outputs=image_output)
```

Artinya, fungsi baru dijalankan ketika tombol masing-masing diklik.

---
