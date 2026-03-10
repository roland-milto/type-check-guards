# isIndexFound

## Penerangan

`isIndexFound` menentukan sama ada nilai yang diberikan ialah integer bukan negatif, menandakan bahawa indeks telah
ditemui.

### Kes penggunaan

Sahkan bahawa hasil carian mewakili indeks yang boleh digunakan (integer `>= 0`) sebelum mengindeks ke dalam tatasusunan
atau rentetan, sekali gus mengelakkan penggunaan `-1` atau nilai bukan numerik secara tidak sengaja.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isIndexFound` selepas operasi seperti `indexOf`, `findIndex`, atau carian tersuai di mana `-1` (atau nilai
> tidak sah lain) boleh menandakan “tidak ditemui”. Apabila ia memulangkan `true`, nilai tersebut ialah nombor dan
> selamat
> digunakan sebagai indeks tatasusunan/rentetan.

### Kelebihan

- Menyediakan pengawal jenis yang ringkas untuk mengesan sama ada indeks ditemui dengan menyemak integer bukan negatif.
- Mengembalikan `true` hanya untuk nilai yang sah seperti indeks (integer `>= 0`), menolak nilai negatif, bukan integer,
  dan bukan nombor.
- Membantu mengelakkan ralat off-by-one dan kesilapan nilai sentinel apabila bekerja dengan API yang memulangkan `-1`
  untuk “tidak ditemui”.

## Penggunaan

### Sintaks

Fungsi:

- `isIndexFound(value)`

Parameter:

- `value`: Nilai untuk diperiksa sama ada ia integer bukan negatif.

### Import fungsi tempatan

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx ialah nombor di sini dan adalah >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Penggunaan biasa dengan indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isIndexFound(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 00:48:45 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>