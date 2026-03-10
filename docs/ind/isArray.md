# isArray

## Deskripsi

`isArray` memeriksa apakah suatu nilai yang diberikan adalah array dan mengembalikan `true` jika ya, jika tidak `false`.

### Kasus penggunaan

Memvalidasi data yang tidak diketahui (misalnya, JSON yang di-parse atau respons API) untuk memastikan suatu nilai
adalah array sebelum melakukan iterasi, pengindeksan, atau mengakses `.length`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isArray` ketika Anda memerlukan pemeriksaan runtime untuk array; fungsi ini mengembalikan boolean dan aman
> dipanggil dengan nilai `unknown`.

### Keunggulan

- Menggunakan `Array.isArray` bawaan untuk deteksi array yang andal lintas realm (misalnya, iframe).
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan logika percabangan.
- Bekerja dengan tipe input apa pun karena parameternya bertipe `unknown`.

## Penggunaan

### Sintaks

Fungsi:

- `isArray(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input adalah sebuah array saat runtime
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isArray(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isArray](../_analysis/isArray.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 11.30.47 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>