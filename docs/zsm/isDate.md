# isDate

## Penerangan

`isDate` menentukan sama ada nilai yang diberikan ialah `Date`, mengembalikan `true` untuk instans `Date` dan `false`
jika sebaliknya.

### Kes penggunaan

Sahkan dan kecilkan nilai yang tidak diketahui (cth., data permintaan, nilai konfigurasi, atau JSON yang dihuraikan)
sebelum melakukan operasi `Date` seperti pemformatan, perbandingan, atau memanggil `toISOString()`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isDate` untuk mengecilkan `unknown` kepada `Date` pada masa jalan; ia mengembalikan `true` hanya untuk
> instans `Date` sebenar (bukan rentetan tarikh).

### Kelebihan

- Ia menyediakan pengawal masa jalan yang ringkas untuk mengesahkan sama ada sesuatu nilai ialah `Date`.
- Ia membantu mencegah ralat jenis dengan memastikan hanya instans `Date` lulus pengesahan.
- Ia berguna untuk mengesahkan input yang tidak diketahui (cth., muatan API) sebelum menggunakan kaedah khusus tarikh.

## Penggunaan

### Sintaks

Fungsi:

- `isDate(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa bagi jenis `Date`.

### Import fungsi tempatan

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input ialah Date di sini
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isDate(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isDate](../_analysis/isDate.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 15:48:38 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>