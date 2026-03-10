# isEmpty

## Penerangan

Menentukan sama ada sesuatu nilai yang diberikan adalah kosong, mengembalikan `true` untuk `null`, `undefined`, rentetan
kosong/berruang kosong, tatasusunan kosong, `Map`/`Set` kosong, atau objek tanpa sebarang sifat boleh-enumerasi milik
sendiri.

### Kes penggunaan

Gunakan `isEmpty` untuk mengesahkan input dan mengesan nilai yang hilang/kosong merentasi pelbagai jenis data (cth.,
medan borang, payload API, objek konfigurasi) di mana `null`, `undefined`, rentetan berruang kosong, koleksi kosong, dan
objek tanpa sifat patut dianggap sebagai kosong.

> **Nota untuk pengguna TypeScript:**
>
> `isEmpty` ialah utiliti yang mengembalikan boolean (bukan predikat jenis TypeScript), jadi ia tidak mengecilkan jenis
> dengan sendirinya; gunakan ia untuk pengesahan/percabangan dan bukannya pengecilan pada masa kompilasi.

### Kelebihan

- Menganggap `null` dan `undefined` sebagai `true` untuk semakan kekosongan.
- Menganggap rentetan yang hanya mengandungi ruang kosong sebagai kosong dengan memangkasnya sebelum menyemak panjang.
- Menyokong jenis bekas biasa (tatasusunan, `Map`, `Set`) dan objek biasa tanpa sebarang sifat boleh-enumerasi milik
  sendiri.
- Mengelakkan pengiraan sifat yang diwarisi dengan menggunakan semakan `hasOwnProperty`.
- Mengembalikan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal dan pengesahan.

## Penggunaan

### Sintaks

Fungsi:

- `isEmpty(value)`

Parameter:

- `value`: Nilai untuk disemak sama ada kosong.

### Import fungsi tempatan

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

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isEmpty(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 16:21:53 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>