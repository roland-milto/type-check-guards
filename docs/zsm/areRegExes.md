# areRegExes

## Penerangan

`areRegExes` menyemak sama ada sesuatu nilai ialah tatasusunan berisi yang hanya mengandungi objek `RegExp`.

### Kes penggunaan

Sahkan bahawa satu pilihan konfigurasi (cth., senarai corak benarkan/larang) ialah tatasusunan ungkapan biasa yang tidak
kosong sebelum menggunakannya untuk pemadanan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areRegExes` untuk mengecilkan `unknown` kepada `RegExp[]` sebelum mengiterasi atau menggubah corak.

### Kelebihan

- Memastikan sesuatu nilai ialah tatasusunan yang tidak kosong di mana setiap elemen ialah instans `RegExp`.
- Menyediakan pengawal boolean (`true`/`false`) yang ringkas untuk mengesahkan input pengguna atau konfigurasi.
- Membantu mencegah ralat masa jalan apabila kod seterusnya menganggap semua item menyokong operasi ungkapan biasa.

## Penggunaan

### Sintaks

Fungsi:

- `areRegExes(array)`

Parameter:

- `array`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns ialah tatasusunan RegExp di sini
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areRegExes(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:22:43 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>