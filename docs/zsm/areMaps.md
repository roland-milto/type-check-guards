# areMaps

## Penerangan

`areMaps` menentukan sama ada tatasusunan yang diberikan tidak kosong dan semua elemennya ialah instans `Map`.

### Kes penggunaan

Sahkan input yang tidak diketahui (cth., daripada penguraian JSON, API luaran, atau sumber dinamik) sebelum
menganggapnya sebagai senarai tidak kosong objek `Map`.

> **Nota untuk pengguna TypeScript:**
>
> Mengembalikan `false` untuk tatasusunan kosong; ia hanya mengembalikan `true` apabila tatasusunan berisi dan setiap
> elemen ialah `Map`.

### Kelebihan

- Memastikan setiap elemen ialah instans `Map`, mengembalikan `true` hanya apabila keseluruhan tatasusunan lulus
  semakan.
- Menolak tatasusunan kosong secara reka bentuk, mengelakkan penerimaan tidak sengaja “tiada data” sebagai input yang
  sah.
- Berguna sebagai pengawal sebelum melakukan operasi khusus `Map` (cth., `.get()`, `.set()`, lelaran) merentas koleksi.

## Penggunaan

### Sintaks

Fungsi:

- `areMaps(array)`

Parameter:

- `array`: Tatasusunan untuk disemak.

### Import fungsi tempatan

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items dijamin sebagai tatasusunan tidak kosong bagi instans Map pada masa jalan
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // palsu untuk: tatasusunan kosong, atau tatasusunan yang mengandungi sebarang nilai bukan Map
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areMaps(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 16:15:31 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>