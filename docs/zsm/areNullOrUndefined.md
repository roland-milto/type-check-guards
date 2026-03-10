# areNullOrUndefined

## Penerangan

Menyemak sama ada semua elemen dalam tatasusunan yang diberikan ialah `null` atau `undefined`.

### Kes penggunaan

Sahkan bahawa senarai medan pilihan tidak mengandungi sebarang nilai sebenar (hanya `null`/`undefined`) sebelum
memutuskan untuk melangkau pemprosesan atau untuk memaparkan keadaan “tiada nilai diberikan”.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areNullOrUndefined` apabila anda perlu mengesahkan bahawa sesuatu tatasusunan hanya mengandungi nilai yang
> hilang (`null`/`undefined`). Ambil perhatian bahawa ia mengembalikan `false` untuk tatasusunan kosong.

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen ialah `null` atau `undefined`.
- Mengembalikan `false` untuk tatasusunan kosong, membantu membezakan “tiada data” daripada “semua nilai hilang”.
- Berfungsi dengan `unknown[]`, menjadikannya selamat digunakan sebelum mengecilkan jenis.

## Penggunaan

### Sintaks

Fungsi:

- `areNullOrUndefined(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa.

### Import fungsi tempatan

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === benar

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === palsu

const empty = areNullOrUndefined([]);
// empty === palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areNullOrUndefined(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 00:32:06 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>