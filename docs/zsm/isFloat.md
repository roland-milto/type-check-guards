# isFloat

## Penerangan

`isFloat` menentukan sama ada `value` yang diberikan ialah nombor titik apungan terhingga (sebuah `number` yang bukan
integer).

### Kes penggunaan

Sahkan input numerik yang diberikan pengguna apabila nilai pecahan diperlukan (contohnya, harga, ukuran, kadar) dan
tolak integer, `NaN`, serta infiniti.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isFloat` apabila anda perlu menerima hanya input numerik terhingga yang bukan integer; ia menolak integer dan
> nombor yang tidak terhingga.

### Kelebihan

- Mengembalikan `true` hanya untuk nombor terhingga yang bukan integer (mengecualikan integer, `NaN`, `Infinity`, dan
  `-Infinity`).
- Berfungsi dengan sebarang jenis input (`unknown`) dan mengecilkan jenis dengan selamat dengan menyemak
  `typeof value === "number"`.
- Menggunakan pengawal numerik terbina dalam (`Number.isInteger`, `Number.isFinite`) untuk tingkah laku yang boleh
  diramal.

## Penggunaan

### Sintaks

Fungsi:

- `isFloat(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa sama ada ia ialah nombor titik apungan.

### Import fungsi tempatan

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // nilai ialah nombor semasa masa jalan; ia terhingga dan bukan integer
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isFloat(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 16:10:41 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>