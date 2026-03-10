# isEmpty

## Deskripsi

Menentukan apakah suatu nilai kosong, mengembalikan `true` untuk `null`, `undefined`, string kosong/berisi spasi saja,
array kosong, `Map`/`Set` kosong, atau objek tanpa properti enumerable milik sendiri.

### Kasus penggunaan

Gunakan `isEmpty` untuk memvalidasi input dan mendeteksi nilai yang hilang/kosong di berbagai tipe data (misalnya field
formulir, payload API, objek konfigurasi) ketika `null`, `undefined`, string berisi spasi saja, koleksi kosong, dan
objek tanpa properti harus diperlakukan sebagai kosong.

> **Catatan untuk pengguna TypeScript:**
>
> `isEmpty` adalah utilitas yang mengembalikan boolean (bukan predikat tipe TypeScript), sehingga tidak mempersempit
> tipe dengan sendirinya; gunakan untuk validasi/percabangan, bukan untuk penyempitan pada waktu kompilasi.

### Keunggulan

- Memperlakukan `null` dan `undefined` sebagai `true` untuk pemeriksaan kekosongan.
- Menganggap string yang hanya berisi spasi sebagai kosong dengan melakukan trim sebelum memeriksa panjangnya.
- Mendukung tipe kontainer umum (array, `Map`, `Set`) dan objek biasa tanpa properti enumerable milik sendiri.
- Menghindari penghitungan properti turunan dengan menggunakan pemeriksaan `hasOwnProperty`.
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan validasi.

## Penggunaan

### Sintaks

Fungsi:

- `isEmpty(value)`

Parameter:

- `value`: Nilai yang akan diperiksa kekosongannya.

### Impor fungsi lokal

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isEmpty(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 16.18.53 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>