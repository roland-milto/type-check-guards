# isNull

## Penerangan

Menentukan sama ada `value` yang diberikan ialah `null`.

### Kes penggunaan

Gunakan `isNull` untuk mengesahkan input atau medan payload API apabila `null` ialah nilai sentinel yang bermakna dan
mesti dikendalikan secara berbeza daripada `undefined` atau nilai lain.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isNull` apabila anda perlu membezakan `null` daripada `undefined` dan nilai falsy lain; ia mengembalikan
`true` hanya untuk `null`.

### Kelebihan

- Menyediakan semakan yang tepat untuk `null` tanpa menyamakannya dengan `undefined`.
- Berfungsi dengan boleh dipercayai untuk sebarang jenis input kerana ia menerima `unknown`.
- Ringkas, pantas, dan tanpa kesan sampingan; hanya mengembalikan `true` atau `false`.

## Penggunaan

### Sintaks

Fungsi:

- `isNull(value)`

Parameter:

- `value`: Nilai untuk disemak sama ada `null`.

### Import fungsi tempatan

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // benar
console.log(isNull(b)); // palsu

if (isNull(a)) {
  // a ialah null di sini
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isNull(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isNull](../_analysis/isNull.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 15:41:30 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>