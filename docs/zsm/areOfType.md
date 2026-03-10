# areOfType

## Penerangan

Memeriksa sama ada semua elemen dalam `array` yang diberikan adalah daripada `type` yang ditentukan.

### Kes penggunaan

Gunakan `areOfType` untuk mengesahkan input yang tidak diketahui (cth., JSON yang dihuraikan, muatan API, input
pengguna) sebelum melakukan operasi khusus jenis pada setiap elemen dalam sesuatu tatasusunan.

> **Nota untuk pengguna TypeScript:**
>
> Oleh sebab `areOfType` ialah pengawal jenis, TypeScript mengecilkan tatasusunan di dalam blok `if (areOfType(...)) {}`
> kepada `Array<DataTypeOf<T>>`.

### Kelebihan

- Menyediakan pengawal jenis TypeScript: apabila ia memulangkan `true`, input dikecilkan kepada `Array<DataTypeOf<T>>`.
- Mengesahkan setiap elemen terhadap jenis masa jalan yang diminta, menghalang tatasusunan jenis bercampur daripada
  lulus.
- Gagal dengan pantas: memulangkan `false` sebaik sahaja elemen yang tidak sepadan ditemui.
- Menolak bukan tatasusunan dan tatasusunan kosong secara reka bentuk (bergantung pada `isFilledArray`).

## Penggunaan

### Sintaks

Fungsi:

- `areOfType(array, type)`

Parameter:

- `array`: Tatasusunan untuk diperiksa.
- `type`: Jenis untuk diperiksa terhadap setiap elemen dalam tatasusunan.

### Import fungsi tempatan

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values kini ialah number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areOfType(array, type)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 17:12:17 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>