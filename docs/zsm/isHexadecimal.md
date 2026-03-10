# isHexadecimal

## Penerangan

`isHexadecimal` menyemak sama ada nilai yang diberikan ialah literal rentetan heksadesimal dengan awalan `0x`/`0X` yang
wajib.

### Kes penggunaan

Gunakan `isHexadecimal` untuk mengesahkan nilai konfigurasi, medan muatan API, atau argumen CLI yang mesti diberikan
sebagai literal rentetan heksadesimal (contohnya, ID, topeng, atau alamat) dan tidak boleh mengandungi ruang putih di
sekelilingnya.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isHexadecimal` apabila anda perlu mengesahkan input pengguna atau data bersiri sebagai rentetan literal
> heksadesimal yang ketat (termasuk awalan `0x`/`0X`) sebelum menghuraikan atau menukarkannya.

### Kelebihan

- Mengesahkan bahawa sesuatu nilai ialah rentetan dan sepadan dengan format literal heksadesimal yang ketat (memerlukan
  awalan `0x`/`0X`).
- Menolak rentetan dengan ruang putih di hadapan atau di belakang, membantu mengelakkan penerimaan input berpad secara
  tidak sengaja.
- Menyokong tanda pilihan dan tidak peka huruf besar/kecil untuk awalan dan digit, mengembalikan `true`/`false` secara
  boleh dijangka.

## Penggunaan

### Sintaks

Fungsi:

- `isHexadecimal(value)`

Parameter:

- `value`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // benar
isHexadecimal("-0Xff"); // benar
isHexadecimal("1A2B"); // palsu (awalan tiada)
isHexadecimal(" 0x1A2B"); // palsu (ruang putih di hadapan)
isHexadecimal(0x1a2b); // palsu (bukan rentetan)
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isHexadecimal(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:02:14 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>