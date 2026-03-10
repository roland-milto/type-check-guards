# isBoolean

## Penerangan

Menentukan sama ada sesuatu nilai yang diberikan ialah `boolean`.

### Kes penggunaan

Sahkan data luaran atau tanpa jenis (contohnya, pembolehubah persekitaran, muatan JSON, parameter kueri) untuk
memastikan sesuatu nilai ialah `boolean` sebelum menggunakannya dalam logik bersyarat.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isBoolean` untuk mengecilkan `unknown` kepada `boolean` sebelum menggunakan operasi boolean.

### Kelebihan

- Semakan masa jalan yang ringkas dan pantas menggunakan `typeof`.
- Membantu mengesahkan input yang tidak diketahui sebelum logik khusus boolean.
- Mengembalikan hasil `boolean` yang boleh dijangka (`true`/`false`).

## Penggunaan

### Sintaks

Fungsi:

- `isBoolean(value)`

Parameter:

- `value`: Nilai yang hendak disemak.

### Import fungsi tempatan

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input ialah boolean di sini
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isBoolean(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:38:36 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>