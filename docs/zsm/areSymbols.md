# areSymbols

## Penerangan

Memeriksa sama ada input ialah tatasusunan berisi yang elemennya semuanya simbol, lalu mengembalikan `true` atau
`false`.

### Kes penggunaan

Sahkan bahawa medan konfigurasi (cth., senarai kunci unik yang diwakili sebagai simbol) ialah tatasusunan tidak kosong
yang hanya mengandungi simbol sebelum menggunakannya dalam API yang memerlukan `symbol[]`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areSymbols` untuk mengesahkan input yang tidak diketahui sebelum menganggapnya sebagai `symbol[]`; ia
> mengembalikan `false` untuk bukan tatasusunan dan tatasusunan kosong.

### Kelebihan

- Mengembalikan `true` hanya apabila input ialah tatasusunan yang tidak kosong dan setiap elemen ialah simbol.
- Mencegah positif palsu dengan menolak bukan tatasusunan dan tatasusunan kosong melalui semakan dalaman tatasusunan
  berisi.
- Berguna sebagai pengawal jenis masa jalan untuk mengesahkan senarai yang hanya mengandungi simbol sebelum pemprosesan
  lanjut.

## Penggunaan

### Sintaks

Fungsi:

- `areSymbols(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa sama ada mengandungi elemen simbol.

### Import fungsi tempatan

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a ialah tatasusunan yang hanya mengandungi simbol pada masa jalan
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areSymbols(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:24:52 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>