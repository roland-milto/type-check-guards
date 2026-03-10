# isNullOrUndefined

## Penerangan

Menyemak sama ada nilai yang diberikan ialah `null` atau `undefined`.

### Kes penggunaan

Gunakan `isNullOrUndefined` apabila anda perlu menganggap kedua-dua `null` dan `undefined` sebagai “tiada nilai”,
seperti mengesahkan input pilihan, menormalkan muatan API, atau melindungi laluan kod sebelum menyahrujuk nilai yang
berpotensi tiada.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isNullOrUndefined` untuk melindungi daripada nilai yang tiada sebelum mengakses sifat atau memanggil kaedah;
> ia mengembalikan `true` hanya untuk `null` dan `undefined`.

### Kelebihan

- Menyediakan pengawal yang jelas dan boleh digunakan semula untuk mengesan `null` dan `undefined` di satu tempat.
- Mengembalikan boolean ringkas (`true`/`false`) yang mudah digabungkan dalam syarat dan pengesahan.
- Membantu mengelakkan ralat masa jalan yang biasa dengan menyemak nilai yang tiada sebelum mengakses sifat atau
  memanggil kaedah.

## Penggunaan

### Sintaks

Fungsi:

- `isNullOrUndefined(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa sama ada `null` atau `undefined`.

### Import fungsi tempatan

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // kendalikan nilai yang tiada
}

console.log(isNullOrUndefined(b)); // benar
console.log(isNullOrUndefined(c)); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isNullOrUndefined(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 00:36:02 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>