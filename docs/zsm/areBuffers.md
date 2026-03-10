# areBuffers

## Penerangan

`areBuffers` menyemak sama ada nilai yang diberikan ialah tatasusunan yang tidak kosong dan terisi di mana setiap elemen
ialah `Buffer`, mengembalikan `true` jika ya dan `false` jika tidak.

### Kes penggunaan

Sahkan tatasusunan cebisan yang masuk (cth., daripada strim, muat naik fail, atau paket rangkaian) untuk memastikan
semua bahagian ialah instans `Buffer` sebelum menggabungkan, menyahkod, atau menyerahkannya kepada fungsi kriptografi
atau pemprosesan binari.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areBuffers` untuk mengesahkan `unknown[]` sebelum memanggil API khusus Buffer seperti `Buffer.concat`,
> memastikan fungsi mengembalikan `true` hanya apabila setiap elemen ialah `Buffer`.

### Kelebihan

- Memastikan setiap elemen dalam input ialah instans `Buffer` Node.js, mengembalikan `true` hanya apabila keseluruhan
  tatasusunan sepadan.
- Menolak input tidak sah lebih awal dengan mensyaratkan tatasusunan yang tidak kosong dan terisi; mengembalikan `false`
  untuk tatasusunan kosong atau bukan tatasusunan.
- Berguna sebagai pengawal sebelum melakukan operasi khusus buffer (cth., penggabungan, penghashan, protokol binari).

## Penggunaan

### Sintaks

Fungsi:

- `areBuffers(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi instans buffer.

### Import fungsi tempatan

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areBuffers(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 16:28:16 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>