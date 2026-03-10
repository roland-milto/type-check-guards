# areIndexesFound

## Penerangan

`areIndexesFound` menyemak sama ada sesuatu nilai ialah tatasusunan tidak kosong yang elemennya semuanya indeks yang
sah, mengembalikan `true` jika ya dan `false` jika tidak.

### Kes penggunaan

Sahkan data yang dibekalkan pengguna atau data luaran (cth., JSON yang dihuraikan) yang dijangka merupakan senarai
indeks sebelum menggunakannya untuk mengakses atau memotong tatasusunan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areIndexesFound` untuk mengesahkan input tidak diketahui sebelum menganggap elemennya sebagai indeks
> tatasusunan; ia mengembalikan `false` untuk tatasusunan kosong dan untuk tatasusunan yang mengandungi nilai bukan
> indeks.

### Kelebihan

- Ia mengembalikan `true` hanya apabila input ialah tatasusunan yang berisi dan setiap elemen ialah indeks yang sah.
- Gagal dengan pantas: mengembalikan `false` sebaik sahaja elemen bukan indeks ditemui.
- Berguna sebagai pengawal sebelum menggunakan nilai sebagai kedudukan atau ofset tatasusunan.

## Penggunaan

### Sintaks

Fungsi:

- `areIndexesFound(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi pematuhan indeks.

### Import fungsi tempatan

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // benar
console.log(areIndexesFound(b)); // palsu
console.log(areIndexesFound(c)); // palsu

if (areIndexesFound(a)) {
  // Di sini, `a` disahkan sebagai tatasusunan indeks yang terisi.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areIndexesFound(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 01:05:06 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>