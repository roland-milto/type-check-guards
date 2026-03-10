# areSets

## Deskripsi

Memeriksa apakah sebuah array tidak kosong yang diberikan hanya berisi instance `Set`, mengembalikan `true` jika ya dan
`false` jika tidak.

### Kasus penggunaan

Memvalidasi bahwa sebuah nilai (misalnya, dari input pengguna, parsing JSON, atau API eksternal) adalah array tidak
kosong dari objek `Set` sebelum memproses setiap set.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areSets` untuk memvalidasi input yang tidak diketahui sebelum melakukan iterasi dan memanggil API `Set` (
> misalnya, `.size`, `.has`, `.add`) pada setiap elemen.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang tidak kosong dan setiap elemennya merupakan instance `Set`.
- Mencegah positif palsu untuk array kosong dengan mengembalikan `false` ketika array tidak memiliki elemen.
- Berguna sebagai penjaga runtime sebelum melakukan operasi khusus `Set` pada setiap elemen.

## Penggunaan

### Sintaks

Fungsi:

- `areSets(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk instance `Set`.

### Impor fungsi lokal

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a adalah sebuah array dari instance Set saat runtime
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // salah
console.log(areSets(c)); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areSets(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areSets](../_analysis/areSets.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.13.47 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>