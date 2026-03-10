# isDate

## Deskripsi

`isDate` menentukan apakah nilai yang diberikan adalah `Date`, mengembalikan `true` untuk instance `Date` dan `false`
jika tidak.

### Kasus penggunaan

Validasi dan persempit nilai yang tidak diketahui (misalnya data permintaan, nilai konfigurasi, atau JSON yang di-parse)
sebelum melakukan operasi `Date` seperti pemformatan, perbandingan, atau memanggil `toISOString()`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isDate` untuk mempersempit `unknown` menjadi `Date` saat runtime; fungsi ini mengembalikan `true` hanya untuk
> instance `Date` yang sebenarnya (bukan string tanggal).

### Keunggulan

- Menyediakan penjaga runtime sederhana untuk memverifikasi apakah suatu nilai adalah `Date`.
- Membantu mencegah kesalahan tipe dengan memastikan hanya instance `Date` yang lolos validasi.
- Berguna untuk memvalidasi input yang tidak diketahui (misalnya payload API) sebelum menggunakan metode khusus tanggal.

## Penggunaan

### Sintaks

Fungsi:

- `isDate(value)`

Parameter:

- `value`: Nilai yang akan diperiksa untuk tipe `Date`.

### Impor fungsi lokal

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input adalah sebuah Date di sini
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isDate(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isDate](../_analysis/isDate.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 15.37.39 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>