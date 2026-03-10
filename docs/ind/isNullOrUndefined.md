# isNullOrUndefined

## Deskripsi

Memeriksa apakah suatu nilai adalah `null` atau `undefined`.

### Kasus penggunaan

Gunakan `isNullOrUndefined` saat Anda perlu memperlakukan `null` dan `undefined` sebagai “tidak ada nilai”, seperti
memvalidasi input opsional, menormalkan payload API, atau melakukan guard pada jalur kode sebelum melakukan dereference
pada nilai yang berpotensi tidak ada.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isNullOrUndefined` untuk melakukan guard terhadap nilai yang hilang sebelum mengakses properti atau memanggil
> metode; fungsi ini mengembalikan `true` hanya untuk `null` dan `undefined`.

### Keunggulan

- Menyediakan guard yang jelas dan dapat digunakan kembali untuk mendeteksi `null` dan `undefined` di satu tempat.
- Mengembalikan boolean sederhana (`true`/`false`) yang mudah dikomposisikan dalam kondisi dan validasi.
- Membantu menghindari kesalahan runtime yang umum dengan memeriksa nilai yang hilang sebelum mengakses properti atau
  memanggil metode.

## Penggunaan

### Sintaks

Fungsi:

- `isNullOrUndefined(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah `null` atau `undefined`.

### Impor fungsi lokal

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // tangani nilai yang hilang
}

console.log(isNullOrUndefined(b)); // benar
console.log(isNullOrUndefined(c)); // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isNullOrUndefined(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.33.59 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>