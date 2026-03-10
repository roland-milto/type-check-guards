# isSymbol

## Penerangan

`isSymbol` menentukan sama ada sesuatu nilai yang diberikan adalah daripada jenis `symbol`, mengembalikan `true` untuk
simbol dan `false` jika sebaliknya.

### Kes penggunaan

Sahkan bahawa nilai `unknown` ialah `symbol` sebelum menggunakannya sebagai pengecam unik, kunci pendaftaran, atau kunci
sifat terhitung dalam objek dan peta.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isSymbol` untuk mengecilkan `unknown` kepada `symbol` sebelum memanggil fungsi berkaitan simbol atau
> menggunakannya sebagai kunci sifat terhitung.

### Kelebihan

- Menyediakan semakan masa jalan yang ringkas dan boleh dipercayai untuk jenis primitif JavaScript `symbol`.
- Membantu mengecilkan nilai `unknown` sebelum menggunakan API khusus simbol atau menyimpannya sebagai kunci.
- Mengelakkan positif palsu dengan menggunakan `typeof`, iaitu cara kanonik untuk mengesan nilai `symbol`.

## Penggunaan

### Sintaks

Fungsi:

- `isSymbol(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Import fungsi tempatan

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input ialah simbol di sini
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isSymbol(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:29:35 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>