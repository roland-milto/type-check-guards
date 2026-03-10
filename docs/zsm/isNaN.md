# isNaN

## Penerangan

Menentukan sama ada `value` yang diberikan ialah `NaN` bertipe `number` tanpa menukar rentetan.

### Kes penggunaan

Sahkan input yang tidak dipercayai atau bertip longgar (cth. payload API, nilai borang, JSON yang dihuraikan) untuk
mengesan nilai khas `NaN` dan menanganinya secara eksplisit, sambil menganggap input bukan nombor sebagai bukan `NaN`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isNaN` apabila anda perlu mengesan nilai numerik khas `NaN` sambil memastikan input itu benar-benar
`number` (tiada penukaran rentetan-ke-nombor).

### Kelebihan

- Menyemak sama ada sesuatu nilai ialah `NaN` tanpa memaksa nilai bukan nombor (cth. rentetan) ditukar kepada nombor.
- Mengembalikan `true` hanya untuk nilai yang kedua-duanya bertipe `number` dan `NaN`.
- Selamat untuk input `unknown` dan mengelakkan positif palsu daripada penukaran tersirat.

## Penggunaan

### Sintaks

Fungsi:

- `isNaN(value)`

Parameter:

- `value`: Nilai yang hendak disemak sama ada ia ialah `NaN` bertipe `number`.

### Import fungsi tempatan

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // benar
console.log(isNaN(b)); // palsu
console.log(isNaN(c)); // palsu

if (isNaN(a)) {
  // a ialah nombor dan khususnya NaN
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isNaN(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 15:49:02 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>