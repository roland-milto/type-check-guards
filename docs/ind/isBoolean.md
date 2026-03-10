# isBoolean

## Deskripsi

Menentukan apakah suatu nilai yang diberikan adalah `boolean`.

### Kasus penggunaan

Validasi data eksternal atau tanpa tipe (misalnya, variabel lingkungan, payload JSON, parameter kueri) untuk memastikan
suatu nilai adalah `boolean` sebelum menggunakannya dalam logika kondisional.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isBoolean` untuk mempersempit `unknown` menjadi `boolean` sebelum menerapkan operasi boolean.

### Keunggulan

- Pemeriksaan runtime yang sederhana dan cepat menggunakan `typeof`.
- Membantu memvalidasi input yang tidak diketahui sebelum menerapkan logika khusus boolean.
- Mengembalikan hasil `boolean` yang dapat diprediksi (`true`/`false`).

## Penggunaan

### Sintaks

Fungsi:

- `isBoolean(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input adalah boolean di sini
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isBoolean(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.36.39 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>