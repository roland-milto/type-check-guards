# arePrimitives

## Deskripsi

`arePrimitives` mengevaluasi apakah semua elemen dalam array yang diberikan dan tidak kosong adalah tipe primitif.

### Kasus penggunaan

Validasi bahwa data masuk (mis., parameter kueri, nilai baris CSV, atau daftar ID/tag) hanya berisi nilai primitif
sebelum diserialisasi, di-hash, dicatat (logging), atau diteruskan ke API yang tidak boleh menerima objek.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `arePrimitives` ketika Anda perlu memastikan sebuah `unknown[]` hanya berisi nilai primitif (string, number,
> bigint, boolean, symbol, undefined, atau null) sebelum pemrosesan lebih lanjut.

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah nilai primitif, sehingga menjadi penjaga ketat untuk array
  “tanpa objek/fungsi”.
- Gagal cepat: mengembalikan `false` segera setelah elemen non-primitif ditemukan.
- Juga mengembalikan `false` untuk non-array dan array kosong (melalui pemeriksaan array-terisi), mencegah penerimaan
  tidak sengaja atas input yang tidak valid.

## Penggunaan

### Sintaks

Fungsi:

- `arePrimitives(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah elemennya bertipe primitif.

### Impor fungsi lokal

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // benar
const r2 = arePrimitives(b); // benar
const r3 = arePrimitives(c); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.arePrimitives(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.04.56 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>