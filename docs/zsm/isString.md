# isString

## Penerangan

`isString` menentukan sama ada sesuatu nilai yang diberikan ialah string.

### Kes penggunaan

Sahkan input pengguna, medan payload API, atau nilai konfigurasi pada masa jalan untuk memastikan sesuatu nilai ialah
string sebelum menerapkan operasi string (cth., trimming, splitting, penukaran huruf besar/kecil).

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isString` untuk mengesahkan nilai `unknown` atau yang ditaip secara longgar sebelum memanggil kaedah string;
> ia mengembalikan `true` hanya apabila `typeof value === "string"`.

### Kelebihan

- Semakan ringkas dan pantas menggunakan `typeof`.
- Mengembalikan hasil boolean yang boleh dijangka: `true` untuk string, selain itu `false`.
- Berfungsi untuk string kosong dan tidak kosong.
- Berguna sebagai pengawal masa jalan yang ringan sebelum melakukan operasi khusus string.

## Penggunaan

### Sintaks

Fungsi:

- `isString(value)`

Parameter:

- `value`: Nilai yang akan diuji untuk jenis string.

### Import fungsi tempatan

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input ialah rentetan di sini
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isString(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isString](../_analysis/isString.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:16:28 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>