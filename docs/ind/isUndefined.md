# isUndefined

## Deskripsi

Memeriksa apakah suatu nilai adalah `undefined`.

### Kasus penggunaan

Gunakan `isUndefined` untuk menjaga input opsional, mendeteksi properti yang hilang, atau membedakan antara “tidak
diberikan” (`undefined`) dan “secara eksplisit kosong” (`null`).

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isUndefined` ketika Anda secara spesifik perlu mendeteksi `undefined` (bukan `null`). Ini aman karena
> bergantung pada `typeof value === "undefined"`.

### Keunggulan

- Menyediakan pemeriksaan yang jelas dan eksplisit untuk `undefined` menggunakan `typeof`, sehingga menghindari kasus
  tepi pada variabel yang belum dideklarasikan.
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard, percabangan, dan logika validasi.
- Membantu membedakan `undefined` dari nilai “kosong” lainnya seperti `null`, `0`, `""`, atau `NaN`.

## Penggunaan

### Sintaks

Fungsi:

- `isUndefined(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x tidak terdefinisi di sini
} else {
  // x tidak tidak terdefinisi di sini
}

const a = isUndefined(undefined); // benar
const b = isUndefined(null);      // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isUndefined(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.03.01 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>