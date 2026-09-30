# 2. Behind the Pipeline — Model dan API Transformers

Bagian ini mulai membongkar apa yang dilakukan `pipeline()`.

Jika `pipeline()` digunakan untuk mempermudah inference, maka secara manual kita perlu menangani setidaknya:

```text
Tokenizer
   ↓
Model
   ↓
Output
```

---

## 2.1 Model checkpoint

Ketika menggunakan model Transformers, biasanya kita menentukan sebuah **checkpoint**.

Contoh:

```python
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
```

Checkpoint merepresentasikan model yang sudah tersedia dan dapat dimuat.

Dengan checkpoint tersebut, library dapat mengetahui model apa yang harus digunakan beserta parameter yang telah dilatih.

---

## 2.2 `from_pretrained()`

Salah satu API penting dalam Transformers adalah:

```python
from_pretrained()
```

Fungsinya adalah memuat komponen yang sudah tersedia dari sebuah checkpoint.

Contohnya:

```python
from transformers import AutoModel

model = AutoModel.from_pretrained("bert-base-cased")
```

Dengan pendekatan ini, kita tidak perlu membuat arsitektur model dan menginisialisasi seluruh parameter dari awal.

Model yang sudah pretrained dapat langsung digunakan.

---

## 2.3 `AutoModel`

Transformers menyediakan berbagai class model.

Daripada menentukan class secara manual, kita dapat menggunakan keluarga class **Auto**.

Contohnya:

```python
from transformers import AutoModel

model = AutoModel.from_pretrained(checkpoint)
```

`AutoModel` akan menentukan jenis model yang sesuai berdasarkan checkpoint yang diberikan.

Hal ini membuat kode lebih fleksibel karena pengguna tidak harus mengetahui secara manual class model yang digunakan.

---

## 2.4 Model bukan hanya weights

Ketika menggunakan pretrained model, ada beberapa komponen penting yang perlu dibedakan:

* architecture;
* configuration;
* weights;
* tokenizer.

Secara sederhana:

```text
Architecture
    +
Configuration
    +
Weights
    ↓
Pretrained Model
```

### Architecture

Menentukan struktur model.

Misalnya:

* jumlah layer;
* jenis layer;
* hidden size;
* attention;
* dan komponen lainnya.

### Configuration

Berisi informasi mengenai bagaimana model harus dibangun dan dijalankan.

### Weights

Berisi parameter hasil training.

Weights inilah yang menyimpan informasi yang telah dipelajari model selama training.

---

## 2.5 Model menghasilkan numerical output

Transformer tidak menerima kalimat mentah secara langsung.

Model menerima input dalam bentuk angka.

Alurnya:

```text
"I love this course"
        ↓
    Tokenizer
        ↓
[101, ..., 102]
        ↓
Transformer Model
        ↓
Numerical Output
```

Output model juga pada awalnya berupa angka.

Untuk classification, misalnya, model menghasilkan **logits**.

Kemudian logits tersebut diproses menjadi prediksi yang lebih mudah dipahami.

---