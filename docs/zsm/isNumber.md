# isNumber

## Penerangan

`isNumber` menyemak sama ada sesuatu nilai ialah nombor terhingga yang bukan `NaN`.

### Kes penggunaan

Sahkan input berangka daripada sumber yang tidak dipercayai (borang, parameter kueri, muatan JSON) sebelum pengiraan,
penyimpanan, atau semakan julat, memastikan hanya nombor terhingga lulus (`true`) dan semua yang lain mengembalikan
`false`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isNumber` untuk mengesahkan nilai `unknown` sebelum melakukan aritmetik; ia menolak `NaN`, `Infinity`, dan
`-Infinity`.

### Kelebihan

- Mengembalikan `true` hanya untuk nombor JavaScript sebenar (semakan jenis serta penolakan `NaN` dan infiniti).
- Mencegah pepijat pengesahan biasa apabila `NaN`, `Infinity`, atau `-Infinity` tersilap lulus sebagai nombor.
- Berfungsi dengan baik sebagai pengawal masa jalan untuk input yang tidak diketahui (cth., JSON, input pengguna, API
  luaran).
- Ringkas, pantas, dan tanpa kesan sampingan.

## Penggunaan

### Sintaks

Fungsi:

- `isNumber(value)`

Parameter:

- `value`: Nilai untuk diperiksa.

### Import fungsi tempatan

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input ialah nombor terhingga yang sah
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isNumber(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:12:01 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>