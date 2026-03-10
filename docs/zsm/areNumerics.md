# areNumerics

## Penerangan

`areNumerics` menyemak sama ada sesuatu nilai ialah tatasusunan yang tidak kosong di mana semua elemen adalah numerik.

### Kes penggunaan

Gunakan `areNumerics` untuk mengesahkan data luaran atau data tanpa jenis (contohnya, payload JSON, parameter kueri,
input borang) sebelum mengira jumlah, purata, atau operasi numerik lain, memastikan input ialah tatasusunan numerik yang
tidak kosong dan mengembalikan `false` jika sebaliknya.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areNumerics` untuk mengawal input `unknown` sebelum menganggapnya sebagai tatasusunan numerik; ia
> mengembalikan `false` untuk bukan tatasusunan dan tatasusunan kosong.

### Kelebihan

- Mengembalikan `true` hanya apabila input ialah tatasusunan yang tidak kosong dan setiap elemen adalah numerik.
- Gagal dengan pantas: berhenti menyemak sebaik sahaja elemen bukan numerik ditemui, lalu mengembalikan `false`.
- Membantu mengesahkan input yang tidak diketahui dengan selamat sebelum melakukan operasi numerik.

## Penggunaan

### Sintaks

Fungsi:

- `areNumerics(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa bagi elemen numerik.

### Import fungsi tempatan

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // benar
console.log(areNumerics(b)); // benar
console.log(areNumerics(c)); // palsu
console.log(areNumerics(d)); // palsu
console.log(areNumerics(e)); // palsu

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areNumerics(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 16:08:35 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>