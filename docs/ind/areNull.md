# areNull

## Deskripsi

Memeriksa apakah semua elemen dalam `array` yang diberikan adalah `null`.

### Kasus penggunaan

Validasi bahwa sebuah kolom dataset, daftar field API, atau array placeholder hanya berisi nilai `null` sebelum
menerapkan logika yang mengasumsikan semua entri memang sengaja kosong.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areNull` ketika Anda memerlukan pemeriksaan ketat bahwa input adalah array tidak kosong dan setiap elemen
> persis `null` (bukan `undefined`, bukan nilai falsy).

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah `null`, sehingga menjadi penjaga “semua cocok” yang ketat.
- Menolak input yang bukan array dan array kosong dengan mengembalikan `false`, mencegah hasil truthy yang tidak
  disengaja pada input yang tidak valid.
- Berfungsi baik sebagai pemeriksaan prasyarat sebelum memproses data yang harus sepenuhnya `null`.

## Penggunaan

### Sintaks

Fungsi:

- `areNull(array)`

Parameter:

- `array`: Array input yang akan diperiksa apakah elemennya `null`.

### Impor fungsi lokal

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // benar
const allNullB = areNull(b); // salah

const notAnArray = areNull(123 as unknown as unknown[]); // salah
const empty = areNull([]); // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areNull(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areNull](../_analysis/areNull.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 15.43.36 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>