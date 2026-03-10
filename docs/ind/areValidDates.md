# areValidDates

## Deskripsi

Menentukan apakah sebuah array tidak kosong dan seluruh isinya terdiri dari objek `Date` yang valid.

### Kasus penggunaan

Gunakan `areValidDates` untuk memvalidasi array yang diberikan pengguna atau API sebelum melakukan operasi berbasis
tanggal (pengurutan, pemeriksaan rentang, pemformatan), memastikan semua entri adalah objek `Date` yang nyata dan valid
serta daftar tidak kosong.

> **Catatan untuk pengguna TypeScript:**
>
> `areValidDates` mengembalikan `false` untuk array kosong; pastikan array tersebut memang dimaksudkan tidak kosong
> sebelum mengandalkannya sebagai langkah validasi.

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah instance `Date` yang valid (tanpa tanggal tidak valid seperti
  `new Date('invalid')`).
- Menolak input kosong dengan mengembalikan `false`, memastikan Anda hanya menerima daftar tanggal yang bermakna dan
  tidak kosong.
- Menyediakan pemeriksaan boolean bergaya guard yang sederhana dan mudah dikomposisikan dengan validasi lainnya.

## Penggunaan

### Sintaks

Fungsi:

- `areValidDates(array)`

Parameter:

- `array`: Array yang akan diperiksa, yang berpotensi berisi objek `Date`.

### Impor fungsi lokal

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // benar
console.log(areValidDates(b)); // salah
console.log(areValidDates(c)); // salah
console.log(areValidDates(d)); // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areValidDates(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.32.09 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>