# areDecimals

## Penerangan

Memeriksa sama ada semua elemen dalam tatasusunan ialah nombor perpuluhan dan tatasusunan tersebut berisi, lalu
mengembalikan `true` atau `false`.

### Kes penggunaan

Sahkan senarai yang diberikan pengguna (cth., lajur CSV atau input borang) untuk memastikan tatasusunan tidak kosong dan
setiap entri ialah nilai perpuluhan sebelum penguraian atau pengiraan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areDecimals` apabila anda memerlukan semakan boolean pantas bahawa `unknown[]` bukan kosong dan setiap elemen
> ialah perwakilan perpuluhan.

### Kelebihan

- Memastikan input ialah tatasusunan yang berisi sebelum mengesahkan item, sekali gus mengelakkan penerimaan tidak
  sengaja bagi senarai kosong.
- Mengesahkan setiap elemen dengan `isDecimal`, jadi nilai bercampur atau tidak sah akan menghasilkan `false`
  serta-merta.
- Memberikan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal (guards) dan aliran pengesahan
  pulang-awal (early-return).

## Penggunaan

### Sintaks

Fungsi:

- `areDecimals(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // benar
console.log(areDecimals(b)); // palsu
console.log(areDecimals(c)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areDecimals(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 15:59:59 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>