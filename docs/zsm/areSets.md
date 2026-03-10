# areSets

## Penerangan

Memeriksa sama ada tatasusunan tidak kosong yang diberikan mengandungi hanya instans `Set`, mengembalikan `true` jika ya
dan `false` jika tidak.

### Kes penggunaan

Sahkan bahawa sesuatu nilai (cth., daripada input pengguna, penghuraian JSON, atau API luaran) ialah tatasusunan tidak
kosong bagi objek `Set` sebelum memproses setiap set.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areSets` untuk mengesahkan input yang tidak diketahui sebelum mengiterasi dan memanggil API `Set` (cth.,
`.size`, `.has`, `.add`) pada setiap elemen.

### Kelebihan

- Mengembalikan `true` hanya apabila input ialah tatasusunan tidak kosong dan setiap elemen ialah instans `Set`.
- Mencegah positif palsu untuk tatasusunan kosong dengan mengembalikan `false` apabila tatasusunan tidak mempunyai
  elemen.
- Berguna sebagai pengawal masa jalan sebelum melakukan operasi khusus `Set` pada setiap elemen.

## Penggunaan

### Sintaks

Fungsi:

- `areSets(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi instans `Set`.

### Import fungsi tempatan

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a ialah tatasusunan contoh Set pada masa jalan
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // palsu
console.log(areSets(c)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areSets(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areSets](../_analysis/areSets.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:16:16 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>