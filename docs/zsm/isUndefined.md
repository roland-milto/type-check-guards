# isUndefined

## Penerangan

Menyemak sama ada nilai yang diberikan ialah `undefined`.

### Kes penggunaan

Gunakan `isUndefined` untuk mengawal input pilihan, mengesan sifat yang hilang, atau membezakan antara “tidak
diberikan” (`undefined`) dan “kosong secara eksplisit” (`null`).

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isUndefined` apabila anda khususnya perlu mengesan `undefined` (bukan `null`). Ia selamat kerana ia
> bergantung pada `typeof value === "undefined"`.

### Kelebihan

- Menyediakan semakan yang jelas dan eksplisit untuk `undefined` menggunakan `typeof`, sekali gus mengelakkan kes tepi
  dengan pembolehubah yang tidak diisytiharkan.
- Mengembalikan hasil boolean yang ringkas (`true`/`false`) sesuai untuk pengawal (guards), percabangan, dan logik
  pengesahan.
- Membantu membezakan `undefined` daripada nilai “kosong” lain seperti `null`, `0`, `""`, atau `NaN`.

## Penggunaan

### Sintaks

Fungsi:

- `isUndefined(value)`

Parameter:

- `value`: Nilai yang akan disemak.

### Import fungsi tempatan

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x tidak ditakrifkan di sini
} else {
  // x tidak tidak ditakrifkan di sini
}

const a = isUndefined(undefined); // benar
const b = isUndefined(null);      // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isUndefined(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:05:12 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>