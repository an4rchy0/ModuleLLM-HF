# 4. Bagaimana Transformer bekerja?

## 4.1 Attentiom

Salah satu komponen terpenting adalah melalui dengan **attention mechanism**.

Ide sederhananya:

> Model tidak memberikan perhatian yang sama kepada semua kata ketika memproses suatu kata.

Model akan memperhatikan kata-kata yang paling relevan dengan konteks yang sedang diproses.

Contoh:

> "You like this course."

ketika menerjemahkan kata **like**, model perlu memperhatikan kata **you** karena subject memengaruhi bentuk kata kerja dalam bahasa tujuan.

Ketika menerjemahkan **this**, model juga perlu memperhatikan **course**, karena kata tersebut dapat memengaruhi bentuk terjemahannya.

Jadi makna suatu kata tidak hanya bergantung pada kata itu sendiri, tetapi juga pada kata-kata lain di sekitarnya.

---