Hal-hal utama yang perlu dipahami:

1. **Token classification** memberikan label pada setiap token, misalnya untuk NER.
2. **Masked language modeling** melatih model untuk memprediksi token yang sengaja dimasking.
3. **Translation** mengubah teks dari satu bahasa ke bahasa lain dan umumnya menggunakan encoder-decoder.
4. **Summarization** menghasilkan versi lebih singkat dari suatu teks sambil mempertahankan informasi penting.
5. **Causal language modeling** memprediksi token berikutnya berdasarkan token-token sebelumnya dan merupakan dasar model seperti GPT.
6. **Question answering** dapat menggunakan extractive approach untuk mengambil jawaban langsung dari context.
7. `Trainer` API mempermudah proses training, sedangkan `Accelerate` memberikan kontrol lebih besar terhadap training loop dan distributed training.
8. `Datasets` digunakan untuk mengelola dan memproses data.
9. `Tokenizers` digunakan untuk melakukan tokenisasi secara efisien.
10. Model yang sudah dilatih dapat dibagikan melalui Hugging Face Hub.

Secara keseluruhan, Chapter 7 menunjukkan bagaimana pengetahuan dari Chapter 3 sampai Chapter 6 dapat digabungkan untuk membangun, melatih, mengevaluasi, dan menggunakan model Transformer pada berbagai task NLP.
