# isIndexFound

## Deskripsi

`isIndexFound` menentukan apakah suatu nilai yang diberikan adalah bilangan bulat tidak negatif, yang menandakan sebuah
indeks ditemukan.

### Kasus penggunaan

Validasi bahwa hasil pencarian merepresentasikan indeks yang dapat digunakan (bilangan bulat `>= 0`) sebelum melakukan
indexing ke dalam array atau string, mencegah penggunaan `-1` atau nilai non-numerik secara tidak sengaja.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isIndexFound` setelah operasi seperti `indexOf`, `findIndex`, atau pencarian kustom ketika `-1` (atau nilai
> tidak valid lainnya) dapat menandakan “tidak ditemukan”. Saat mengembalikan `true`, nilainya adalah angka dan aman
> digunakan sebagai indeks array/string.

### Keunggulan

- Menyediakan type guard sederhana untuk mendeteksi apakah sebuah indeks ditemukan dengan memeriksa bilangan bulat tidak
  negatif.
- Mengembalikan `true` hanya untuk nilai yang valid seperti indeks (bilangan bulat `>= 0`), menolak nilai negatif, bukan
  bilangan bulat, dan bukan angka.
- Membantu menghindari kesalahan off-by-one dan kesalahan nilai sentinel saat bekerja dengan API yang mengembalikan `-1`
  untuk “tidak ditemukan”.

## Penggunaan

### Sintaks

Fungsi:

- `isIndexFound(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah merupakan bilangan bulat tidak negatif.

### Impor fungsi lokal

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx adalah angka di sini dan >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Penggunaan umum dengan indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isIndexFound(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.46.20 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>