# areBigInts

## Deskripsi

`areBigInts` menentukan apakah suatu nilai adalah array tidak kosong yang hanya berisi nilai `bigint`.

### Kasus penggunaan

Validasi input yang tidak diketahui (mis., data mirip JSON yang di-parse, payload API, atau parameter fungsi yang
diketik sebagai `unknown`) untuk memastikan itu adalah array tidak kosong dari nilai `bigint` sebelum diproses;
mengembalikan `true` hanya ketika semua elemen adalah `bigint`, jika tidak maka `false`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areBigInts` sebagai guard runtime sebelum melakukan operasi khusus `bigint` (mis., aritmetika, perbandingan)
> pada input yang tidak diketahui.

### Keunggulan

- Memastikan setiap elemen adalah `bigint`, mengembalikan `true` hanya ketika seluruh array cocok.
- Menolak nilai yang bukan array dan array kosong secara desain (melalui `isFilledArray`), mencegah penerimaan tidak
  sengaja terhadap input yang tidak valid.
- Gagal cepat: mengembalikan `false` segera setelah elemen non-`bigint` ditemukan.

## Penggunaan

### Sintaks

Fungsi:

- `areBigInts(array)`

Parameter:

- `array`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // benar
console.log(areBigInts(b)); // salah
console.log(areBigInts(c)); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areBigInts(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.26.11 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>