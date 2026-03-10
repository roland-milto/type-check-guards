# areNaNs

## Deskripsi

`areNaNs` memeriksa apakah semua elemen dalam sebuah array adalah `NaN` dan mengembalikan `true` hanya jika setiap
elemen adalah `NaN`.

### Kasus penggunaan

Memvalidasi data masuk ketika `NaN` digunakan sebagai nilai sentinel dan Anda harus memastikan seluruh array hanya
terdiri dari `NaN` (misalnya, mendeteksi deret numerik yang seluruhnya hilang).

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areNaNs` ketika Anda perlu memvalidasi bahwa sebuah array hanya berisi nilai numerik `NaN` (tanpa pemaksaan
> string-ke-angka).

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah `NaN` (pemeriksaan ketat semua elemen).
- Tidak memaksa (coerce) string menjadi angka; nilai seperti "NaN" tetap bukan `NaN` dan membuat hasilnya `false`.
- Mengembalikan `false` untuk array yang tidak terisi, mencegah `true` yang tidak disengaja pada input kosong.

## Penggunaan

### Sintaks

Fungsi:

- `areNaNs(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk nilai `NaN`.

### Impor fungsi lokal

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // benar
const b = areNaNs([NaN, 1, NaN]); // salah
const c = areNaNs([NaN, "NaN", NaN]); // salah
const d = areNaNs([NaN, null, NaN]); // salah
const e = areNaNs([] as unknown[]); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areNaNs(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 15.51.47 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>