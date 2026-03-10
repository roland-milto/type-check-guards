# isFinite

## Penerangan

Menentukan sama ada `value` yang diberikan ialah `number` yang terhingga.

### Kes penggunaan

Gunakan `isFinite` untuk mengesahkan input yang tidak diketahui (cth., daripada JSON, borang, atau API) sebelum
melakukan pengiraan berangka, memastikan nilainya ialah nombor sebenar yang terhingga.

> **Nota untuk pengguna TypeScript:**
>
> `isFinite` mengembalikan `true` hanya untuk nombor terhingga; ia mengembalikan `false` untuk `NaN`, `Infinity`, dan
> sebarang nilai bukan nombor.

### Kelebihan

- Menggunakan `Number.isFinite` terbina dalam untuk semakan keterhinggaan yang boleh dipercayai.
- Mengembalikan `true` hanya untuk nombor terhingga; mengembalikan `false` untuk `NaN`, `Infinity`, dan input bukan
  nombor.
- Predikat yang ringkas dan tanpa kesan sampingan, sesuai untuk pengesahan dan logik pengawal.

## Penggunaan

### Sintaks

Fungsi:

- `isFinite(value)`

Parameter:

- `value`: Nilai untuk diperiksa sama ada terhingga.

### Import fungsi tempatan

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers ialah: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value ialah nombor terhingga di sini
  const doubled = value * 2;
  console.log(doubled);
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isFinite(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 16:32:30 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>