# areBuffers

## Deskripsi

`areBuffers` memeriksa apakah nilai yang diberikan adalah array yang tidak kosong dan terisi, di mana setiap elemennya
adalah `Buffer`, mengembalikan `true` jika demikian dan `false` jika tidak.

### Kasus penggunaan

Memvalidasi array chunk yang masuk (misalnya dari stream, unggahan file, atau paket jaringan) untuk memastikan semua
bagiannya adalah instance `Buffer` sebelum menggabungkan, mendekode, atau meneruskannya ke fungsi kriptografi atau
pemrosesan biner.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areBuffers` untuk memvalidasi `unknown[]` sebelum memanggil API khusus Buffer seperti `Buffer.concat`,
> memastikan fungsi mengembalikan `true` hanya ketika setiap elemen adalah `Buffer`.

### Keunggulan

- Memastikan setiap elemen dalam input adalah instance `Buffer` Node.js, mengembalikan `true` hanya ketika seluruh array
  cocok.
- Menolak input yang tidak valid lebih awal dengan mensyaratkan array yang tidak kosong dan terisi; mengembalikan
  `false` untuk array kosong atau yang bukan array.
- Berguna sebagai guard sebelum melakukan operasi khusus buffer (misalnya penggabungan, hashing, protokol biner).

## Penggunaan

### Sintaks

Fungsi:

- `areBuffers(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk instance buffer.

### Impor fungsi lokal

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areBuffers(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 16.25.36 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>