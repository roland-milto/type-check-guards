# isFinite

## Deskripsi

Menentukan apakah `value` yang diberikan merupakan `number` yang hingga.

### Kasus penggunaan

Gunakan `isFinite` untuk memvalidasi masukan yang tidak diketahui (misalnya dari JSON, formulir, atau API) sebelum
melakukan perhitungan numerik, memastikan nilainya adalah angka nyata yang hingga.

> **Catatan untuk pengguna TypeScript:**
>
> `isFinite` mengembalikan `true` hanya untuk angka yang hingga; mengembalikan `false` untuk `NaN`, `Infinity`, dan
> nilai apa pun yang bukan angka.

### Keunggulan

- Menggunakan `Number.isFinite` bawaan untuk pemeriksaan keterhinggaan yang andal.
- Mengembalikan `true` hanya untuk angka yang hingga; mengembalikan `false` untuk `NaN`, `Infinity`, dan masukan yang
  bukan angka.
- Predikat yang sederhana dan bebas efek samping, cocok untuk validasi dan logika penjagaan.

## Penggunaan

### Sintaks

Fungsi:

- `isFinite(value)`

Parameter:

- `value`: Nilai yang akan diperiksa keterhinggaannya.

### Impor fungsi lokal

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers adalah: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value adalah angka berhingga di sini
  const doubled = value * 2;
  console.log(doubled);
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isFinite(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 16.30.10 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>