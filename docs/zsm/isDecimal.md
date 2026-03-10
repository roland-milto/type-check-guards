# isDecimal

## Penerangan

`isDecimal` menyemak sama ada sesuatu nilai ialah perwakilan rentetan perpuluhan tanpa ruang putih di hadapan/di
belakang dan dengan format perpuluhan yang sah.

### Kes penggunaan

Sahkan medan borang, muatan API, atau nilai konfigurasi yang mesti diberikan sebagai rentetan perpuluhan (dengan tanda
pilihan) tanpa sebarang ruang putih di sekelilingnya, sebelum dihuraikan atau disimpan.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isDecimal` untuk mengesahkan input pengguna sebelum menukarkannya (cth., dengan `Number(value)`), terutamanya
> apabila ruang putih mesti ditolak.

### Kelebihan

- Mengesahkan dengan ketat bahawa input ialah rentetan dan sepadan dengan corak literal perpuluhan.
- Menolak ruang putih di hadapan dan di belakang (termasuk aksara kawalan) untuk mengelakkan penghuraian yang
  samar-samar.
- Pra-semak pantas (semakan jenis dan aksara pertama/terakhir) sebelum menjalankan regex.
- Mengembalikan hasil boolean ringkas (`true`/`false`) yang sesuai untuk pengawal dan pengesahan input.

## Penggunaan

### Sintaks

Fungsi:

- `isDecimal(value)`

Parameter:

- `value`: Nilai untuk diperiksa bagi format rentetan perpuluhan.

### Import fungsi tempatan

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v ialah rentetan di sini (disahkan pada masa jalan)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isDecimal(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 15:55:34 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>