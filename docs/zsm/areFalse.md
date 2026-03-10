# areFalse

## Penerangan

`areFalse` menyemak sama ada semua elemen dalam tatasusunan yang diberikan adalah boolean `false` secara ketat.

### Kes penggunaan

Sahkan bahawa senarai bendera ciri, semakan, atau hasil guard semuanya `false` sebelum meneruskan (contohnya,
mengesahkan bahawa tiada keadaan yang menghalang).

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areFalse` apabila anda memerlukan pengesahan ketat bahawa sesuatu tatasusunan tidak kosong dan hanya
> mengandungi nilai boolean `false`.

### Kelebihan

- Memastikan setiap elemen adalah `false` secara ketat (tiada paksaan truthy/falsey).
- Mengembalikan `false` untuk bukan tatasusunan atau tatasusunan kosong dengan mensyaratkan tatasusunan yang terisi
  melalui `isFilledArray`.
- Berhenti awal pada elemen pertama yang bukan `false` untuk kecekapan.

## Penggunaan

### Sintaks

Fungsi:

- `areFalse(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa, mengandungi elemen daripada sebarang jenis.

### Import fungsi tempatan

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // benar
const b = areFalse([false, true, false]);  // palsu
const c = areFalse([false, "false", false]); // palsu
const d = areFalse([]); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areFalse(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 16:19:21 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>