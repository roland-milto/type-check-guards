# areObjects

## Deskripsi

`areObjects` memeriksa apakah array terisi yang diberikan hanya berisi objek.

### Kasus penggunaan

Gunakan `areObjects` ketika Anda menerima array yang tidak diketahui (misalnya, dari parsing JSON atau API eksternal)
dan perlu memastikan bahwa array tersebut tidak kosong serta setiap elemennya adalah objek sebelum melakukan iterasi dan
mengakses properti objek.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areObjects` untuk memvalidasi `unknown[]` sebelum memperlakukan item sebagai objek; fungsi ini mengembalikan
`false` untuk array kosong.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang terisi dan setiap elemennya adalah objek.
- Berhenti lebih awal dan mengembalikan `false` segera setelah elemen yang bukan objek ditemukan.
- Membantu memvalidasi input yang tidak diketahui sebelum melakukan operasi khusus objek.

## Penggunaan

### Sintaks

Fungsi:

- `areObjects(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah berisi elemen-elemen objek.

### Impor fungsi lokal

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value adalah array objek yang terisi
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areObjects(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.09.00 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>