# areOfType

## Deskripsi

Memeriksa apakah semua elemen dalam `array` yang diberikan memiliki `type` yang ditentukan.

### Kasus penggunaan

Gunakan `areOfType` untuk memvalidasi input yang tidak diketahui (mis., JSON yang di-parse, payload API, input pengguna)
sebelum melakukan operasi spesifik tipe pada setiap elemen dalam sebuah array.

> **Catatan untuk pengguna TypeScript:**
>
> Karena `areOfType` adalah type guard, TypeScript mempersempit array di dalam blok `if (areOfType(...)) {}` menjadi
`Array<DataTypeOf<T>>`.

### Keunggulan

- Menyediakan type guard TypeScript: ketika mengembalikan `true`, input dipersempit menjadi `Array<DataTypeOf<T>>`.
- Memvalidasi setiap elemen terhadap tipe runtime yang diminta, mencegah array bertipe campuran lolos.
- Gagal cepat: mengembalikan `false` segera setelah elemen yang tidak cocok ditemukan.
- Menolak non-array dan array kosong secara desain (bergantung pada `isFilledArray`).

## Penggunaan

### Sintaks

Fungsi:

- `areOfType(array, type)`

Parameter:

- `array`: Array yang akan diperiksa.
- `type`: Tipe yang akan diperiksa terhadap setiap elemen di dalam array.

### Impor fungsi lokal

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values sekarang adalah number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areOfType(array, type)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 17.09.48 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>