# areFilledArrays

## Penerangan

`areFilledArrays` menyemak sama ada tatasusunan dua dimensi tidak kosong dan semua subarraynya tidak kosong.

### Kes penggunaan

Gunakan `areFilledArrays` untuk mengesahkan input berbentuk jadual atau seperti matriks (cth., baris CSV, data grid,
hasil berkelompok) supaya anda boleh mengandaikan dengan selamat bahawa terdapat sekurang-kurangnya satu subarray dan
tiada subarray yang kosong.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areFilledArrays` apabila anda perlu memastikan tatasusunan 2D mempunyai sekurang-kurangnya satu baris dan
> setiap baris mempunyai sekurang-kurangnya satu elemen sebelum melakukan iterasi atau mengindeks ke dalamnya.

### Kelebihan

- Mengesahkan bahawa tatasusunan luar tidak kosong dan setiap tatasusunan dalam juga tidak kosong, mengembalikan `true`
  hanya apabila kedua-dua syarat dipenuhi.
- Berfungsi dengan sebarang jenis elemen di dalam subarray (cth., nombor, rentetan, objek, tatasusunan bersarang) kerana
  ia hanya menyemak status “berisi” tatasusunan, bukan kandungan elemen.
- Memberikan hasil boolean ringkas (`true`/`false`) yang sesuai digunakan sebagai pengawal sebelum memproses data dua
  dimensi.

## Penggunaan

### Sintaks

Fungsi:

- `areFilledArrays(array)`

Parameter:

- `array`: Tatasusunan dua dimensi untuk disemak.

### Import fungsi tempatan

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // benar
console.log(areFilledArrays(b)); // benar
console.log(areFilledArrays(c)); // benar
console.log(areFilledArrays(d)); // palsu
console.log(areFilledArrays(e)); // palsu
console.log(areFilledArrays(f)); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areFilledArrays(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 12:00:05 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>