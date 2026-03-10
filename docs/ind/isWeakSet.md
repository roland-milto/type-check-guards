# isWeakSet

## Deskripsi

Menentukan apakah `value` yang diberikan adalah sebuah `WeakSet` berisi objek.

### Kasus penggunaan

Gunakan `isWeakSet` saat menerima input tanpa tipe (misalnya dari API eksternal, konfigurasi dinamis, atau nilai
`unknown`) dan Anda perlu memverifikasi bahwa itu adalah `WeakSet` sebelum menggunakan operasi khusus `WeakSet`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isWeakSet` untuk mempersempit nilai `unknown` menjadi `WeakSet<object>` pada runtime; perhatikan bahwa
`WeakSet` hanya dapat berisi referensi objek.

### Keunggulan

- Menyediakan pemeriksaan runtime sederhana untuk mengetahui apakah suatu nilai adalah `WeakSet`.
- Membantu mencegah kesalahan tipe dengan memastikan hanya instance `WeakSet` yang diperlakukan sebagai `WeakSet`.
- Berfungsi dengan input `unknown` apa pun dan mengembalikan hasil boolean yang jelas (`true`/`false`).

## Penggunaan

### Sintaks

Fungsi:

- `isWeakSet(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // benar
console.log(isWeakSet(b)); // salah

if (isWeakSet(a)) {
  // a adalah WeakSet saat runtime
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isWeakSet(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.15.08 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>