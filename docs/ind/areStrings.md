# areStrings

## Deskripsi

`areStrings` memeriksa apakah sebuah array tidak kosong dan semua elemennya adalah string, mengembalikan `true` hanya
dalam kasus tersebut.

### Kasus penggunaan

Memvalidasi data eksternal atau yang disediakan pengguna (mis., parameter kueri, payload JSON, kolom CSV) untuk
memastikan Anda memiliki daftar string yang tidak kosong sebelum diproses.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areStrings` untuk memvalidasi array yang tidak diketahui sebelum menerapkan logika khusus string; fungsi ini
> mengembalikan `false` untuk array kosong.

### Keunggulan

- Memastikan setiap elemen adalah string dan menolak array dengan tipe campuran dengan mengembalikan `false`.
- Menolak array kosong, sehingga `true` hanya menunjukkan daftar string yang tidak kosong.
- Berguna sebagai penjaga runtime cepat sebelum melakukan operasi khusus string (mis., `trim`, `toLowerCase`).

## Penggunaan

### Sintaks

Fungsi:

- `areStrings(value)`

Parameter:

- `value`: Expected type `string[]`.

### Impor fungsi lokal

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input adalah string[] yang tidak kosong saat runtime
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areStrings(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.18.35 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>