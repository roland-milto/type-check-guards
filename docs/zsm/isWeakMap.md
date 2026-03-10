# isWeakMap

## Penerangan

Menentukan sama ada `value` yang diberikan ialah instans `WeakMap`.

### Kes penggunaan

Gunakan `isWeakMap` apabila anda menerima nilai `unknown` (cth., daripada API awam, sistem pemalam, atau konfigurasi
dinamik) dan perlu mengesahkan bahawa ia ialah `WeakMap` sebelum menggunakan tingkah laku khusus `WeakMap`.

> **Nota untuk pengguna TypeScript:**
>
> `isWeakMap` melakukan semakan `instanceof WeakMap`; ia ialah pengawal masa jalan yang memulangkan `true` hanya untuk
> instans `WeakMap` yang sebenar.

### Kelebihan

- Semakan masa jalan yang ringkas untuk menentukan sama ada sesuatu nilai ialah `WeakMap`.
- Membantu mencegah penyalahgunaan API yang memerlukan `WeakMap` dengan memulangkan `true`/`false` dan bukannya
  melemparkan ralat.
- Berfungsi dengan input `unknown`, menjadikannya mudah digunakan pada sempadan modul (cth., penguraian, data luaran,
  atau kod tanpa jenis).

## Penggunaan

### Sintaks

Fungsi:

- `isWeakMap(value)`

Parameter:

- `value`: Nilai untuk diperiksa.

### Import fungsi tempatan

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a ialah WeakMap pada masa jalan
}

console.log(isWeakMap(a)); // benar
console.log(isWeakMap(b)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isWeakMap(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:27:47 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>