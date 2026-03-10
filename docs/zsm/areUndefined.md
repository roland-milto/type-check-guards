# areUndefined

## Penerangan

`areUndefined` menyemak sama ada setiap elemen dalam tatasusunan yang diberikan ialah `undefined`.

### Kes penggunaan

Sahkan bahawa senarai hasil opsyenal tidak mengandungi nilai sebenar (hanya `undefined`), contohnya selepas pemetaan
carian di mana entri yang tiada diwakili sebagai `undefined`, dan anda mahu mengesahkan bahawa semua carian gagal.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areUndefined` apabila anda perlu menegaskan bahawa `unknown[]` hanya mengandungi nilai `undefined`; ia
> mengembalikan `false` untuk tatasusunan kosong dan input bukan tatasusunan/tidak sah disebabkan semakan dalaman
`isFilledArray`.

### Kelebihan

- Mengembalikan `false` untuk bukan tatasusunan dan tatasusunan kosong dengan memerlukan tatasusunan yang terisi melalui
  `isFilledArray`.
- Memastikan setiap elemen ialah `undefined`, bukan sekadar sebahagian, menjadikan niatnya jelas.
- Berguna sebagai predikat gaya pengawal apabila mengesahkan koleksi input yang tidak diketahui.

## Penggunaan

### Sintaks

Fungsi:

- `areUndefined(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa bagi elemen `undefined`.

### Import fungsi tempatan

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // benar
const r2 = areUndefined(b); // palsu
const r3 = areUndefined(c); // palsu

// Nota: mengembalikan palsu untuk tatasusunan kosong
const r4 = areUndefined([]); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areUndefined(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:59:00 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>