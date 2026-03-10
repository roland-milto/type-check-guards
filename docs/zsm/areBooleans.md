# areBooleans

## Penerangan

`areBooleans` menyemak sama ada tatasusunan tidak kosong yang diberikan mengandungi hanya nilai boolean, mengembalikan
`true` jika ya dan `false` jika tidak.

### Kes penggunaan

Sahkan data yang dibekalkan pengguna atau data luaran (cth., muatan JSON, parameter kueri, tatasusunan konfigurasi)
untuk memastikan senarai tidak kosong mengandungi hanya boolean sebelum menggunakan logik boolean atau menghantarnya
kepada API yang menjangkakan `boolean[]`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areBooleans` untuk mengesahkan `unknown[]` sebelum menganggapnya sebagai `boolean[]`; ia mengembalikan
`false` untuk tatasusunan kosong, jadi kendalikan kes itu secara eksplisit jika senarai kosong sepatutnya dibenarkan.

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen ialah boolean dan input ialah tatasusunan yang tidak kosong.
- Mencegah positif palsu dengan menolak tatasusunan kosong (mengembalikan `false`).
- Berfungsi dengan baik sebagai pengawal masa jalan sebelum operasi khusus boolean (cth., `every`, `some`, pengurangan
  logik).

## Penggunaan

### Sintaks

Fungsi:

- `areBooleans(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi elemen boolean.

### Import fungsi tempatan

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areBooleans(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:43:24 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>