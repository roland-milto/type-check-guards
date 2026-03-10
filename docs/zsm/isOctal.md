# isOctal

## Penerangan

Menentukan sama ada sesuatu nilai ialah rentetan literal oktal yang sah (cth. `0o755`).

### Kes penggunaan

Sahkan input pengguna atau nilai konfigurasi yang mesti dinyatakan sebagai rentetan literal oktal (contohnya, mod
kebenaran fail seperti `0o644`) sebelum dihuraikan atau ditukar.

> **Nota untuk pengguna TypeScript:**
>
> `isOctal` ialah pengawal jenis (`value is string`). Selepas keputusan `true`, TypeScript mengecilkan jenis pemboleh
> ubah yang diperiksa kepada `string`.

### Kelebihan

- Menyediakan pengawal jenis yang ketat: mengembalikan `true` hanya apabila input ialah rentetan yang sepadan dengan
  format literal oktal.
- Menolak rentetan kosong dan rentetan dengan ruang kosong di hadapan/belakang (kawalan/ruang ASCII), mengurangkan
  padanan tidak sengaja.
- Menyokong tanda pilihan dan tidak peka huruf besar/kecil untuk awalan `0o`/`0O`.
- Bertolak ansur untuk input bukan rentetan dengan mengembalikan `false` dan bukannya melempar ralat.

## Penggunaan

### Sintaks

Fungsi:

- `isOctal(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // benar
console.log(isOctal(b)); // benar
console.log(isOctal(c)); // palsu
console.log(isOctal(d)); // palsu

if (isOctal(a)) {
  // a ialah string di sini
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isOctal(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 15:44:21 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>