# isWeakSet

## Penerangan

Menentukan sama ada `value` yang diberikan ialah `WeakSet` bagi objek.

### Kes penggunaan

Gunakan `isWeakSet` apabila menerima input tanpa jenis (contohnya, daripada API luaran, konfigurasi dinamik, atau nilai
`unknown`) dan anda perlu mengesahkan bahawa ia ialah `WeakSet` sebelum menggunakan operasi khusus `WeakSet`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isWeakSet` untuk mengecilkan nilai `unknown` kepada `WeakSet<object>` pada masa jalan; ambil perhatian bahawa
`WeakSet` hanya boleh mengandungi rujukan objek.

### Kelebihan

- Menyediakan semakan masa jalan yang ringkas untuk menentukan sama ada sesuatu nilai ialah `WeakSet`.
- Membantu mencegah ralat jenis dengan memastikan hanya instans `WeakSet` dianggap sebagai sedemikian.
- Berfungsi dengan sebarang input `unknown` dan mengembalikan hasil boolean yang jelas (`true`/`false`).

## Penggunaan

### Sintaks

Fungsi:

- `isWeakSet(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // benar
console.log(isWeakSet(b)); // palsu

if (isWeakSet(a)) {
  // a ialah WeakSet pada masa jalan
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isWeakSet(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:20:02 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>