# isRegEx

## Deskripsi

Menentukan apakah nilai yang diberikan merupakan instance `RegExp`.

### Kasus penggunaan

Memvalidasi nilai yang diberikan pengguna atau nilai dinamis (misalnya, konfigurasi, payload API, input plugin) sebelum
memperlakukannya sebagai ekspresi reguler.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isRegEx` untuk mempersempit nilai `unknown` (atau union) sebelum menggunakan properti atau metode khusus
> RegExp; fungsi ini mengembalikan `true` hanya untuk nilai yang merupakan instance dari `RegExp`.

### Keunggulan

- Menyediakan penjaga tipe runtime yang sederhana untuk memeriksa apakah suatu nilai adalah `RegExp`.
- Membantu mencegah kesalahan ketika kode mengharapkan ekspresi reguler (misalnya, sebelum memanggil `test`, `exec`,
  atau membaca `source`).
- Berfungsi dengan literal regex maupun instance yang dibuat melalui `new RegExp(...)`.
- Mengembalikan hasil boolean yang jelas (`true`/`false`) tanpa melempar error untuk input non-regex.

## Penggunaan

### Sintaks

Fungsi:

- `isRegEx(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input adalah sebuah RegExp di sini
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isRegEx(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.29.39 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>