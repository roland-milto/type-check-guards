# isPromise

## Penerangan

Menentukan sama ada nilai yang diberikan ialah `Promise`.

### Kes penggunaan

Gunakan `isPromise` untuk mengesahkan input yang tidak diketahui sebelum menganggapnya sebagai `Promise`, seperti
apabila mengendalikan nilai yang dipulangkan daripada plugin, import dinamik, atau API yang bertip longgar.

> **Nota untuk pengguna TypeScript:**
>
> `isPromise` menyemak melalui `instanceof Promise`, jadi ia hanya memulangkan `true` untuk instans `Promise` sebenar (
> bukan thenable generik).

### Kelebihan

- Menyediakan semakan masa jalan yang ringkas untuk menentukan sama ada sesuatu nilai ialah `Promise`.
- Membantu melindungi laluan kod yang memerlukan instans `Promise` sebenar, dengan memulangkan `true` atau `false`
  secara boleh diramal.
- Mengelakkan positif palsu daripada objek “thenable” (contohnya, `{ then() {} }`) dengan mensyaratkan instans `Promise`
  yang sebenar.

## Penggunaan

### Sintaks

Fungsi:

- `isPromise(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // benar
console.log(isPromise(b)); // palsu
console.log(isPromise(123)); // palsu
console.log(isPromise(null)); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isPromise(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:55:04 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>