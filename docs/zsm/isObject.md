# isObject

## Penerangan

Menentukan sama ada `value` yang diberikan ialah `object` (tidak termasuk `null`).

### Kes penggunaan

Gunakan `isObject` untuk mengesahkan input yang tidak diketahui (cth., JSON yang diparse, respons API, payload acara)
sebelum mengakses properti, memastikan nilainya ialah objek dan bukan `null`.

> **Nota untuk pengguna TypeScript:**
>
> `isObject` ialah guard masa jalan yang mengembalikan boolean; ia tidak mengecilkan kepada bentuk objek tertentu.
> Gabungkan dengan semakan tambahan (cth., kewujudan properti) apabila anda memerlukan penaipan yang lebih kukuh.

### Kelebihan

- Mengembalikan `true` hanya untuk nilai bukan `null` yang `typeof`-nya ialah `"object"`.
- Mengelakkan perangkap JavaScript yang biasa di mana `null` sebaliknya akan dianggap sebagai objek.
- Ia berfungsi untuk objek biasa dan instans objek terbina dalam (cth., `Date`, `RegExp`).
- Semakan masa jalan yang ringkas dan pantas, sesuai untuk pengaturcaraan defensif dan pengesahan input.

## Penggunaan

### Sintaks

Fungsi:

- `isObject(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa sama ada merupakan `object`.

### Import fungsi tempatan

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input ialah objek bukan null pada masa jalan
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isObject(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isObject](../_analysis/isObject.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 00:26:34 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>