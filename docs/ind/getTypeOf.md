# getTypeOf

## Deskripsi

`getTypeOf` mengembalikan label tipe yang rinci dan mudah dibaca manusia untuk suatu nilai, termasuk tipe numerik yang
diperhalus dan jenis objek yang spesifik.

### Kasus penggunaan

Gunakan `getTypeOf` untuk menormalkan deteksi tipe dalam validasi input dan diagnostik—misalnya, untuk menolak `nan`,
menerima hanya ID `integer`, memperlakukan string numerik seperti `decimal` secara berbeda dari `string` biasa, atau
untuk mencatat jenis objek yang presisi seperti `date` dan `regexp`.

> **Catatan untuk pengguna TypeScript:**
>
> Tipe nilai balik adalah `DataTypeAsString | string`. Perlakukan ini sebagai label deskriptif; bandingkan dengan
> literal yang dikenal seperti `integer`, `float`, `nan`, `array`, `null`, dan `undefined` saat melakukan percabangan.

### Keunggulan

- Mengembalikan string tipe yang lebih rinci daripada `typeof` milik JavaScript, termasuk subtipe numerik seperti
  `integer`, `float`, dan `nan`.
- Membedakan `null` dan `undefined` secara eksplisit sebagai `null` dan `undefined`.
- Mendeteksi format string numerik yang umum dan melaporkannya sebagai `binary`, `octal`, `decimal`, atau `hexadecimal`
  alih-alih sekadar `string`.
- Mengidentifikasi array sebagai `array` dan menggunakan `Object.prototype.toString` untuk menyediakan nama tipe objek
  yang spesifik (misalnya, `date`, `regexp`, `map`, `set`).
- Berguna untuk validasi, logging, dan debugging ketika label tipe yang konsisten dan mudah dibaca manusia diperlukan.

## Penggunaan

### Sintaks

Fungsi:

- `getTypeOf(value)`

Parameter:

- `value`: Nilai yang tipe datanya akan ditentukan.

### Impor fungsi lokal

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Contoh pemeriksaan
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.getTypeOf(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 13.06.57 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>