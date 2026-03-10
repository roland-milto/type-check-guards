# isInteger

## Deskripsi

Menentukan apakah `value` yang diberikan adalah angka bilangan bulat aman.

### Kasus penggunaan

Validasi input yang tidak tepercaya (mis., parameter kueri, payload JSON, variabel lingkungan) sebelum menggunakannya
sebagai bilangan bulat untuk indeks array, paginasi, penghitung, atau ID basis data.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isInteger` untuk memvalidasi input yang tidak diketahui sebelum memperlakukannya sebagai bilangan bulat
> numerik; fungsi ini mengembalikan `true` hanya untuk nilai yang memenuhi `typeof value === "number"` dan
`Number.isSafeInteger(value)`.

### Keunggulan

- Memeriksa keamanan tipe dan numerik sekaligus: mengembalikan `true` hanya ketika input adalah angka dan bilangan bulat
  aman.
- Mencegah jebakan umum pada koersi numerik: string seperti "5" dengan benar mengembalikan `false`.
- Menolak bilangan non-integer dan integer yang tidak aman, sehingga cocok untuk ID, penghitung, dan pengindeksan array.

## Penggunaan

### Sintaks

Fungsi:

- `isInteger(value)`

Parameter:

- `value`: Nilai yang akan diperiksa status bilangan bulatnya.

### Impor fungsi lokal

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // benar
const b = isInteger(-100);   // benar
const c = isInteger("5");    // salah
const d = isInteger(5.5);    // salah
const e = isInteger(null);   // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isInteger(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.50.09 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>