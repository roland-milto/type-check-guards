# isBinary

## Deskripsi

`isBinary` menentukan apakah suatu nilai adalah string biner (opsional diawali dengan `0b`/`0B`) dan mengembalikan
`true` atau `false`.

### Kasus penggunaan

Validasi string yang diberikan pengguna (misalnya field formulir, argumen CLI, nilai konfigurasi) untuk memastikan
string tersebut hanya merepresentasikan digit biner, opsional dengan awalan `0b`/`0B`, sebelum pemrosesan lebih lanjut.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isBinary` sebagai type guard sebelum mengurai atau mengonversi string menjadi `BigInt`/`Number` untuk
> menghindari input yang tidak valid.

### Keunggulan

- Menerima string biner dengan atau tanpa awalan `0b`/`0B`.
- Menolak string kosong dan string dengan spasi di awal/akhir (ASCII ≤ 32).
- Mengembalikan `true`/`false` tanpa melempar error, sehingga aman untuk input yang tidak diketahui.

## Penggunaan

### Sintaks

Fungsi:

- `isBinary(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // benar
const b = isBinary("1010");   // benar
const c = isBinary("0b1020"); // salah
const d = isBinary(0b1010);     // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isBinary(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.10.06 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>