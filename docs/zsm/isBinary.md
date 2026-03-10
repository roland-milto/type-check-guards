# isBinary

## Penerangan

`isBinary` menentukan sama ada sesuatu nilai ialah rentetan binari (secara pilihan diawali dengan `0b`/`0B`) dan
mengembalikan `true` atau `false`.

### Kes penggunaan

Sahkan rentetan yang dibekalkan pengguna (cth., medan borang, argumen CLI, nilai konfigurasi) untuk memastikan ia hanya
mewakili digit binari, secara pilihan dengan awalan `0b`/`0B`, sebelum pemprosesan lanjut.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isBinary` sebagai pengawal jenis sebelum menghuraikan atau menukar rentetan kepada `BigInt`/`Number` untuk
> mengelakkan input tidak sah.

### Kelebihan

- Menerima rentetan binari dengan atau tanpa awalan `0b`/`0B`.
- Menolak rentetan kosong dan rentetan dengan ruang putih di hadapan/di belakang (ASCII ≤ 32).
- Mengembalikan `true`/`false` tanpa membaling ralat, menjadikannya selamat untuk input yang tidak diketahui.

## Penggunaan

### Sintaks

Fungsi:

- `isBinary(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // benar
const b = isBinary("1010");   // benar
const c = isBinary("0b1020"); // palsu
const d = isBinary(0b1010);     // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isBinary(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:12:01 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>