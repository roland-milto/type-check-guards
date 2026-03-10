# arePrimitives

## Penerangan

`arePrimitives` menilai sama ada semua elemen dalam tatasusunan yang dibekalkan dan tidak kosong ialah jenis primitif.

### Kes penggunaan

Sahkan bahawa data masuk (cth., parameter pertanyaan, nilai baris CSV, atau senarai ID/tag) hanya mengandungi nilai
primitif sebelum disirikan, dihash, dilog, atau dihantar ke API yang tidak boleh menerima objek.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `arePrimitives` apabila anda perlu memastikan `unknown[]` hanya mengandungi nilai primitif (string, number,
> bigint, boolean, symbol, undefined, atau null) sebelum pemprosesan lanjut.

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen ialah nilai primitif, menjadikannya pengawal ketat untuk tatasusunan
  “tiada objek/fungsi”.
- Gagal dengan pantas: mengembalikan `false` sebaik sahaja elemen bukan primitif ditemui.
- Juga mengembalikan `false` untuk bukan tatasusunan dan tatasusunan kosong (melalui semakan tatasusunan berisi), sekali
  gus mengelakkan penerimaan input tidak sah secara tidak sengaja.

## Penggunaan

### Sintaks

Fungsi:

- `arePrimitives(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa sama ada elemennya bertipe primitif.

### Import fungsi tempatan

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // benar
const r2 = arePrimitives(b); // benar
const r3 = arePrimitives(c); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.arePrimitives(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 00:07:30 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>