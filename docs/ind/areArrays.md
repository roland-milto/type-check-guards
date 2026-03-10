# areArrays

## Deskripsi

`areArrays` menentukan apakah sebuah nilai adalah array dua dimensi yang terisi, dengan item-item yang semuanya berupa
array.

### Kasus penggunaan

Gunakan `areArrays` untuk memvalidasi input berbentuk tabel atau mirip matriks (misalnya baris CSV, data grid, atau
daftar yang dikelompokkan) sebelum melakukan operasi baris/kolom; fungsi ini mengembalikan `false` jika input bukan
array, kosong, atau berisi elemen apa pun yang bukan array.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areArrays` ketika Anda perlu memastikan sebuah nilai adalah array 2D yang tidak kosong dan bahwa setiap baris
> adalah sebuah array sebelum melakukan iterasi atau pengindeksan ke dalam array bertingkat.

### Keunggulan

- Memvalidasi bahwa input adalah array dua dimensi yang tidak kosong, di mana setiap elemennya adalah sebuah array.
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan keluar lebih awal.
- Membantu mencegah kesalahan runtime ketika kode selanjutnya mengasumsikan operasi array bertingkat (misalnya memetakan
  baris).

## Penggunaan

### Sintaks

Fungsi:

- `areArrays(array)`

Parameter:

- `array`: Input yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value adalah array 2D dengan array sebagai elemen
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areArrays(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 13.39.55 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>