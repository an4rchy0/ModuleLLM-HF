
Selain mengatur layout, `Blocks` memberikan kontrol terhadap event yang dapat memicu suatu fungsi.

Setiap komponen memiliki event tertentu. Misalnya, `Textbox` memiliki event:

```python
change()
```

yang dijalankan ketika nilai textbox berubah.

Textbox juga memiliki:

```python
submit()
```

yang dijalankan ketika pengguna menekan tombol Enter saat textbox sedang aktif.

Komponen lain dapat memiliki lebih banyak event. Misalnya, `Audio` dapat memiliki event yang berhubungan dengan audio yang diputar, dihapus, dijeda, dan sebagainya.

Event dibuat dengan memanggil nama event pada instance komponen:

```python
textbox.change(...)
```

atau:

```python
btn.click(...)
```

Event tersebut menggunakan tiga parameter utama:

```python
fn
inputs
outputs
```

### `fn`

Menentukan fungsi yang akan dijalankan.

```python
fn=flip_text
```

### `inputs`

Menentukan komponen yang nilainya akan diberikan kepada fungsi.

```python
inputs=input
```

Jika terdapat beberapa input, komponen dapat diberikan sebagai list.

```python
inputs=[input1, input2]
```

Nilai dari setiap komponen akan diberikan kepada parameter fungsi sesuai urutannya.

### `outputs`

Menentukan komponen yang akan diperbarui berdasarkan hasil fungsi.

```python
outputs=output
```

Jika terdapat beberapa output, dapat menggunakan list:

```python
outputs=[output1, output2]
```

Nilai hasil fungsi akan digunakan untuk memperbarui komponen sesuai urutannya.

---
