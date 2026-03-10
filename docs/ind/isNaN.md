# isNaN

## Deskripsi

Menentukan apakah `value` yang diberikan adalah `NaN` bertipe `number` tanpa mengonversi string.

### Kasus penggunaan

Memvalidasi input yang tidak tepercaya atau bertipe longgar (mis. payload API, nilai formulir, JSON yang di-parse) untuk
mendeteksi nilai khusus `NaN` dan menanganinya secara eksplisit, sambil memperlakukan input non-angka sebagai bukan
`NaN`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isNaN` ketika Anda perlu mendeteksi nilai numerik khusus `NaN` sambil memastikan input benar-benar bertipe
`number` (tanpa konversi string-ke-angka).

### Keunggulan

- Memeriksa apakah suatu nilai adalah `NaN` tanpa memaksa nilai non-angka (mis. string) menjadi angka.
- Mengembalikan `true` hanya untuk nilai yang bertipe `number` dan bernilai `NaN`.
- Aman untuk input `unknown` dan menghindari positif palsu dari konversi implisit.

## Penggunaan

### Sintaks

Fungsi:

- `isNaN(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah merupakan `NaN` bertipe `number`.

### Impor fungsi lokal

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // benar
console.log(isNaN(b)); // salah
console.log(isNaN(c)); // salah

if (isNaN(a)) {
  // a adalah sebuah angka dan secara khusus NaN
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isNaN(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 15.46.22 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>