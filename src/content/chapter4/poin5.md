**penggunaan, sharing, dan dokumentasi pretrained model** Face Hub, Alur besarnya dapat digambarkan sebagai:

```text
Pretrained Model
       ↓
Hugging Face Hub
       ↓
Select Appropriate Checkpoint
       ↓
Use with pipeline() / Auto* Classes
       ↓
Fine-tune / Modify Model
       ↓
Share to Hub
       ↓
Create Model Card
       ↓
Document Model
```

Hal-hal utama yang perlu dipahami:

1. **Hugging Face Hub** merupakan tempat untuk menemukan, menggunakan, dan membagikan model serta dataset.
2. Model di Hub menggunakan repository sehingga versioning dan reproducibility dapat dilakukan.
3. Saat menggunakan pretrained model, **checkpoint harus sesuai dengan task**.
4. `pipeline()` menyediakan cara sederhana untuk menggunakan model.
5. `Auto*` classes membuat penggunaan model lebih fleksibel terhadap architecture.
6. Model dapat dibagikan menggunakan:

   * `push_to_hub`;
   * `huggingface_hub`;
   * web interface;
   * Git dan Git LFS.
7. **Model card** merupakan bagian penting untuk menjelaskan model kepada pengguna lain.
8. Model card mendokumentasikan penggunaan, dataset, training procedure, evaluasi, keterbatasan, dan informasi lain yang diperlukan untuk reproducibility.
9. Metadata pada model card membantu Hugging Face Hub mengategorikan dan memfilter model.

Dengan demikian, Chapter 4 tidak hanya mengajarkan **cara menggunakan pretrained model**, tetapi juga bagaimana **membagikan model agar dapat digunakan kembali oleh komunitas secara jelas dan reproducible**.
