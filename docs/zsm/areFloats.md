# areFloats

## Penerangan

`areFloats` menyemak sama ada tatasusunan yang diberikan terisi dan semua elemennya ialah float.

### Kes penggunaan

Gunakan `areFloats` apabila anda menerima `unknown[]` (cth., daripada JSON, parameter kueri, atau API luaran) dan anda
perlu memastikan ia ialah tatasusunan yang terisi di mana setiap item ialah float sebelum menjalankan logik berangka
seperti purata, interpolasi, atau pengiraan statistik.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areFloats` untuk mengawal `unknown[]` sebelum menganggapnya sebagai `number[]` yang mengandungi hanya float;
> ia mengembalikan `false` untuk tatasusunan kosong dan untuk sebarang elemen yang bukan float.

### Kelebihan

- Mengembalikan `true` hanya apabila input ialah tatasusunan yang tidak kosong dan setiap elemennya ialah nombor
  apungan (float).
- Gagal dengan pantas: mengembalikan `false` sebaik sahaja elemen yang bukan float ditemui.
- Membantu mengesahkan input yang tidak diketahui sebelum melakukan pengiraan khusus float.

## Penggunaan

### Sintaks

Fungsi:

- `areFloats(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa sama ada mengandungi elemen float.

### Import fungsi tempatan

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // benar
console.log(areFloats(b)); // palsu
console.log(areFloats(c)); // palsu

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areFloats(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 16:00:44 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>