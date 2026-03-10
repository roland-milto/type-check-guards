# areIntegers

## Penerangan

`areIntegers` menentukan sama ada semua elemen dalam tatasusunan yang diberikan ialah integer, mengembalikan `true` jika
ya dan `false` jika tidak.

### Kes penggunaan

Gunakan `areIntegers` untuk mengesahkan data yang diberikan pengguna atau data luaran (cth., parameter kueri, muatan
JSON, baris CSV) apabila logik anda memerlukan senarai berisi nilai integer seperti ID, pembilang, ofset penomboran
halaman, atau indeks tatasusunan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areIntegers` sebagai pengawal masa jalan untuk input `unknown[]` sebelum menganggapnya sebagai `number[]`
> yang mengandungi integer sahaja. Jika ia mengembalikan `false`, input sama ada bukan tatasusunan berisi atau
> mengandungi
> sekurang-kurangnya satu nilai bukan integer.

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen ialah integer; jika tidak mengembalikan `false`.
- Membantu mengesahkan input yang tidak diketahui sebelum melakukan operasi yang hanya untuk integer (cth.,
  pengindeksan, kiraan, ID).
- Gagal dengan cepat: berhenti menyemak sebaik sahaja elemen bukan integer ditemui.

## Penggunaan

### Sintaks

Fungsi:

- `areIntegers(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa bagi elemen integer.

### Import fungsi tempatan

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // benar
console.log(areIntegers(b)); // benar
console.log(areIntegers(c)); // palsu

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areIntegers(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 01:08:25 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>