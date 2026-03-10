# isNumeric

## Penerangan

`isNumeric` menentukan sama ada `value` yang diberikan dianggap numerik dengan menyemak jenis yang telah diselesaikan
terhadap `NUMERIC_TYPES`.

### Kes penggunaan

Gunakan `isNumeric` untuk mengesahkan input (cth., payload API, nilai borang, konfigurasi) sebelum melakukan operasi
numerik, dan untuk menerima jenis yang seakan numerik (seperti `BigInt`) secara konsisten mengikut `NUMERIC_TYPES`.

> **Nota untuk pengguna TypeScript:**
>
> `isNumeric` ialah predikat yang mengembalikan boolean; anggap ia sebagai semakan masa jalan untuk sama ada sesuatu
> nilai tergolong dalam set jenis numerik yang ditakrifkan oleh pustaka.

### Kelebihan

- Menggunakan `getTypeOf` bersama `NUMERIC_TYPES` untuk memusatkan logik pengesanan numerik dan memastikan semakan
  konsisten di seluruh kod asas.
- Mengembalikan boolean ringkas (`true`/`false`) untuk percabangan yang mudah dan penggunaan gaya guard.
- Menyokong pelbagai perwakilan numerik (cth., `number`, `BigInt`) seperti yang ditakrifkan oleh `NUMERIC_TYPES`.

## Penggunaan

### Sintaks

Fungsi:

- `isNumeric(value)`

Parameter:

- `value`: Nilai untuk diperiksa sama ada bertipe numerik.

### Import fungsi tempatan

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v dianggap berangka mengikut peraturan jenis pustaka
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isNumeric(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 15:55:28 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>