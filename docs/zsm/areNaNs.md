# areNaNs

## Penerangan

`areNaNs` menyemak sama ada semua elemen dalam tatasusunan ialah `NaN` dan mengembalikan `true` hanya jika setiap elemen
ialah `NaN`.

### Kes penggunaan

Sahkan data masuk apabila `NaN` digunakan sebagai nilai penanda (sentinel) dan anda mesti memastikan keseluruhan
tatasusunan terdiri secara eksklusif daripada `NaN` (contohnya, mengesan siri berangka yang semuanya hilang).

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areNaNs` apabila anda perlu mengesahkan bahawa sesuatu tatasusunan mengandungi hanya nilai berangka `NaN` (
> tanpa pemaksaan rentetan-ke-nombor).

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen ialah `NaN` (semakan ketat semua elemen).
- Tidak memaksa (coerce) rentetan kepada nombor; nilai seperti "NaN" kekal bukan `NaN` dan menjadikan hasil `false`.
- Mengembalikan `false` untuk tatasusunan yang tidak diisi, mengelakkan `true` secara tidak sengaja pada input kosong.

## Penggunaan

### Sintaks

Fungsi:

- `areNaNs(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa bagi nilai `NaN`.

### Import fungsi tempatan

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // benar
const b = areNaNs([NaN, 1, NaN]); // palsu
const c = areNaNs([NaN, "NaN", NaN]); // palsu
const d = areNaNs([NaN, null, NaN]); // palsu
const e = areNaNs([] as unknown[]); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areNaNs(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 15:54:29 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>