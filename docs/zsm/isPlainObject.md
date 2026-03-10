# isPlainObject

## Penerangan

Menyemak sama ada `value` yang diberikan ialah objek biasa dan memulangkan `true` jika ya, jika tidak `false`.

### Kes penggunaan

Sahkan bahawa input `unknown` (contohnya JSON yang dihuraikan, data luaran, atau argumen fungsi) ialah objek biasa
sebelum membaca kekunci atau memetakannya ke dalam objek konfigurasi bertip.

> **Nota untuk pengguna TypeScript:**
>
> `isPlainObject` berguna untuk mengecilkan `unknown` sebelum menganggapnya sebagai objek seperti rekod; ia memulangkan
`true` hanya untuk nilai yang tag dalamannya ialah `[object Object]`.

### Kelebihan

- Menyediakan semakan yang ringkas dan boleh dipercayai sama ada sesuatu nilai ialah objek biasa (iaitu, `Object` /
  `{}`), dengan memulangkan `true` atau `false`.
- Membantu membezakan objek biasa daripada tatasusunan, fungsi, `null`, dan jenis lain yang bukan objek biasa.
- Berguna sebagai pengawal jenis dalam TypeScript untuk mengecilkan nilai `unknown` sebelum mengakses sifat objek.

## Penggunaan

### Sintaks

Fungsi:

- `isPlainObject(value)`

Parameter:

- `value`: Nilai yang hendak diuji untuk status objek biasa.

### Import fungsi tempatan

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input ialah objek biasa di sini
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // benar
console.log(isPlainObject([])); // palsu
console.log(isPlainObject(null)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isPlainObject(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 12:20:48 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>