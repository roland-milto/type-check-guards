# areDecimals

## Deskripsi

Memeriksa apakah semua elemen dalam sebuah array adalah angka desimal dan array tersebut terisi, mengembalikan `true`
atau `false`.

### Kasus penggunaan

Memvalidasi daftar yang diberikan pengguna (misalnya kolom CSV atau input formulir) untuk memastikan array tidak kosong
dan setiap entri adalah nilai desimal sebelum parsing atau perhitungan.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areDecimals` saat Anda memerlukan pemeriksaan boolean cepat bahwa sebuah `unknown[]` tidak kosong dan setiap
> elemennya merupakan representasi desimal.

### Keunggulan

- Memastikan input adalah array yang terisi sebelum memvalidasi item, mencegah penerimaan daftar kosong secara tidak
  sengaja.
- Memvalidasi setiap elemen dengan `isDecimal`, sehingga nilai campuran atau tidak valid langsung menghasilkan `false`.
- Memberikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan alur validasi early-return.

## Penggunaan

### Sintaks

Fungsi:

- `areDecimals(array)`

Parameter:

- `array`: Array yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // benar
console.log(areDecimals(b)); // salah
console.log(areDecimals(c)); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areDecimals(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 15.57.31 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>