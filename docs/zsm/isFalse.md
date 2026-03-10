# isFalse

## Penerangan

`isFalse` menyemak sama ada sesuatu nilai yang diberikan adalah sama secara ketat dengan literal boolean `false`.

### Kes penggunaan

Sahkan data yang tidak diketahui (cth., daripada JSON, parameter kueri, atau input pengguna) apabila hanya nilai boolean
`false` yang eksplisit patut dianggap sebagai penanda yang sah, dan semua yang lain perlu ditolak.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isFalse` apabila anda perlu menerima hanya literal `false` dan menolak semua nilai falsy yang lain; ia
> mengembalikan `true` hanya untuk `value === false`.

### Kelebihan

- Menyediakan semakan ketat untuk literal boolean `false` tanpa paksaan jenis (coercion).
- Membantu membezakan `false` daripada nilai falsy lain seperti `0`, `""`, `null`, dan `undefined`.
- Ia meningkatkan kebolehbacaan dengan menjadikan niat lebih jelas apabila mengesahkan input yang tidak diketahui.

## Penggunaan

### Sintaks

Fungsi:

- `isFalse(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input ialah tepat false di sini
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isFalse(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 16:45:15 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>