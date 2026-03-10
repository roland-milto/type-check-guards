# arePromises

## Penerangan

`arePromises` menentukan sama ada semua elemen dalam tatasusunan ialah kejadian `Promise`.

### Kes penggunaan

Sahkan bahawa senarai yang dibina secara dinamik atau dibekalkan secara luaran hanya mengandungi promise sebelum
mengagregatkannya (contohnya, dengan `Promise.all`).

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `arePromises` untuk mengesahkan `unknown[]` sebelum memanggil `Promise.all` atau operasi lain yang hanya untuk
> promise; ia mengembalikan `false` untuk tatasusunan kosong.

### Kelebihan

- Memastikan setiap elemen ialah `Promise` sebelum anda meneruskan dengan logik khusus promise.
- Mengembalikan `false` untuk tatasusunan yang tidak diisi, mengelakkan hasil yang samar bagi input kosong.
- Berguna sebagai pengawal masa jalan apabila bekerja dengan `unknown[]` daripada sumber luaran.

## Penggunaan

### Sintaks

Fungsi:

- `arePromises(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa bagi kejadian `Promise`.

### Import fungsi tempatan

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values ialah tatasusunan contoh Promise pada masa jalan
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.arePromises(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:50:42 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>