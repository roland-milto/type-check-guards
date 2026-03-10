# isBuffer

## Penerangan

Menyemak sama ada sesuatu nilai ialah `Buffer` Node.js dan mengembalikan `true` atau `false`.

### Kes penggunaan

Sahkan input pada masa jalan (cth., muatan API, data fail, atau penimbal mesej) untuk memastikan sesuatu nilai ialah
`Buffer` sebelum memprosesnya, dan dapatkan `false` dengan boleh dipercayai apabila berjalan di luar Node.js di mana
`Buffer` mungkin tidak wujud.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isBuffer` untuk mengecilkan nilai `unknown` kepada `Buffer` sebelum memanggil kaedah khusus Buffer.

### Kelebihan

- Mengesan instans Node.js `Buffer` dengan selamat menggunakan `Buffer.isBuffer`.
- Mengembalikan `false` dalam persekitaran yang tiada `Buffer`, sekali gus mengelakkan ralat masa jalan.
- Berfungsi dengan input `unknown`, menjadikannya sesuai untuk pengesahan masa jalan dan pengecilan jenis.

## Penggunaan

### Sintaks

Fungsi:

- `isBuffer(value)`

Parameter:

- `value`: Nilai yang hendak diuji.

### Import fungsi tempatan

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // benar
console.log(isBuffer(b)); // palsu

if (isBuffer(a)) {
  // a ialah Buffer di sini
  console.log(a.toString("utf8"));
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isBuffer(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 16:34:03 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>