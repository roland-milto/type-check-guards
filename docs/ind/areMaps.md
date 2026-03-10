# areMaps

## Deskripsi

`areMaps` menentukan apakah sebuah array yang diberikan tidak kosong dan semua elemennya adalah instance `Map`.

### Kasus penggunaan

Memvalidasi input yang tidak diketahui (mis., dari parsing JSON, API eksternal, atau sumber dinamis) sebelum
memperlakukannya sebagai daftar tidak kosong dari objek `Map`.

> **Catatan untuk pengguna TypeScript:**
>
> Mengembalikan `false` untuk array kosong; hanya mengembalikan `true` ketika array terisi dan setiap elemen adalah
`Map`.

### Keunggulan

- Memastikan setiap elemen adalah instance `Map`, mengembalikan `true` hanya ketika seluruh array lolos pemeriksaan.
- Menolak array kosong secara desain, mencegah penerimaan tidak sengaja atas “tanpa data” sebagai input yang valid.
- Berguna sebagai penjaga sebelum melakukan operasi khusus `Map` (mis., `.get()`, `.set()`, iterasi) di seluruh koleksi.

## Penggunaan

### Sintaks

Fungsi:

- `areMaps(array)`

Parameter:

- `array`: Array yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items dijamin merupakan array tidak kosong dari instance Map saat runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // bernilai false untuk: array kosong, atau array yang berisi nilai apa pun yang bukan Map
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areMaps(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 16.12.51 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>