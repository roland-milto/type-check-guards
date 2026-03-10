# areWeakSets

## Penerangan

Memeriksa sama ada input ialah tatasusunan tidak kosong di mana setiap elemen ialah `WeakSet`, dan mengembalikan `true`
hanya dalam keadaan itu.

### Kes penggunaan

Sahkan input masa jalan (cth., daripada API, konfigurasi, atau data yang dibekalkan pengguna) untuk memastikan anda
mempunyai senarai tidak kosong instans `WeakSet` sebelum meneruskan logik yang bergantung pada tingkah laku `WeakSet`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areWeakSets` untuk mengesahkan input tidak diketahui sebelum menganggapnya sebagai `WeakSet[]`. Ia
> mengembalikan `false` untuk tatasusunan kosong dan bukan tatasusunan.

### Kelebihan

- Memastikan setiap elemen dalam tatasusunan input ialah `WeakSet`.
- Mengembalikan `false` untuk tatasusunan kosong, mengelakkan keputusan “semuanya sah” secara tidak sengaja apabila data
  tiada.
- Gagal dengan selamat dengan mengembalikan `false` apabila input bukan tatasusunan yang berisi (termasuk `null`).
- Berguna sebagai pengawal sebelum melakukan operasi yang memerlukan instans `WeakSet`.

## Penggunaan

### Sintaks

Fungsi:

- `areWeakSets(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa untuk objek `WeakSet`.

### Import fungsi tempatan

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a ialah tatasusunan tidak kosong bagi instans WeakSet
}

console.log(areWeakSets(a)); // benar
console.log(areWeakSets(b)); // palsu
console.log(areWeakSets(c)); // palsu
console.log(areWeakSets(null as unknown)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areWeakSets(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:13:16 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>