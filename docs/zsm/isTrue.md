# isTrue

## Penerangan

`isTrue` menentukan sama ada sesuatu nilai yang diberikan adalah sama secara ketat dengan `true`.

### Kes penggunaan

Gunakan `isTrue` untuk mengesahkan flag, togol ciri, atau nilai konfigurasi apabila hanya literal `true` patut diterima
dan segala yang lain mesti dianggap sebagai `false`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isTrue` apabila anda perlu menerima hanya literal boolean `true`, bukan sekadar nilai truthy.

### Kelebihan

- Menyediakan semakan ketat untuk literal boolean `true` (tiada paksaan/penukaran jenis).
- Membantu membezakan `true` daripada nilai truthy seperti `1`, `"true"`, atau `{}`.
- Tingkah laku yang ringkas dan boleh diramal, sesuai untuk guard dan saluran paip pengesahan.

## Penggunaan

### Sintaks

Fungsi:

- `isTrue(value)`

Parameter:

- `value`: Nilai untuk diperiksa.

### Import fungsi tempatan

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // benar
const b = isTrue(1);         // palsu
const c = isTrue("true");   // palsu

if (isTrue(a)) {
  // a adalah benar di sini
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isTrue(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:47:00 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>