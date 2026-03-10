# arePromises

## Deskripsi

`arePromises` menentukan apakah semua elemen dalam sebuah array merupakan instance `Promise`.

### Kasus penggunaan

Validasi bahwa daftar yang dibangun secara dinamis atau disediakan dari luar hanya berisi promise sebelum
mengagregasikannya (misalnya, dengan `Promise.all`).

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `arePromises` untuk memvalidasi `unknown[]` sebelum memanggil `Promise.all` atau operasi lain yang hanya untuk
> promise; fungsi ini mengembalikan `false` untuk array kosong.

### Keunggulan

- Memastikan setiap elemen adalah `Promise` sebelum Anda melanjutkan dengan logika khusus promise.
- Mengembalikan `false` untuk array yang tidak terisi, mencegah hasil ambigu untuk input kosong.
- Berguna sebagai penjaga runtime saat bekerja dengan `unknown[]` dari sumber eksternal.

## Penggunaan

### Sintaks

Fungsi:

- `arePromises(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk instance Promise.

### Impor fungsi lokal

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values adalah sebuah array dari instance Promise saat runtime
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.arePromises(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.48.32 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>