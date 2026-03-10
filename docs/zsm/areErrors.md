# areErrors

## Penerangan

Memeriksa sama ada tatasusunan tidak kosong dan hanya mengandungi objek `Error`, mengembalikan `true` atau `false`.

### Kes penggunaan

Sahkan bahawa `unknown[]` yang dibekalkan pada masa jalan (cth., kegagalan terkumpul, keputusan pengesahan, atau data
yang dinyahserial) ialah senarai objek `Error` yang tidak kosong sebelum mengulangi, mengelog, atau membaling semula.

> **Nota untuk pengguna TypeScript:**
>
> `areErrors` mengembalikan `true` hanya untuk tatasusunan yang berisi di mana setiap item ialah `Error`; ia
> mengembalikan `false` untuk tatasusunan kosong atau jika mana-mana elemen bukan `Error`.

### Kelebihan

- Memastikan setiap elemen ialah instans `Error`, membolehkan pengendalian ralat dan pengelogan yang selamat.
- Menolak tatasusunan kosong, menghalang keadaan “tiada ralat” yang tidak sengaja daripada dianggap sebagai senarai
  ralat yang sah.
- Berfungsi dengan baik sebagai pengawal masa jalan apabila berurusan dengan input `unknown[]` (cth., daripada API atau
  blok `catch`).

## Penggunaan

### Sintaks

Fungsi:

- `areErrors(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa bagi objek `Error`.

### Import fungsi tempatan

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value ialah tatasusunan tidak kosong bagi objek Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areErrors(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 12:36:28 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>