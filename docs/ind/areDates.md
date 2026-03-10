# areDates

## Deskripsi

`areDates` menentukan apakah sebuah array tertentu terisi dan hanya berisi objek `Date`, mengembalikan `true` hanya
ketika semua elemen adalah tanggal yang valid.

### Kasus penggunaan

Gunakan `areDates` untuk memvalidasi input yang tidak diketahui (misalnya JSON yang di-parse, data formulir, payload
API) sebelum menjalankan logika khusus tanggal seperti mengurutkan berdasarkan waktu, memformat, atau menghitung
rentang.

> **Catatan untuk pengguna TypeScript:**
>
> Mengembalikan `true` hanya untuk array yang tidak kosong dan setiap elemennya adalah `Date`; array kosong menghasilkan
`false`.

### Keunggulan

- Memastikan sebuah array tidak kosong sebelum memvalidasi isinya, sehingga mencegah hasil `true` untuk input kosong.
- Memverifikasi setiap elemen adalah instance `Date`, dan langsung mengembalikan `false` pada ketidakcocokan pertama.
- Berguna sebagai pemeriksaan bergaya guard sebelum melakukan operasi khusus tanggal pada item array.

## Penggunaan

### Sintaks

Fungsi:

- `areDates(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk objek `Date`.

### Impor fungsi lokal

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // benar
console.log(areDates(b)); // salah
console.log(areDates(c)); // salah

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areDates(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areDates](../_analysis/areDates.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 15.30.41 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>