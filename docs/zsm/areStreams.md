# areStreams

## Penerangan

`areStreams` menentukan sama ada sesuatu nilai ialah tatasusunan berisi di mana setiap elemen ialah `Stream`.

### Kes penggunaan

Sahkan koleksi yang dibekalkan pengguna atau dibina secara dinamik (cth., berbilang stream bacaan fail) sebelum
melakukan piping, menyambung semula, atau operasi lain ke atasnya sebagai satu kumpulan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areStreams` untuk mengesahkan input yang tidak diketahui sebelum menganggapnya sebagai `Stream[]`; ia
> mengembalikan `true` hanya apabila nilainya ialah tatasusunan tidak kosong dan setiap elemen ialah `Stream`.

### Kelebihan

- Memastikan input ialah tatasusunan berisi di mana setiap elemen ialah `Stream`.
- Menyediakan pengawal `true`/`false` yang ringkas untuk mengesahkan koleksi stream sebelum diproses.
- Gagal dengan pantas: mengembalikan `false` sebaik sahaja elemen bukan `Stream` ditemui.
- Membantu mencegah ralat masa jalan apabila kod mengandaikan semua item ialah instans `Stream`.

## Penggunaan

### Sintaks

Fungsi:

- `areStreams(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi objek Stream.

### Import fungsi tempatan

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input ialah tatasusunan yang diisi dengan objek Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areStreams(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:36:32 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>