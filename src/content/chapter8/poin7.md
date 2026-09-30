Salah satu kemampuan penting `Blocks` adalah membuat aplikasi dengan beberapa tahap pemrosesan.

Output dari satu fungsi dapat digunakan sebagai input untuk fungsi lainnya.

Sebagai contoh, sebuah audio dapat diproses menggunakan model speech-to-text. Hasil teksnya kemudian digunakan sebagai input untuk model sentiment analysis.

```python
from transformers import pipeline

import gradio as gr

asr = pipeline(
    "automatic-speech-recognition",
    "facebook/wav2vec2-base-960h"
)
classifier = pipeline("text-classification")


def speech_to_text(speech):
    text = asr(speech)["text"]
    return text


def text_to_sentiment(text):
    return classifier(text)[0]["label"]


demo = gr.Blocks()

with demo:
    audio_file = gr.Audio(type="filepath")
    text = gr.Textbox()
    label = gr.Label()

    b1 = gr.Button("Recognize Speech")
    b2 = gr.Button("Classify Sentiment")

    b1.click(
        speech_to_text,
        inputs=audio_file,
        outputs=text
    )
    b2.click(
        text_to_sentiment,
        inputs=text,
        outputs=label
    )

demo.launch()
```

Alur aplikasinya adalah:

```text
Audio
  ↓
Speech-to-Text
  ↓
Text
  ↓
Sentiment Analysis
  ↓
Label
```

Pertama, audio diberikan kepada:

```python
speech_to_text()
```

Fungsi tersebut menghasilkan teks:

```python
text = asr(speech)["text"]
```

Hasilnya kemudian dimasukkan ke komponen:

```python
text = gr.Textbox()
```

Textbox tersebut selanjutnya digunakan sebagai input untuk fungsi:

```python
text_to_sentiment()
```

Sehingga satu komponen dapat menjadi output dari satu proses sekaligus input untuk proses berikutnya.

---

