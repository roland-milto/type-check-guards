# isFloat

## Deskripsi

`isFloat` menentukan apakah `value` yang diberikan adalah bilangan floating-point hingga (sebuah `number` yang bukan
bilangan bulat).

### Kasus penggunaan

Memvalidasi input numerik yang diberikan pengguna ketika nilai pecahan diperlukan (misalnya harga, pengukuran, tarif)
dan menolak bilangan bulat, `NaN`, dan nilai tak hingga.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isFloat` ketika Anda perlu menerima hanya input numerik hingga yang bukan bilangan bulat; fungsi ini menolak
> bilangan bulat dan angka yang tidak hingga.

### Keunggulan

- Mengembalikan `true` hanya untuk angka hingga yang bukan bilangan bulat (mengecualikan bilangan bulat, `NaN`,
  `Infinity`, dan `-Infinity`).
- Berfungsi dengan tipe input apa pun (`unknown`) dan mempersempit tipe dengan aman dengan memeriksa
  `typeof value === "number"`.
- Menggunakan penjaga numerik bawaan (`Number.isInteger`, `Number.isFinite`) untuk perilaku yang dapat diprediksi.

## Penggunaan

### Sintaks

Fungsi:

- `isFloat(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah merupakan bilangan floating-point.

### Impor fungsi lokal

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // nilai adalah angka saat runtime; nilainya terbatas dan bukan bilangan bulat
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isFloat(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 16.08.03 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>