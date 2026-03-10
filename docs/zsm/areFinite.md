# areFinite

## Penerangan

`areFinite` menyemak sama ada sesuatu nilai ialah tatasusunan tidak kosong yang elemennya semuanya nombor terhingga,
mengembalikan `true` jika ya dan `false` jika tidak.

### Kes penggunaan

Sahkan tatasusunan input berangka (cth., siri carta, senarai koordinat, sampel ukuran) sebelum melakukan pengiraan,
memastikan hasilnya ialah `true` hanya apabila semua nilai ialah nombor terhingga.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areFinite` apabila anda perlu memastikan sesuatu tatasusunan tidak kosong dan hanya mengandungi nombor
> terhingga; ia mengembalikan `false` untuk tatasusunan kosong dan untuk tatasusunan yang mengandungi `NaN` atau
> infiniti.

### Kelebihan

- Mengembalikan `true` hanya apabila input ialah tatasusunan tidak kosong dan setiap elemen ialah nombor terhingga.
- Menolak `Infinity`, `-Infinity`, dan `NaN` dengan bergantung pada semakan `isFinite` bagi setiap elemen.
- Menyediakan keputusan boolean ringkas (`true`/`false`) yang sesuai untuk pengawal (guards) dan aliran pengesahan (
  validation).

## Penggunaan

### Sintaks

Fungsi:

- `areFinite(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi memastikan semua elemennya adalah terhingga.

### Import fungsi tempatan

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // benar
console.log(areFinite(b)); // palsu
console.log(areFinite(c)); // palsu

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areFinite(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 16:38:18 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>