# areNumbers

## Deskripsi

`areNumbers` memeriksa apakah suatu nilai adalah array yang tidak kosong di mana semua elemennya adalah angka.

### Kasus penggunaan

Validasi data yang diberikan pengguna atau API untuk memastikan bahwa data tersebut adalah array angka yang tidak kosong
sebelum menghitung total, rata-rata, atau agregasi numerik lainnya.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areNumbers` untuk memvalidasi array yang tidak diketahui sebelum melakukan perhitungan numerik; fungsi ini
> mengembalikan `false` untuk array kosong dan untuk array yang berisi nilai non-angka apa pun.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang tidak kosong dan setiap elemennya adalah angka.
- Mencegah positif palsu dengan menolak array kosong dan input yang bukan array.
- Berguna sebagai guard sebelum operasi numerik (misalnya penjumlahan, perataan) untuk menghindari kesalahan saat
  runtime.

## Penggunaan

### Sintaks

Fungsi:

- `areNumbers(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah berisi elemen angka.

### Impor fungsi lokal

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areNumbers(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.04.34 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>