# areStreams

## Deskripsi

`areStreams` menentukan apakah sebuah nilai adalah array terisi di mana setiap elemennya adalah `Stream`.

### Kasus penggunaan

Memvalidasi koleksi yang disediakan pengguna atau dibangun secara dinamis (misalnya, beberapa stream pembacaan file)
sebelum melakukan piping, melanjutkan (resume), atau mengoperasikannya sebagai sebuah grup.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areStreams` untuk memvalidasi input yang tidak diketahui sebelum memperlakukannya sebagai `Stream[]`; fungsi
> ini mengembalikan `true` hanya ketika nilainya adalah array yang tidak kosong dan setiap elemennya adalah `Stream`.

### Keunggulan

- Memastikan sebuah input adalah array terisi di mana setiap elemennya adalah `Stream`.
- Menyediakan guard `true`/`false` yang sederhana untuk memvalidasi kumpulan stream sebelum diproses.
- Gagal cepat: mengembalikan `false` segera setelah ditemukan elemen yang bukan `Stream`.
- Membantu mencegah error runtime ketika kode mengasumsikan semua item adalah instance `Stream`.

## Penggunaan

### Sintaks

Fungsi:

- `areStreams(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk objek Stream.

### Impor fungsi lokal

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input adalah array terisi dari objek Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areStreams(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.34.09 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>