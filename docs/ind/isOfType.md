# isOfType

## Deskripsi

Menentukan apakah `value` tertentu cocok dengan string tipe yang ditentukan, menggunakan `typeof` untuk tipe primitif
dan fallback untuk tipe kompleks.

### Kasus penggunaan

Memvalidasi dan mempersempit input `unknown` (misalnya respons API, input pengguna, JSON yang di-parse) dengan memeriksa
apakah suatu nilai memiliki string tipe yang diharapkan sebelum melakukan operasi yang spesifik terhadap tipe.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isOfType` untuk melakukan percabangan berdasarkan tipe saat runtime ketika bekerja dengan nilai `unknown`;
> fungsi ini mengembalikan `true`/`false` dan memperlakukan `null` serta `undefined` secara eksplisit.

### Keunggulan

- Memeriksa tipe primitif melalui `typeof` secara langsung untuk kecepatan dan kejelasan.
- Menangani `null` dan `undefined` dengan benar, yang tidak dapat dibedakan oleh `typeof` saja sesuai yang diinginkan.
- Mendukung string tipe yang kompleks atau kustom melalui perbandingan cadangan menggunakan `getTypeOf`.
- Mengembalikan hasil boolean sederhana (`true`/`false`) yang cocok untuk guard dan percabangan.

## Penggunaan

### Sintaks

Fungsi:

- `isOfType(value, type)`

Parameter:

- `value`: Nilai yang akan diuji terhadap `type`.
- `type`: Representasi string dari tipe yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input adalah angka di sini
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input adalah string di sini
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isOfType(value, type)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 17.00.08 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>