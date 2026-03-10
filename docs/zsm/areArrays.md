# areArrays

## Penerangan

`areArrays` menentukan sama ada sesuatu nilai ialah tatasusunan dua dimensi yang terisi dan item-itemnya semuanya ialah
tatasusunan.

### Kes penggunaan

Gunakan `areArrays` untuk mengesahkan input berbentuk jadual atau seperti matriks (cth., baris CSV, data grid, atau
senarai berkumpulan) sebelum melakukan operasi baris/lajur; ia mengembalikan `false` jika input bukan tatasusunan,
kosong, atau mengandungi sebarang elemen yang bukan tatasusunan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areArrays` apabila anda perlu memastikan sesuatu nilai ialah tatasusunan 2D yang tidak kosong dan setiap
> baris ialah tatasusunan sebelum mengiterasi atau mengindeks ke dalam tatasusunan bersarang.

### Kelebihan

- Mengesahkan bahawa input ialah tatasusunan dua dimensi yang tidak kosong di mana setiap elemen ialah tatasusunan.
- Mengembalikan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal dan keluar awal.
- Membantu mencegah ralat masa jalan apabila kod seterusnya mengandaikan operasi tatasusunan bersarang (cth., memetakan
  baris).

## Penggunaan

### Sintaks

Fungsi:

- `areArrays(array)`

Parameter:

- `array`: Input yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value ialah tatasusunan 2D dengan tatasusunan sebagai elemen
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areArrays(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 13:42:23 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>