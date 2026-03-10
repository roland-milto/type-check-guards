# isFalse

## Deskripsi

`isFalse` memeriksa apakah suatu nilai yang diberikan benar-benar sama secara ketat dengan literal boolean `false`.

### Kasus penggunaan

Memvalidasi data yang tidak diketahui (misalnya dari JSON, parameter kueri, atau input pengguna) ketika hanya nilai
boolean eksplisit `false` yang harus dianggap sebagai flag yang valid, dan semua yang lain harus ditolak.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isFalse` ketika Anda perlu menerima hanya literal `false` dan menolak semua nilai falsy lainnya; fungsi ini
> mengembalikan `true` hanya untuk `value === false`.

### Keunggulan

- Memberikan pemeriksaan ketat untuk literal boolean `false` tanpa koersi.
- Membantu membedakan `false` dari nilai falsy lain seperti `0`, `""`, `null`, dan `undefined`.
- Meningkatkan keterbacaan dengan membuat maksud menjadi eksplisit saat memvalidasi input yang tidak diketahui.

## Penggunaan

### Sintaks

Fungsi:

- `isFalse(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input tepat bernilai false di sini
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isFalse(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 16.21.55 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>