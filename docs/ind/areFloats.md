# areFloats

## Deskripsi

`areFloats` memeriksa apakah sebuah array tertentu terisi dan semua elemennya adalah float.

### Kasus penggunaan

Gunakan `areFloats` ketika Anda menerima `unknown[]` (misalnya dari JSON, parameter kueri, atau API eksternal) dan Anda
perlu memastikan bahwa itu adalah array yang terisi di mana setiap item adalah float sebelum menjalankan logika numerik
seperti perataan, interpolasi, atau perhitungan statistik.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areFloats` untuk menjaga `unknown[]` sebelum memperlakukannya sebagai `number[]` yang hanya berisi float;
> fungsi ini mengembalikan `false` untuk array kosong dan untuk elemen apa pun yang bukan float.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang tidak kosong dan setiap elemennya adalah float.
- Gagal cepat: mengembalikan `false` segera setelah elemen non-float ditemukan.
- Membantu memvalidasi input yang tidak diketahui sebelum melakukan perhitungan khusus float.

## Penggunaan

### Sintaks

Fungsi:

- `areFloats(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk elemen float.

### Impor fungsi lokal

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // benar
console.log(areFloats(b)); // salah
console.log(areFloats(c)); // salah

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areFloats(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 15.57.43 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>