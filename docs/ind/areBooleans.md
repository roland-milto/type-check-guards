# areBooleans

## Deskripsi

`areBooleans` memeriksa apakah sebuah array tidak kosong yang diberikan hanya berisi nilai boolean, mengembalikan `true`
jika ya dan `false` jika tidak.

### Kasus penggunaan

Validasi data yang disediakan pengguna atau data eksternal (mis., payload JSON, parameter kueri, array konfigurasi)
untuk memastikan daftar yang tidak kosong hanya berisi boolean sebelum menerapkan logika boolean atau meneruskannya ke
API yang mengharapkan `boolean[]`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areBooleans` untuk memvalidasi `unknown[]` sebelum memperlakukannya sebagai `boolean[]`; fungsi ini
> mengembalikan `false` untuk array kosong, jadi tangani kasus tersebut secara eksplisit jika daftar kosong seharusnya
> diizinkan.

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah boolean dan input berupa array yang tidak kosong.
- Mencegah positif palsu dengan menolak array kosong (mengembalikan `false`).
- Berfungsi baik sebagai penjaga runtime sebelum operasi khusus boolean (mis., `every`, `some`, reduksi logis).

## Penggunaan

### Sintaks

Fungsi:

- `areBooleans(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah berisi elemen boolean.

### Impor fungsi lokal

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areBooleans(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.40.37 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>