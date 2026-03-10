# areWeakMaps

## Penerangan

`areWeakMaps` menyemak sama ada sesuatu nilai ialah tatasusunan bukan kosong yang setiap elemennya ialah `WeakMap`,
mengembalikan `true` hanya dalam keadaan itu dan `false` jika sebaliknya.

### Kes penggunaan

Sahkan data masa jalan (contohnya JSON yang dihuraikan, input pemalam, atau konfigurasi yang ditaip longgar) untuk
memastikan ia ialah tatasusunan bukan kosong yang mengandungi instans `WeakMap` sebelum mengiterasi dan memanggil kaedah
`WeakMap`; mengembalikan `false` apabila mana-mana elemen bukan `WeakMap` atau apabila tatasusunan kosong.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areWeakMaps` untuk mengesahkan input yang tidak diketahui sebelum menganggapnya sebagai `WeakMap[]` yang
> bukan kosong; ia mengembalikan `false` untuk tatasusunan kosong.

### Kelebihan

- Memastikan setiap elemen dalam tatasusunan yang diberikan ialah instans `WeakMap`.
- Mengembalikan `false` untuk tatasusunan kosong, mencegah penerimaan tidak sengaja “tiada data” sebagai input yang sah.
- Berguna sebagai pengawal sebelum melakukan operasi khusus `WeakMap` pada semua item.

## Penggunaan

### Sintaks

Fungsi:

- `areWeakMaps(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa bagi instans `WeakMap`.

### Import fungsi tempatan

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list ialah tatasusunan tidak kosong bagi instans WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // bukan WeakMap[] yang tidak kosong
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areWeakMaps(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:40:37 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>