# areEqual

## Penerangan

`areEqual` menyemak sama ada semua elemen dalam tatasusunan adalah sama dengan nilai jangkaan yang diberikan,
mengembalikan `true` hanya untuk tatasusunan tidak kosong yang setiap itemnya sepadan.

### Kes penggunaan

Sahkan bahawa senarai hanya mengandungi satu nilai yang dibenarkan (cth., semua bendera status ialah `true`, semua
peranan ialah `"admin"`, atau semua entri berangka sama dengan pemalar yang diperlukan) sambil menganggap input kosong
sebagai tidak sah (`false`).

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areEqual` apabila anda memerlukan semakan ketat untuk semua item; ia mengembalikan `false` untuk tatasusunan
> kosong dan untuk sebarang input yang bukan tatasusunan atau tidak berisi.

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen sepadan dengan nilai yang dijangka; jika tidak mengembalikan `false`.
- Gagal dengan pantas: berhenti menyemak sebaik sahaja elemen yang tidak sepadan ditemui.
- Melindungi daripada input tidak sah dengan mengembalikan `false` apabila input bukan tatasusunan yang berisi.

## Penggunaan

### Sintaks

Fungsi:

- `areEqual(value, expected)`

Parameter:

- `value`: Tatasusunan yang hendak diperiksa.
- `expected`: Elemen untuk dibandingkan dengan setiap item dalam tatasusunan.

### Import fungsi tempatan

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areEqual(value, expected)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:52:59 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>