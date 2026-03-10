# isFilledArray

## Deskripsi

Memeriksa apakah `value` adalah sebuah array dengan setidaknya satu elemen, mengembalikan `true` atau `false`.

### Kasus penggunaan

Gunakan `isFilledArray` untuk memvalidasi data masuk (misalnya payload API, nilai formulir, konfigurasi) sebelum
melakukan iterasi, mengakses elemen pertama, atau menerapkan logika yang memerlukan setidaknya satu item.

> **Catatan untuk pengguna TypeScript:**
>
> `isFilledArray` adalah guard runtime yang mengembalikan boolean; ini tidak mempersempit tipe elemen lebih jauh selain
> mengonfirmasi bahwa array tidak kosong.

### Keunggulan

- Pemeriksaan sederhana dan cepat untuk array yang tidak kosong menggunakan `Array.isArray` dan pemeriksaan panjang (
  length).
- Membantu menghindari kesalahan runtime ketika kode mengasumsikan sebuah array memiliki setidaknya satu elemen.
- Hasil boolean yang jelas: mengembalikan `true` untuk array yang tidak kosong dan `false` untuk selain itu.

## Penggunaan

### Sintaks

Fungsi:

- `isFilledArray(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah merupakan array yang tidak kosong.

### Impor fungsi lokal

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input adalah array yang tidak kosong saat runtime
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isFilledArray(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 11.47.26 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>