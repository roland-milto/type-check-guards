# isStream

## Penerangan

`isStream` menyemak sama ada sesuatu nilai yang diberikan ialah objek aliran (seperti aliran Node.js, `ReadableStream`,
atau `WritableStream`).

### Kes penggunaan

Sahkan input yang mungkin sama ada objek biasa atau aliran (contohnya, muat naik fail, badan HTTP, atau saluran
pemprosesan) dan cabangkan logik berdasarkan sama ada nilai itu ialah aliran.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isStream` untuk mengecilkan jenis `unknown` sebelum memanggil kaedah aliran; ia mengenal pasti objek seperti
> aliran Node.js (melalui `pipe`/`on`) dan Web Streams (`ReadableStream`/`WritableStream`) apabila global tersebut wujud.

### Kelebihan

- Mengesan objek seperti aliran Node.js yang biasa dengan selamat dengan menyemak fungsi `pipe` dan `on`.
- Turut menyokong Web Streams dengan mengenal pasti `ReadableStream` dan `WritableStream` apabila tersedia.
- Mengembalikan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal (guards) dan logik percabangan.

## Penggunaan

### Sintaks

Fungsi:

- `isStream(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream adalah seperti strim; anda boleh menggunakan API strim biasa dengan selamat
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isStream(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isStream](../_analysis/isStream.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:43:54 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>