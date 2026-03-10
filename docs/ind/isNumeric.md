# isNumeric

## Deskripsi

`isNumeric` menentukan apakah `value` tertentu dianggap numerik dengan memeriksa tipe hasil resolusinya terhadap
`NUMERIC_TYPES`.

### Kasus penggunaan

Gunakan `isNumeric` untuk memvalidasi input (misalnya payload API, nilai formulir, konfigurasi) sebelum melakukan
operasi numerik, dan untuk secara konsisten menerima tipe yang mirip numerik (seperti `BigInt`) sesuai dengan
`NUMERIC_TYPES`.

> **Catatan untuk pengguna TypeScript:**
>
> `isNumeric` adalah predikat yang mengembalikan boolean; perlakukan ini sebagai pemeriksaan runtime untuk apakah suatu
> nilai termasuk dalam himpunan tipe numerik yang didefinisikan oleh library.

### Keunggulan

- Menggunakan `getTypeOf` bersama `NUMERIC_TYPES` untuk memusatkan logika deteksi numerik dan menjaga pemeriksaan tetap
  konsisten di seluruh basis kode.
- Mengembalikan boolean sederhana (`true`/`false`) untuk percabangan yang mudah dan penggunaan gaya guard.
- Mendukung beberapa representasi numerik (misalnya `number`, `BigInt`) sebagaimana didefinisikan oleh `NUMERIC_TYPES`.

## Penggunaan

### Sintaks

Fungsi:

- `isNumeric(value)`

Parameter:

- `value`: Nilai yang akan diperiksa untuk tipe numerik.

### Impor fungsi lokal

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v dianggap numerik menurut aturan tipe pustaka
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isNumeric(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 15.52.57 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>