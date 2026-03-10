# areNumerics

## Deskripsi

`areNumerics` memeriksa apakah suatu nilai adalah array yang tidak kosong di mana semua elemennya numerik.

### Kasus penggunaan

Gunakan `areNumerics` untuk memvalidasi data eksternal atau tanpa tipe (misalnya payload JSON, parameter kueri, input
formulir) sebelum menghitung jumlah, rata-rata, atau operasi numerik lainnya, memastikan input adalah array numerik yang
tidak kosong dan mengembalikan `false` jika tidak.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areNumerics` untuk menjaga input `unknown` sebelum memperlakukannya sebagai array numerik; fungsi ini
> mengembalikan `false` untuk non-array dan array kosong.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang tidak kosong dan setiap elemennya bersifat numerik.
- Gagal cepat: berhenti memeriksa segera setelah elemen non-numerik ditemukan, lalu mengembalikan `false`.
- Membantu memvalidasi input yang tidak diketahui dengan aman sebelum melakukan operasi numerik.

## Penggunaan

### Sintaks

Fungsi:

- `areNumerics(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah berisi elemen numerik.

### Impor fungsi lokal

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // benar
console.log(areNumerics(b)); // benar
console.log(areNumerics(c)); // salah
console.log(areNumerics(d)); // salah
console.log(areNumerics(e)); // salah

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areNumerics(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 16.05.31 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>