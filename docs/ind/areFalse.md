# areFalse

## Deskripsi

`areFalse` memeriksa apakah semua elemen dalam array yang diberikan benar-benar boolean `false`.

### Kasus penggunaan

Memvalidasi bahwa daftar feature flag, pemeriksaan, atau hasil guard semuanya `false` sebelum melanjutkan (misalnya,
memastikan tidak ada kondisi yang menghambat).

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areFalse` ketika Anda memerlukan validasi ketat bahwa sebuah array tidak kosong dan hanya berisi nilai
> boolean `false`.

### Keunggulan

- Memastikan setiap elemen benar-benar `false` (tanpa koersi truthy/falsey).
- Mengembalikan `false` untuk non-array atau array kosong dengan mensyaratkan array terisi melalui `isFilledArray`.
- Berhenti lebih awal pada elemen pertama yang bukan `false` demi efisiensi.

## Penggunaan

### Sintaks

Fungsi:

- `areFalse(array)`

Parameter:

- `array`: Array yang akan diperiksa, berisi elemen dengan tipe apa pun.

### Impor fungsi lokal

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // benar
const b = areFalse([false, true, false]);  // salah
const c = areFalse([false, "false", false]); // salah
const d = areFalse([]); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areFalse(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 16.17.18 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>