# areTrue

## Penerangan

Memeriksa sama ada tatasusunan tidak kosong mengandungi hanya nilai boolean `true`.

### Kes penggunaan

Gunakan `areTrue` untuk mengesahkan bahawa satu set prasyarat atau bendera ciri semuanya diaktifkan (semua nilai adalah
`true`) sebelum meneruskan, sambil menganggap input kosong atau tidak terbentuk sebagai tidak dipenuhi (`false`).

> **Nota untuk pengguna TypeScript:**
>
> `areTrue` mengembalikan `false` untuk tatasusunan kosong dan untuk tatasusunan yang mengandungi sebarang nilai yang
> bukan `true` secara ketat.

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen adalah `true` secara ketat dan tatasusunan tidak kosong.
- Gagal pantas: mengembalikan `false` sebaik sahaja nilai bukan `true` ditemui.
- Menolak input tidak sah (bukan tatasusunan atau tatasusunan kosong) dengan mengembalikan `false`.

## Penggunaan

### Sintaks

Fungsi:

- `areTrue(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa sama ada semua nilai adalah `true`.

### Import fungsi tempatan

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areTrue(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:53:34 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>