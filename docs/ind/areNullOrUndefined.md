# areNullOrUndefined

## Deskripsi

Memeriksa apakah semua elemen dalam array yang diberikan adalah `null` atau `undefined`.

### Kasus penggunaan

Validasi bahwa daftar field opsional tidak berisi nilai aktual (hanya `null`/`undefined`) sebelum memutuskan untuk
melewati pemrosesan atau menampilkan status “tidak ada nilai yang diberikan”.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areNullOrUndefined` ketika Anda perlu memverifikasi bahwa sebuah array hanya berisi nilai yang hilang (
`null`/`undefined`). Perhatikan bahwa fungsi ini mengembalikan `false` untuk array kosong.

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah `null` atau `undefined`.
- Mengembalikan `false` untuk array kosong, membantu membedakan “tidak ada data” dari “semua nilai hilang”.
- Bekerja dengan `unknown[]`, sehingga aman digunakan sebelum mempersempit tipe.

## Penggunaan

### Sintaks

Fungsi:

- `areNullOrUndefined(array)`

Parameter:

- `array`: Array yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areNullOrUndefined(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.29.56 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>