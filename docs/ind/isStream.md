# isStream

## Deskripsi

`isStream` memeriksa apakah suatu nilai tertentu adalah objek stream (mirip stream Node.js, `ReadableStream`, atau
`WritableStream`).

### Kasus penggunaan

Memvalidasi input yang mungkin berupa objek biasa atau stream (misalnya unggahan file, body HTTP, atau pipeline
pemrosesan) dan melakukan percabangan logika berdasarkan apakah nilainya adalah stream.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isStream` untuk mempersempit `unknown` sebelum memanggil metode stream; ini mengenali objek mirip stream
> Node.js (melalui `pipe`/`on`) dan Web Streams (`ReadableStream`/`WritableStream`) ketika global tersebut ada.

### Keunggulan

- Mendeteksi objek mirip stream Node.js yang umum secara aman dengan memeriksa fungsi `pipe` dan `on`.
- Juga mendukung Web Streams dengan mengenali `ReadableStream` dan `WritableStream` saat tersedia.
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan logika percabangan.

## Penggunaan

### Sintaks

Fungsi:

- `isStream(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream bersifat seperti stream; Anda dapat dengan aman menggunakan API stream umum
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isStream(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isStream](../_analysis/isStream.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.40.09 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>