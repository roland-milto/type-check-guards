# isPrimitive

## Penerangan

`isPrimitive` menentukan sama ada sesuatu nilai yang diberikan ialah primitif (`null`, `undefined`, `boolean`, `number`,
`string`, `bigint`, `symbol`).

### Kes penggunaan

Sahkan input pada masa jalan (contohnya, medan muatan API, nilai konfigurasi, atau data yang dibekalkan pengguna) untuk
memastikan sesuatu nilai ialah primitif sebelum disiri, dilog, atau dikenakan operasi khusus primitif.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isPrimitive` untuk mengawal input `unknown` sebelum menganggapnya sebagai objek atau fungsi; ia mengembalikan
`true` untuk primitif dan `false` untuk objek dan fungsi.

### Kelebihan

- Semakan pantas tanpa peruntukan untuk menentukan sama ada sesuatu nilai ialah primitif JavaScript.
- Menganggap `null` sebagai primitif dengan betul (walaupun `typeof null` ialah `"object"`).
- Membantu mengecilkan nilai `unknown` sebelum melakukan operasi yang hanya untuk objek.

## Penggunaan

### Sintaks

Fungsi:

- `isPrimitive(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa sama ada jenisnya primitif.

### Import fungsi tempatan

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isPrimitive(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:58:32 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>