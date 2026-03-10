# areBigInts

## Penerangan

`areBigInts` menentukan sama ada sesuatu nilai ialah tatasusunan tidak kosong yang mengandungi hanya nilai `bigint`.

### Kes penggunaan

Sahkan input tidak diketahui (cth., data seperti JSON yang dihuraikan, muatan API, atau parameter fungsi yang ditaip
sebagai `unknown`) untuk memastikan ia ialah tatasusunan tidak kosong bagi nilai `bigint` sebelum diproses;
mengembalikan `true` hanya apabila semua elemen ialah `bigint`, jika tidak `false`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areBigInts` sebagai pengawal masa jalan sebelum melakukan operasi khusus `bigint` (cth., aritmetik,
> perbandingan) pada input yang tidak diketahui.

### Kelebihan

- Memastikan setiap elemen ialah `bigint`, mengembalikan `true` hanya apabila keseluruhan tatasusunan sepadan.
- Menolak bukan tatasusunan dan tatasusunan kosong secara reka bentuk (melalui `isFilledArray`), mencegah penerimaan
  input tidak sah secara tidak sengaja.
- Gagal pantas: mengembalikan `false` sebaik sahaja elemen bukan `bigint` ditemui.

## Penggunaan

### Sintaks

Fungsi:

- `areBigInts(array)`

Parameter:

- `array`: Nilai untuk diperiksa.

### Import fungsi tempatan

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // benar
console.log(areBigInts(b)); // palsu
console.log(areBigInts(c)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areBigInts(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:28:02 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>