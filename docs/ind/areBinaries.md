# areBinaries

## Deskripsi

Memeriksa apakah nilai yang diberikan adalah array tidak kosong berisi string biner yang valid dan mengembalikan `true`
hanya jika semua item lolos validasi.

### Kasus penggunaan

Gunakan `areBinaries` saat Anda menerima daftar yang tidak diketahui (misalnya dari JSON, formulir, atau API) dan perlu
memastikan bahwa itu adalah array tidak kosong berisi string biner sebelum mem-parsing atau memprosesnya.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areBinaries` untuk memvalidasi input yang tidak diketahui sebelum mengonversi string biner menjadi
> angka/BigInt; ini memastikan array tidak kosong dan setiap elemen adalah string biner yang valid.

### Keunggulan

- Memvalidasi bahwa suatu nilai adalah array yang tidak kosong di mana setiap elemen adalah string biner yang valid.
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard, pengembalian awal, dan validasi input.
- Mencegah kesalahan parsing lanjutan dengan menolak array yang berisi entri non-biner apa pun.

## Penggunaan

### Sintaks

Fungsi:

- `areBinaries(array)`

Parameter:

- `array`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // benar
console.log(areBinaries(b)); // salah
console.log(areBinaries([])); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areBinaries(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.14.49 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>