Secara default, komponen yang dibuat menggunakan `Blocks` akan ditampilkan secara vertikal dalam satu kolom.

Kita dapat mengubah layout tersebut menggunakan:

```python
with gr.Column():
```

atau:

```python
with gr.Row():
```

Komponen di dalam `Column` akan disusun secara vertikal, sedangkan komponen di dalam `Row` akan disusun secara horizontal.

Selain `Row` dan `Column`, kita juga dapat menggunakan `Tabs` untuk membuat beberapa tab dalam satu aplikasi.

Strukturnya dapat dibuat seperti berikut:

```python
with gr.Tabs():
    with gr.TabItem("Nama Tab"):
        ...
```

Semua komponen yang dibuat di dalam `TabItem` akan muncul pada tab tersebut.

---

