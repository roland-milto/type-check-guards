# areStrings

## Penerangan

`areStrings` menyemak sama ada sesuatu tatasusunan tidak kosong dan semua elemennya ialah rentetan, memulangkan `true`
hanya dalam keadaan itu.

### Kes penggunaan

Sahkan data luaran atau yang dibekalkan pengguna (cth., parameter pertanyaan, muatan JSON, medan CSV) untuk memastikan
anda mempunyai senarai rentetan yang tidak kosong sebelum diproses.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areStrings` untuk mengesahkan tatasusunan yang tidak diketahui sebelum menggunakan logik khusus rentetan; ia
> memulangkan `false` untuk tatasusunan kosong.

### Kelebihan

- Memastikan setiap elemen ialah rentetan dan menolak tatasusunan jenis campuran dengan memulangkan `false`.
- Menolak tatasusunan kosong, jadi `true` hanya menunjukkan senarai rentetan yang tidak kosong.
- Berguna sebagai pengawal masa jalan yang pantas sebelum melakukan operasi khusus rentetan (cth., `trim`,
  `toLowerCase`).

## Penggunaan

### Sintaks

Fungsi:

- `areStrings(value)`

Parameter:

- `value`: Expected type `string[]`.

### Import fungsi tempatan

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input ialah string[] tidak kosong pada masa jalan
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areStrings(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:21:20 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>