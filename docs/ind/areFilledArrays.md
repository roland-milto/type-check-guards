# areFilledArrays

## Deskripsi

`areFilledArrays` memeriksa apakah sebuah array dua dimensi tidak kosong dan semua subarray-nya tidak kosong.

### Kasus penggunaan

Gunakan `areFilledArrays` untuk memvalidasi input berbentuk tabel atau matriks (misalnya baris CSV, data grid, hasil
yang dikelompokkan) sehingga Anda dapat dengan aman mengasumsikan ada setidaknya satu subarray dan tidak ada subarray
yang kosong.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areFilledArrays` ketika Anda perlu memastikan sebuah array 2D memiliki setidaknya satu baris dan setiap baris
> memiliki setidaknya satu elemen sebelum melakukan iterasi atau mengakses indeks di dalamnya.

### Keunggulan

- Memvalidasi bahwa array luar tidak kosong dan setiap array dalam juga tidak kosong, mengembalikan `true` hanya ketika
  kedua kondisi terpenuhi.
- Berfungsi dengan tipe elemen apa pun di dalam subarray (misalnya angka, string, objek, array bersarang) karena hanya
  memeriksa status “terisi” pada array, bukan konten elemennya.
- Memberikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard sebelum memproses data dua dimensi.

## Penggunaan

### Sintaks

Fungsi:

- `areFilledArrays(array)`

Parameter:

- `array`: Array dua dimensi yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // benar
console.log(areFilledArrays(b)); // benar
console.log(areFilledArrays(c)); // benar
console.log(areFilledArrays(d)); // salah
console.log(areFilledArrays(e)); // salah
console.log(areFilledArrays(f)); // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areFilledArrays(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 11.57.04 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>