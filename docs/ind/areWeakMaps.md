# areWeakMaps

## Deskripsi

`areWeakMaps` memeriksa apakah sebuah nilai adalah array tidak kosong di mana setiap elemennya adalah `WeakMap`,
mengembalikan `true` hanya dalam kasus tersebut dan `false` jika tidak.

### Kasus penggunaan

Memvalidasi data runtime (misalnya JSON yang di-parse, input plugin, atau konfigurasi yang bertipe longgar) untuk
memastikan bahwa itu adalah array tidak kosong berisi instance `WeakMap` sebelum melakukan iterasi dan memanggil metode
`WeakMap`; mengembalikan `false` ketika ada elemen yang bukan `WeakMap` atau ketika array kosong.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areWeakMaps` untuk memvalidasi input yang tidak diketahui sebelum memperlakukannya sebagai `WeakMap[]` yang
> tidak kosong; fungsi ini mengembalikan `false` untuk array kosong.

### Keunggulan

- Memastikan setiap elemen dalam array yang diberikan adalah sebuah instance `WeakMap`.
- Mengembalikan `false` untuk array kosong, mencegah penerimaan tidak sengaja atas “tanpa data” sebagai input yang
  valid.
- Berguna sebagai guard sebelum melakukan operasi khusus `WeakMap` pada semua item.

## Penggunaan

### Sintaks

Fungsi:

- `areWeakMaps(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk instance `WeakMap`.

### Impor fungsi lokal

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list adalah array tidak kosong dari instance WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // bukan WeakMap[] yang tidak kosong
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areWeakMaps(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.37.35 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>