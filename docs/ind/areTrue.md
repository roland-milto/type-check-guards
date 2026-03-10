# areTrue

## Deskripsi

Memeriksa apakah sebuah array yang tidak kosong hanya berisi nilai boolean `true`.

### Kasus penggunaan

Gunakan `areTrue` untuk memvalidasi bahwa sekumpulan prasyarat atau feature flag semuanya aktif (semua nilainya `true`)
sebelum melanjutkan, sambil memperlakukan input yang kosong atau salah format sebagai tidak terpenuhi (`false`).

> **Catatan untuk pengguna TypeScript:**
>
> `areTrue` mengembalikan `false` untuk array kosong dan untuk array yang berisi nilai apa pun yang tidak secara ketat
`true`.

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen bernilai `true` secara ketat dan array tidak kosong.
- Gagal cepat: mengembalikan `false` segera setelah ditemukan nilai yang bukan `true`.
- Menolak input yang tidak valid (bukan array atau array kosong) dengan mengembalikan `false`.

## Penggunaan

### Sintaks

Fungsi:

- `areTrue(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk memastikan semua nilainya `true`.

### Impor fungsi lokal

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areTrue(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.51.26 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>