# areNumbers

## Penerangan

`areNumbers` menyemak sama ada sesuatu nilai ialah tatasusunan yang tidak kosong di mana semua elemen ialah nombor.

### Kes penggunaan

Sahkan data yang diberikan oleh pengguna atau API untuk memastikan ia ialah tatasusunan nombor yang tidak kosong sebelum
mengira jumlah, purata, atau pengagregatan berangka yang lain.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areNumbers` untuk mengesahkan tatasusunan yang tidak diketahui sebelum melakukan pengiraan berangka; ia
> mengembalikan `false` untuk tatasusunan kosong dan untuk tatasusunan yang mengandungi sebarang nilai bukan nombor.

### Kelebihan

- Mengembalikan `true` hanya apabila input ialah tatasusunan yang tidak kosong dan setiap elemen ialah nombor.
- Mencegah positif palsu dengan menolak tatasusunan kosong dan input yang bukan tatasusunan.
- Berguna sebagai pengawal sebelum operasi berangka (cth., penjumlahan, purata) untuk mengelakkan ralat masa jalan.

## Penggunaan

### Sintaks

Fungsi:

- `areNumbers(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi elemen nombor.

### Import fungsi tempatan

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areNumbers(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 13:06:46 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>