# isPlainObject

## Deskripsi

Memeriksa apakah `value` yang diberikan adalah objek polos dan mengembalikan `true` jika ya, jika tidak `false`.

### Kasus penggunaan

Validasi bahwa input `unknown` (misalnya JSON yang di-parse, data eksternal, atau argumen fungsi) adalah objek polos
sebelum membaca key atau memetakannya ke dalam objek konfigurasi bertipe.

> **Catatan untuk pengguna TypeScript:**
>
> `isPlainObject` berguna untuk mempersempit `unknown` sebelum memperlakukannya sebagai objek mirip record; fungsi ini
> mengembalikan `true` hanya untuk nilai yang tag internalnya adalah `[object Object]`.

### Keunggulan

- Menyediakan pemeriksaan yang sederhana dan andal untuk mengetahui apakah suatu nilai adalah objek polos (yaitu,
  `Object` / `{}`), mengembalikan `true` atau `false`.
- Membantu membedakan objek polos dari array, fungsi, `null`, dan tipe non-objek-polos lainnya.
- Berguna sebagai type guard di TypeScript untuk mempersempit nilai `unknown` sebelum mengakses properti objek.

## Penggunaan

### Sintaks

Fungsi:

- `isPlainObject(value)`

Parameter:

- `value`: Nilai yang akan diuji untuk status objek polos.

### Impor fungsi lokal

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input adalah objek biasa di sini
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // benar
console.log(isPlainObject([])); // salah
console.log(isPlainObject(null)); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isPlainObject(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 12.18.01 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>