# areHexadecimals

## Deskripsi

Memeriksa apakah semua elemen dalam sebuah array adalah string heksadesimal, mengembalikan `true` hanya untuk array
tidak kosong di mana setiap item valid.

### Kasus penggunaan

Gunakan `areHexadecimals` untuk memvalidasi input pengguna atau data eksternal (misalnya, ID, checksum, kode warna tanpa
awalan '#') sebelum melakukan parsing heksadesimal atau pemrosesan lebih lanjut.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areHexadecimals` untuk memvalidasi input yang tidak diketahui sebelum melakukan parsing atau mengonversi
> nilai (misalnya, sebelum `parseInt(value, 16)` atau konversi BigInt).

### Keunggulan

- Memvalidasi bahwa setiap elemen adalah string heksadesimal dan mengembalikan `true` hanya ketika semua item cocok.
- Menolak array kosong secara desain, mengembalikan `false` untuk data input yang tidak ada.
- Memberikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan validasi early-return.

## Penggunaan

### Sintaks

Fungsi:

- `areHexadecimals(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk elemen string heksadesimal.

### Impor fungsi lokal

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areHexadecimals(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.06.30 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>