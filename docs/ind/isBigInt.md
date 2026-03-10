# isBigInt

## Deskripsi

`isBigInt` memeriksa apakah suatu nilai tertentu bertipe `bigint`, mengembalikan `true` untuk primitif BigInt dan
`false` jika tidak.

### Kasus penggunaan

Validasi dan persempit nilai yang berasal dari sumber tanpa tipe (mis., parsing JSON, input pengguna, API eksternal)
sebelum melakukan perhitungan khusus BigInt atau menyimpannya dalam field yang hanya menerima BigInt.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isBigInt` untuk mempersempit `unknown` menjadi `bigint` sebelum melakukan aritmetika BigInt (mis., `+`, `*`)
> yang memerlukan operand BigInt.

### Keunggulan

- Menyediakan pemeriksaan runtime yang sederhana dan andal untuk tipe primitif `bigint`.
- Membantu mempersempit nilai `unknown` sebelum melakukan operasi khusus BigInt.
- Menghindari positif palsu: angka biasa, string, dan tipe lainnya mengembalikan `false`.

## Penggunaan

### Sintaks

Fungsi:

- `isBigInt(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // benar
console.log(isBigInt(10));  // salah
console.log(isBigInt("10")); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isBigInt(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.32.03 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>