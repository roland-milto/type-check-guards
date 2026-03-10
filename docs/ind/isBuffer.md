# isBuffer

## Deskripsi

Memeriksa apakah sebuah nilai adalah `Buffer` Node.js dan mengembalikan `true` atau `false`.

### Kasus penggunaan

Validasi input saat runtime (misalnya payload API, data file, atau buffer pesan) untuk memastikan sebuah nilai adalah
`Buffer` sebelum memprosesnya, dan secara andal mendapatkan `false` saat berjalan di luar Node.js ketika `Buffer`
mungkin tidak ada.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isBuffer` untuk mempersempit nilai `unknown` menjadi `Buffer` sebelum memanggil metode khusus Buffer.

### Keunggulan

- Mendeteksi instance `Buffer` Node.js dengan aman menggunakan `Buffer.isBuffer`.
- Mengembalikan `false` di lingkungan tempat `Buffer` tidak tersedia, sehingga menghindari error saat runtime.
- Bekerja dengan input `unknown`, sehingga cocok untuk validasi runtime dan penyempitan tipe.

## Penggunaan

### Sintaks

Fungsi:

- `isBuffer(value)`

Parameter:

- `value`: Nilai yang akan diuji.

### Impor fungsi lokal

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // benar
console.log(isBuffer(b)); // salah

if (isBuffer(a)) {
  // a adalah sebuah Buffer di sini
  console.log(a.toString("utf8"));
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isBuffer(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 16.31.53 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>