# areHexadecimals

## Penerangan

Memeriksa sama ada semua elemen dalam tatasusunan ialah rentetan heksadesimal, mengembalikan `true` hanya untuk
tatasusunan tidak kosong yang setiap itemnya sah.

### Kes penggunaan

Gunakan `areHexadecimals` untuk mengesahkan input pengguna atau data luaran (cth., ID, checksum, kod warna tanpa
awalan '#') sebelum melakukan penghuraian heksadesimal atau pemprosesan lanjut.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areHexadecimals` untuk mengesahkan input tidak diketahui sebelum menghuraikan atau menukar nilai (contohnya,
> sebelum `parseInt(value, 16)` atau penukaran BigInt).

### Kelebihan

- Mengesahkan bahawa setiap elemen ialah rentetan heksadesimal dan mengembalikan `true` hanya apabila semua item
  sepadan.
- Menolak tatasusunan kosong secara reka bentuk, mengembalikan `false` apabila data input tiada.
- Menyediakan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal dan pengesahan pulangan awal.

## Penggunaan

### Sintaks

Fungsi:

- `areHexadecimals(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi elemen rentetan heksadesimal.

### Import fungsi tempatan

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areHexadecimals(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:08:42 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>