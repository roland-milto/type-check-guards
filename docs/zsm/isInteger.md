# isInteger

## Penerangan

Menentukan sama ada `value` yang diberikan ialah nombor integer selamat.

### Kes penggunaan

Sahkan input yang tidak dipercayai (cth., parameter pertanyaan, muatan JSON, pembolehubah persekitaran) sebelum
menggunakannya sebagai integer untuk indeks tatasusunan, penomboran halaman, kaunter, atau ID pangkalan data.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isInteger` untuk mengesahkan input yang tidak diketahui sebelum menganggapnya sebagai integer numerik; ia
> mengembalikan `true` hanya untuk nilai yang memenuhi `typeof value === "number"` dan `Number.isSafeInteger(value)`.

### Kelebihan

- Menyemak kedua-dua keselamatan jenis dan numerik: mengembalikan `true` hanya apabila input ialah nombor dan integer
  selamat.
- Mencegah perangkap biasa dengan paksaan numerik: rentetan seperti "5" akan mengembalikan `false` dengan betul.
- Menolak bukan-integer dan integer tidak selamat, menjadikannya sesuai untuk ID, kaunter, dan pengindeksan tatasusunan.

## Penggunaan

### Sintaks

Fungsi:

- `isInteger(value)`

Parameter:

- `value`: Nilai untuk disemak bagi status integer.

### Import fungsi tempatan

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // benar
const b = isInteger(-100);   // benar
const c = isInteger("5");    // palsu
const d = isInteger(5.5);    // palsu
const e = isInteger(null);   // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isInteger(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 00:52:08 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>