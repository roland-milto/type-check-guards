# isMap

## Deskripsi

Memeriksa apakah `value` yang diberikan adalah sebuah `Map`, mengembalikan `true` jika ya dan `false` jika tidak.

### Kasus penggunaan

Gunakan `isMap` ketika Anda menerima nilai `unknown` (misalnya dari parsing JSON, API eksternal, atau input pengguna)
dan perlu memastikan nilainya adalah `Map` sebelum melakukan operasi `Map`.

> **Catatan untuk pengguna TypeScript:**
>
> `isMap` adalah guard runtime yang mengembalikan `true` ketika nilainya adalah `Map` dan `false` jika tidak; gunakan
> untuk mempersempit `unknown` sebelum memanggil API `Map`.

### Keunggulan

- Menyediakan pemeriksaan runtime yang cepat untuk mengetahui apakah suatu nilai adalah `Map`.
- Membantu mencegah kesalahan tipe dengan melindungi jalur kode yang memerlukan metode `Map` seperti `get`, `set`, dan
  `has`.
- Berfungsi baik sebagai langkah validasi ringan saat menangani input `unknown`.

## Penggunaan

### Sintaks

Fungsi:

- `isMap(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

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

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isMap(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isMap](../_analysis/isMap.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 16.04.50 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>