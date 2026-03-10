# isObject

## Deskripsi

Menentukan apakah `value` yang diberikan adalah sebuah `object` (tidak termasuk `null`).

### Kasus penggunaan

Gunakan `isObject` untuk memvalidasi input yang tidak diketahui (misalnya, JSON yang di-parse, respons API, payload
event) sebelum mengakses properti, memastikan nilainya adalah sebuah objek dan bukan `null`.

> **Catatan untuk pengguna TypeScript:**
>
> `isObject` adalah guard runtime yang mengembalikan boolean; ini tidak mempersempit ke bentuk objek tertentu. Gabungkan
> dengan pemeriksaan tambahan (misalnya, keberadaan properti) ketika Anda membutuhkan pengetikan yang lebih kuat.

### Keunggulan

- Mengembalikan `true` hanya untuk nilai non-`null` yang `typeof`-nya adalah `"object"`.
- Mencegah jebakan umum JavaScript di mana `null` akan dianggap sebagai objek.
- Berfungsi untuk objek biasa dan instance objek bawaan (misalnya, `Date`, `RegExp`).
- Pemeriksaan runtime yang sederhana dan cepat, cocok untuk pemrograman defensif dan validasi input.

## Penggunaan

### Sintaks

Fungsi:

- `isObject(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah merupakan sebuah `object`.

### Impor fungsi lokal

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input adalah objek non-null saat runtime
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isObject(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isObject](../_analysis/isObject.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.18.46 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>