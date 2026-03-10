# isMap

## Penerangan

Memeriksa sama ada `value` yang diberikan ialah `Map`, mengembalikan `true` jika ya dan `false` jika tidak.

### Kes penggunaan

Gunakan `isMap` apabila anda menerima nilai `unknown` (contohnya, daripada penguraian JSON, API luaran, atau input
pengguna) dan perlu memastikan ia ialah `Map` sebelum melakukan operasi `Map`.

> **Nota untuk pengguna TypeScript:**
>
> `isMap` ialah pengawal masa jalan yang mengembalikan `true` apabila nilainya ialah `Map` dan `false` jika tidak;
> gunakannya untuk mengecilkan `unknown` sebelum memanggil API `Map`.

### Kelebihan

- Menyediakan semakan masa jalan yang pantas untuk menentukan sama ada sesuatu nilai ialah `Map`.
- Membantu mencegah ralat jenis dengan melindungi laluan kod yang memerlukan kaedah `Map` seperti `get`, `set`, dan
  `has`.
- Ia berfungsi dengan baik sebagai langkah pengesahan ringan apabila mengendalikan input `unknown`.

## Penggunaan

### Sintaks

Fungsi:

- `isMap(value)`

Parameter:

- `value`: Nilai untuk diperiksa.

### Import fungsi tempatan

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isMap(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isMap](../_analysis/isMap.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 16:42:46 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>