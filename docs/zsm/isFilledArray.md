# isFilledArray

## Penerangan

Menyemak sama ada `value` ialah tatasusunan dengan sekurang-kurangnya satu elemen, mengembalikan `true` atau `false`.

### Kes penggunaan

Gunakan `isFilledArray` untuk mengesahkan data yang masuk (cth., payload API, nilai borang, konfigurasi) sebelum
mengiterasi, mengakses elemen pertama, atau menggunakan logik yang memerlukan sekurang-kurangnya satu item.

> **Nota untuk pengguna TypeScript:**
>
> `isFilledArray` ialah pengawal masa jalan yang mengembalikan boolean; ia tidak mengecilkan jenis elemen melebihi
> mengesahkan bahawa tatasusunan tidak kosong.

### Kelebihan

- Semakan ringkas dan pantas untuk tatasusunan yang tidak kosong menggunakan `Array.isArray` dan semakan panjang.
- Membantu mengelakkan ralat masa jalan apabila kod mengandaikan tatasusunan mempunyai sekurang-kurangnya satu elemen.
- Keputusan boolean yang jelas: mengembalikan `true` untuk tatasusunan tidak kosong dan `false` jika sebaliknya.

## Penggunaan

### Sintaks

Fungsi:

- `isFilledArray(value)`

Parameter:

- `value`: Nilai untuk disemak sama ada ia ialah tatasusunan yang tidak kosong.

### Import fungsi tempatan

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input ialah tatasusunan tidak kosong pada masa jalan
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isFilledArray(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 11:49:37 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>