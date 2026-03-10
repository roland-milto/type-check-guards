# areDates

## Penerangan

`areDates` menentukan sama ada sesuatu tatasusunan diisi dan hanya mengandungi objek `Date`, mengembalikan `true` hanya
apabila semua elemen ialah tarikh yang sah.

### Kes penggunaan

Gunakan `areDates` untuk mengesahkan input yang tidak diketahui (cth., JSON yang dihuraikan, data borang, muatan API)
sebelum menjalankan logik khusus tarikh seperti mengisih mengikut masa, memformat, atau mengira julat.

> **Nota untuk pengguna TypeScript:**
>
> Mengembalikan `true` hanya untuk tatasusunan tidak kosong yang setiap elemennya ialah `Date`; tatasusunan kosong
> menghasilkan `false`.

### Kelebihan

- Memastikan tatasusunan tidak kosong sebelum mengesahkan kandungannya, mengelakkan `true` untuk input kosong.
- Mengesahkan setiap elemen ialah instans `Date`, dan mengembalikan `false` serta-merta pada ketidakpadanan pertama.
- Berguna sebagai semakan gaya pengawal sebelum melakukan operasi khusus tarikh pada item tatasusunan.

## Penggunaan

### Sintaks

Fungsi:

- `areDates(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa untuk objek `Date`.

### Import fungsi tempatan

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // benar
console.log(areDates(b)); // palsu
console.log(areDates(c)); // palsu

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areDates(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areDates](../_analysis/areDates.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 15:33:12 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>