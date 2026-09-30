`Blocks` tidak hanya dapat digunakan untuk mengubah nilai suatu komponen. Kita juga dapat mengubah properties komponen berdasarkan input pengguna.

Contohnya:

* Mengubah visibility.
* Mengubah jumlah baris pada textbox.
* Mengubah pilihan pada komponen tertentu.

Salah satu caranya adalah dengan mengembalikan `update()` dari fungsi.

Contohnya:

```python
import gradio as gr


def change_textbox(choice):
    if choice == "short":
        return gr.Textbox.update(lines=2, visible=True)
    elif choice == "long":
        return gr.Textbox.update(lines=8, visible=True)
    else:
        return gr.Textbox.update(visible=False)


with gr.Blocks() as block:
    radio = gr.Radio(
        ["short", "long", "none"],
        label="What kind of essay would you like to write?"
    )
    text = gr.Textbox(lines=2, interactive=True)

    radio.change(
        fn=change_textbox,
        inputs=radio,
        outputs=text
    )

    block.launch()
```

Pada contoh tersebut terdapat `Radio` yang memiliki tiga pilihan:

```python
["short", "long", "none"]
```

Ketika pengguna memilih `"short"`, textbox akan memiliki dua baris:

```python
return gr.Textbox.update(lines=2, visible=True)
```

Ketika memilih `"long"`, textbox akan memiliki delapan baris:

```python
return gr.Textbox.update(lines=8, visible=True)
```

Sedangkan ketika memilih `"none"`, textbox disembunyikan:

```python
return gr.Textbox.update(visible=False)
```

Event yang menghubungkan pilihan `Radio` dengan perubahan textbox adalah:

```python
radio.change(
    fn=change_textbox,
    inputs=radio,
    outputs=text
)
```

Dengan demikian, perubahan pada satu komponen dapat digunakan untuk mengubah properties komponen lainnya.

---
