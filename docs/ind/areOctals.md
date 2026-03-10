# areOctals

## Deskripsi

`areOctals` menentukan apakah nilai yang diberikan adalah array tidak kosong berisi string oktal yang valid.

### Kasus penggunaan

Gunakan `areOctals` saat memvalidasi input pengguna, nilai konfigurasi, atau payload API yang harus berisi literal
oktal (mis., mode izin file seperti `0o755`) dan Anda ingin menolak array kosong atau entri tidak valid apa pun dengan
mengembalikan `false`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areOctals` untuk memastikan Anda memiliki `unknown[]` yang tidak kosong di mana setiap entri adalah string
> oktal yang valid sebelum mengonversi (mis., melalui `Number(...)` atau parsing kustom).

### Keunggulan

- Memvalidasi bahwa sebuah nilai adalah array yang tidak kosong di mana setiap elemennya adalah string oktal,
  mengembalikan `true` hanya ketika semua item lolos.
- Gagal cepat: mengembalikan `false` segera setelah elemen non-oktal ditemukan.
- Berguna sebagai guard sebelum melakukan parsing atau mengonversi string oktal untuk menghindari error runtime dan
  penanganan input yang tidak konsisten.

## Penggunaan

### Sintaks

Fungsi:

- `areOctals(array)`

Parameter:

- `array`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value adalah array tidak kosong dari string oktal
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areOctals(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.56.24 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>