# Kesimpulan Chapter 5

Chapter 5 memperluas pemahaman mengenai **🤗 Datasets** dari sekadar library untuk mengambil dataset menjadi sebuah tools untuk mengelola seluruh lifecycle dataset.

Hal-hal utama yang perlu dipahami:

1. Dataset tidak harus berasal dari Hugging Face Hub.
2. `load_dataset()` dapat digunakan untuk local maupun remote files.
3. Dataset dapat dibersihkan dan dimanipulasi menggunakan `map()` dan `filter()`.
4. `batched=True` dapat mempercepat preprocessing.
5. Dataset dapat dikonversi ke Pandas menggunakan `set_format("pandas")`.
6. Pandas DataFrame dapat dikembalikan menjadi Dataset menggunakan `Dataset.from_pandas()`.
7. `train_test_split()` dapat digunakan untuk membuat validation set.
8. Dataset besar dapat ditangani dengan **memory mapping** berbasis Apache Arrow.
9. Dataset yang terlalu besar untuk disimpan secara lokal dapat diproses menggunakan **streaming**.
10. Dataset sendiri dapat dibuat dan dibagikan menggunakan `push_to_hub()`.
11. Dataset yang dibagikan sebaiknya dilengkapi **dataset card**.
12. Embeddings dapat digunakan untuk membangun **semantic search**.
13. **FAISS** digunakan untuk melakukan similarity search secara efisien terhadap embedding vectors.
14. `add_faiss_index()` digunakan untuk membuat FAISS index.
15. `get_nearest_examples()` digunakan untuk mengambil contoh yang paling dekat dengan query.

Inti Chapter 5 dapat disederhanakan menjadi:

```text
Load
 ↓
Clean
 ↓
Transform
 ↓
Analyze
 ↓
Scale
 ↓
Create
 ↓
Share
 ↓
Embed
 ↓
Search
```

Dengan memahami chapter ini, kita tidak hanya tahu bagaimana **menggunakan dataset**, tetapi juga bagaimana **menyiapkan, membersihkan, menyimpan, membagikan, dan memanfaatkan dataset untuk aplikasi berbasis Transformer**.
