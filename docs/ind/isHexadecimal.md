# isHexadecimal

## Deskripsi

`isHexadecimal` memeriksa apakah sebuah nilai yang diberikan adalah literal string heksadesimal dengan awalan `0x`/`0X`
yang wajib.

### Kasus penggunaan

Gunakan `isHexadecimal` untuk memvalidasi nilai konfigurasi, field payload API, atau argumen CLI yang harus diberikan
sebagai literal string heksadesimal (misalnya ID, mask, atau alamat) dan tidak boleh mengandung spasi di sekelilingnya.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isHexadecimal` saat Anda perlu memvalidasi input pengguna atau data terserialisasi sebagai string literal
> heksadesimal yang ketat (termasuk awalan `0x`/`0X`) sebelum mem-parsing atau mengonversinya.

### Keunggulan

- Memvalidasi bahwa sebuah nilai adalah string dan cocok dengan format literal heksadesimal yang ketat (memerlukan
  awalan `0x`/`0X`).
- Menolak string dengan spasi di awal atau akhir, membantu menghindari penerimaan input yang tidak sengaja terisi
  padding.
- Mendukung tanda opsional dan tidak peka huruf besar/kecil untuk awalan dan digit, mengembalikan `true`/`false` secara
  dapat diprediksi.

## Penggunaan

### Sintaks

Fungsi:

- `isHexadecimal(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (awalan hilang)
isHexadecimal(" 0x1A2B"); // false (spasi di awal)
isHexadecimal(0x1a2b); // false (bukan string)
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isHexadecimal(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 22.59.01 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>