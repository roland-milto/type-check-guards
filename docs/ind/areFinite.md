# areFinite

## Deskripsi

`areFinite` memeriksa apakah suatu nilai adalah array yang tidak kosong dengan elemen-elemen yang semuanya merupakan
angka hingga (finite), mengembalikan `true` jika demikian dan `false` jika tidak.

### Kasus penggunaan

Memvalidasi array input numerik (mis., seri grafik, daftar koordinat, sampel pengukuran) sebelum melakukan perhitungan,
memastikan hasilnya `true` hanya ketika semua nilainya adalah angka hingga (finite).

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areFinite` ketika Anda perlu memastikan sebuah array tidak kosong dan hanya berisi angka hingga (finite);
> fungsi ini mengembalikan `false` untuk array kosong dan untuk array yang berisi `NaN` atau nilai tak hingga.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang tidak kosong dan setiap elemennya adalah angka hingga (
  finite).
- Menolak `Infinity`, `-Infinity`, dan `NaN` dengan mengandalkan pemeriksaan `isFinite` untuk setiap elemen.
- Menyediakan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan alur validasi.

## Penggunaan

### Sintaks

Fungsi:

- `areFinite(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah semua elemennya bernilai hingga (finite).

### Impor fungsi lokal

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // benar
console.log(areFinite(b)); // salah
console.log(areFinite(c)); // salah

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areFinite(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 16.35.16 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>