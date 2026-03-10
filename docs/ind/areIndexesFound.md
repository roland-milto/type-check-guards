# areIndexesFound

## Deskripsi

`areIndexesFound` memeriksa apakah suatu nilai adalah array tidak kosong yang elemennya semuanya merupakan indeks yang
valid, mengembalikan `true` jika ya dan `false` jika tidak.

### Kasus penggunaan

Memvalidasi data yang diberikan pengguna atau data eksternal (mis., JSON yang di-parse) yang diharapkan berupa daftar
indeks sebelum menggunakannya untuk mengakses atau melakukan slice pada array.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areIndexesFound` untuk memvalidasi input yang tidak diketahui sebelum memperlakukan elemennya sebagai indeks
> array; fungsi ini mengembalikan `false` untuk array kosong dan untuk array yang berisi nilai non-indeks.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang terisi dan setiap elemennya merupakan indeks yang valid.
- Gagal cepat: mengembalikan `false` segera setelah elemen yang bukan indeks ditemukan.
- Berguna sebagai pengaman sebelum menggunakan nilai sebagai posisi atau offset array.

## Penggunaan

### Sintaks

Fungsi:

- `areIndexesFound(array)`

Parameter:

- `array`: Array yang akan diperiksa kepatuhannya terhadap indeks.

### Impor fungsi lokal

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // benar
console.log(areIndexesFound(b)); // salah
console.log(areIndexesFound(c)); // salah

if (areIndexesFound(a)) {
  // Di sini, `a` dikonfirmasi sebagai array indeks yang terisi.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areIndexesFound(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.42.11 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>