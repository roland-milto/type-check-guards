# isDecimal

## Deskripsi

`isDecimal` memeriksa apakah sebuah nilai merupakan representasi string desimal tanpa spasi di awal/akhir dan dengan
format desimal yang valid.

### Kasus penggunaan

Memvalidasi field formulir, payload API, atau nilai konfigurasi yang harus diberikan sebagai string desimal (opsional
bertanda) tanpa spasi di sekelilingnya, sebelum diurai atau disimpan.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isDecimal` untuk memvalidasi input pengguna sebelum mengonversinya (misalnya dengan `Number(value)`),
> terutama ketika spasi harus ditolak.

### Keunggulan

- Memvalidasi secara ketat bahwa input adalah sebuah string dan cocok dengan pola literal desimal.
- Menolak spasi di awal dan di akhir (termasuk karakter kontrol) untuk menghindari penguraian yang ambigu.
- Pemeriksaan awal yang cepat (pemeriksaan tipe dan karakter pertama/terakhir) sebelum menjalankan regex.
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan validasi input.

## Penggunaan

### Sintaks

Fungsi:

- `isDecimal(value)`

Parameter:

- `value`: Nilai yang akan diperiksa untuk format string desimal.

### Impor fungsi lokal

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v adalah string di sini (divalidasi saat runtime)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isDecimal(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 15.52.44 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>