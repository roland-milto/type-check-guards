# isValidDate

## Penerangan

`isValidDate` menyemak sama ada sesuatu nilai yang diberikan ialah objek `Date` yang sah dan mengembalikan `true` hanya
untuk tarikh sebenar yang tidak tidak sah.

### Kes penggunaan

Sahkan input pengguna atau data API yang mungkin mengandungi tarikh, memastikan nilainya ialah instans `Date` yang
sebenar dan bukan tarikh tidak sah sebelum melakukan pengiraan tarikh, pemformatan atau perbandingan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isValidDate` sebelum memanggil kaedah `Date` (cth., `toISOString`, `getTime`) pada nilai yang ditaip sebagai
`unknown` untuk memastikan ia ialah objek `Date` yang sah.

### Kelebihan

- Memastikan sesuatu nilai ialah instans `Date` dan bukan sekadar rentetan atau nombor yang kelihatan seperti tarikh.
- Menolak tarikh tidak sah (cth., `new Date("invalid")`) dengan menyemak nilai masa `NaN`.
- Pengawal boolean ringkas yang mudah digunakan dalam pernyataan bersyarat dan saluran pengesahan.
- Membantu mencegah ralat masa jalan apabila memanggil kaedah tarikh dengan mengesahkan input terlebih dahulu.

## Penggunaan

### Sintaks

Fungsi:

- `isValidDate(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ialah instans Date yang sah
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // palsu
console.log(isValidDate("2025-12-22")); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isValidDate(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 16:53:51 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>