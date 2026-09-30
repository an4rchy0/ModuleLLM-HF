Pada Chapter 3, kita mempelajari cara melakukan fine-tuning model untuk suatu task. Dalam proses tersebut, kita menggunakan tokenizer yang sama dengan tokenizer yang digunakan ketika model pretrained.

Namun, bagaimana jika kita ingin **melatih model dari awal**?

Dalam kondisi tersebut, menggunakan tokenizer yang sudah dilatih pada domain atau bahasa lain biasanya kurang optimal. Contohnya, tokenizer yang dilatih menggunakan corpus bahasa Inggris dapat bekerja kurang baik pada bahasa Jepang karena struktur penggunaan spasi dan tanda bacanya berbeda.

Karena itu, Chapter 6 membahas cara:

* Melatih tokenizer baru dari corpus teks.
* Menggunakan tokenizer tersebut untuk pretraining language model.
* Memahami kemampuan khusus fast tokenizer.
* Memahami perbedaan tiga algoritma subword tokenization:

  * Byte-Pair Encoding (BPE)
  * WordPiece
  * Unigram
* Membangun tokenizer dari awal menggunakan library `tokenizers`.

Tokenizer training berbeda dengan model training. Training model menggunakan stochastic gradient descent dan bersifat random/stochastic, sedangkan training tokenizer merupakan proses statistik untuk menentukan subword yang sesuai berdasarkan corpus dan bersifat deterministik untuk algoritma serta corpus yang sama.

---
