# isBigInt

## Penerangan

`isBigInt` menyemak sama ada nilai yang diberikan adalah daripada jenis `bigint`, mengembalikan `true` untuk primitif
BigInt dan `false` jika sebaliknya.

### Kes penggunaan

Sahkan dan kecilkan nilai yang datang daripada sumber tanpa jenis (cth., penguraian JSON, input pengguna, API luaran)
sebelum melakukan pengiraan khusus BigInt atau menyimpannya dalam medan yang hanya menerima BigInt.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isBigInt` untuk mengecilkan `unknown` kepada `bigint` sebelum melakukan aritmetik BigInt (cth., `+`, `*`)
> yang memerlukan operan BigInt.

### Kelebihan

- Menyediakan semakan masa jalan yang ringkas dan boleh dipercayai untuk jenis primitif `bigint`.
- Membantu mengecilkan nilai `unknown` sebelum melakukan operasi khusus BigInt.
- Mengelakkan positif palsu: nombor biasa, rentetan dan jenis lain mengembalikan `false`.

## Penggunaan

### Sintaks

Fungsi:

- `isBigInt(value)`

Parameter:

- `value`: Nilai untuk diperiksa.

### Import fungsi tempatan

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // benar
console.log(isBigInt(10));  // palsu
console.log(isBigInt("10")); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isBigInt(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:34:01 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>