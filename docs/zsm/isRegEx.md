# isRegEx

## Penerangan

Menentukan sama ada nilai yang diberikan ialah instans `RegExp`.

### Kes penggunaan

Sahkan nilai yang dibekalkan pengguna atau nilai dinamik (contohnya, konfigurasi, muatan API, input pemalam) sebelum
menganggapnya sebagai ungkapan biasa.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isRegEx` untuk mengecilkan nilai `unknown` (atau union) sebelum menggunakan sifat atau kaedah khusus RegExp;
> ia mengembalikan `true` hanya untuk nilai yang merupakan instans `RegExp`.

### Kelebihan

- Menyediakan pengawal jenis masa jalan yang ringkas untuk menyemak sama ada sesuatu nilai ialah `RegExp`.
- Membantu mencegah ralat apabila kod menjangkakan ungkapan biasa (contohnya, sebelum memanggil `test`, `exec`, atau
  membaca `source`).
- Berfungsi dengan kedua-dua literal regex dan instans yang dicipta melalui `new RegExp(...)`.
- Mengembalikan hasil boolean yang jelas (`true`/`false`) tanpa melemparkan ralat untuk input bukan regex.

## Penggunaan

### Sintaks

Fungsi:

- `isRegEx(value)`

Parameter:

- `value`: Nilai yang hendak disemak.

### Import fungsi tempatan

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input ialah RegExp di sini
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isRegEx(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:31:48 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>