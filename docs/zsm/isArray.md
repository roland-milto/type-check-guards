# isArray

## Penerangan

`isArray` menyemak sama ada nilai yang diberikan ialah tatasusunan dan mengembalikan `true` jika ya, jika tidak `false`.

### Kes penggunaan

Sahkan data yang tidak diketahui (cth., JSON yang dihurai atau respons API) untuk memastikan sesuatu nilai ialah
tatasusunan sebelum mengiterasi, mengindeks, atau mengakses `.length`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isArray` apabila anda memerlukan semakan masa jalan untuk tatasusunan; ia mengembalikan boolean dan selamat
> dipanggil dengan nilai `unknown`.

### Kelebihan

- Menggunakan `Array.isArray` terbina dalam untuk pengesanan tatasusunan yang boleh dipercayai merentas realm (cth.,
  iframe).
- Mengembalikan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal dan logik percabangan.
- Berfungsi dengan sebarang jenis input kerana parameternya ialah `unknown`.

## Penggunaan

### Sintaks

Fungsi:

- `isArray(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input ialah tatasusunan semasa masa jalan
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isArray(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isArray](../_analysis/isArray.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 11:32:51 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>