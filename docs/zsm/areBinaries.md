# areBinaries

## Penerangan

Memeriksa sama ada nilai yang diberikan ialah tatasusunan tidak kosong bagi rentetan binari yang sah dan mengembalikan
`true` hanya jika semua item lulus pengesahan.

### Kes penggunaan

Gunakan `areBinaries` apabila anda menerima senarai yang tidak diketahui (contohnya, daripada JSON, borang, atau API)
dan perlu memastikan ia ialah tatasusunan tidak kosong bagi rentetan binari sebelum menguraikan atau memprosesnya.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areBinaries` untuk mengesahkan input yang tidak diketahui sebelum menukar rentetan binari kepada
> nombor/BigInts; ia memastikan tatasusunan tidak kosong dan setiap elemen ialah rentetan binari yang sah.

### Kelebihan

- Mengesahkan bahawa sesuatu nilai ialah tatasusunan tidak kosong di mana setiap elemen ialah rentetan binari yang sah.
- Mengembalikan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal, pemulangan awal, dan pengesahan
  input.
- Mencegah ralat penguraian seterusnya dengan menolak tatasusunan yang mengandungi sebarang entri bukan binari.

## Penggunaan

### Sintaks

Fungsi:

- `areBinaries(array)`

Parameter:

- `array`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // benar
console.log(areBinaries(b)); // palsu
console.log(areBinaries([])); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areBinaries(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:16:38 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>