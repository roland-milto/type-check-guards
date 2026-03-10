# isNumber

## Deskripsi

`isNumber` memeriksa apakah sebuah nilai adalah angka yang berhingga dan bukan `NaN`.

### Kasus penggunaan

Validasi input numerik dari sumber yang tidak tepercaya (formulir, parameter kueri, payload JSON) sebelum perhitungan,
penyimpanan, atau pemeriksaan rentang, memastikan hanya angka berhingga yang lolos (`true`) dan semua yang lain
mengembalikan `false`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isNumber` untuk memvalidasi nilai `unknown` sebelum melakukan aritmetika; fungsi ini menolak `NaN`,
`Infinity`, dan `-Infinity`.

### Keunggulan

- Mengembalikan `true` hanya untuk angka JavaScript yang benar-benar valid (pemeriksaan tipe ditambah penolakan `NaN`
  dan infinity).
- Mencegah bug validasi umum ketika `NaN`, `Infinity`, atau `-Infinity` tidak sengaja lolos sebagai angka.
- Berfungsi baik sebagai guard runtime untuk input yang tidak diketahui (misalnya JSON, input pengguna, API eksternal).
- Sederhana, cepat, dan bebas efek samping.

## Penggunaan

### Sintaks

Fungsi:

- `isNumber(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input adalah angka hingga yang valid
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isNumber(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.09.21 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>