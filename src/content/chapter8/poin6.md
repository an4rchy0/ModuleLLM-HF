Komponen yang digunakan sebagai input dan output tidak harus berbeda.

Contohnya, sebuah textbox dapat menerima teks dan kemudian diperbarui dengan hasil dari fungsi yang dijalankan.

```python
import gradio as gr

api = gr.Interface.load("huggingface/EleutherAI/gpt-j-6B")


def complete_with_gpt(text):
    # Use the last 50 characters of the text as context
    return text[:-50] + api(text[-50:])


with gr.Blocks() as demo:
    textbox = gr.Textbox(
        placeholder="Type here and press enter...",
        lines=4
    )
    btn = gr.Button("Generate")

    btn.click(complete_with_gpt, textbox, textbox)

demo.launch()
```

Pada bagian:

```python
btn.click(complete_with_gpt, textbox, textbox)
```

`textbox` digunakan sebagai input sekaligus output.

Artinya, nilai dari textbox diberikan kepada fungsi `complete_with_gpt()`, kemudian hasil fungsi tersebut digunakan kembali untuk memperbarui textbox yang sama.

---
