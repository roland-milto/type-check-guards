# isValidDate

## Deskripsi

`isValidDate` memeriksa apakah sebuah nilai yang diberikan adalah objek `Date` yang valid dan mengembalikan `true` hanya
untuk tanggal yang nyata dan tidak invalid.

### Kasus penggunaan

Memvalidasi input pengguna atau data API yang mungkin berisi tanggal, memastikan nilainya adalah instance `Date` yang
nyata dan bukan tanggal yang tidak valid sebelum melakukan perhitungan, pemformatan, atau perbandingan tanggal.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isValidDate` sebelum memanggil metode `Date` (misalnya, `toISOString`, `getTime`) pada nilai yang bertipe
`unknown` untuk memastikan nilainya adalah objek `Date` yang valid.

### Keunggulan

- Memastikan sebuah nilai adalah instance `Date` dan bukan sekadar string atau angka yang mirip tanggal.
- Menolak tanggal yang tidak valid (misalnya, `new Date("invalid")`) dengan memeriksa nilai waktu `NaN`.
- Guard boolean sederhana yang mudah digunakan dalam kondisi dan pipeline validasi.
- Membantu mencegah error saat runtime ketika memanggil metode tanggal dengan memverifikasi input terlebih dahulu.

## Penggunaan

### Sintaks

Fungsi:

- `isValidDate(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input adalah instance Date yang valid
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // salah
console.log(isValidDate("2025-12-22")); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isValidDate(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 16.40.29 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>