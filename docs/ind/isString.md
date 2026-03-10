# isString

## Deskripsi

`isString` menentukan apakah suatu nilai yang diberikan adalah string.

### Kasus penggunaan

Memvalidasi input pengguna, field payload API, atau nilai konfigurasi saat runtime untuk memastikan suatu nilai adalah
string sebelum menerapkan operasi string (misalnya trimming, splitting, konversi huruf besar/kecil).

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isString` untuk memvalidasi nilai `unknown` atau yang bertipe longgar sebelum memanggil metode string; fungsi
> ini mengembalikan `true` hanya ketika `typeof value === "string"`.

### Keunggulan

- Pemeriksaan sederhana dan cepat menggunakan `typeof`.
- Mengembalikan hasil boolean yang dapat diprediksi: `true` untuk string, selain itu `false`.
- Berfungsi untuk string kosong maupun tidak kosong.
- Berguna sebagai penjaga runtime yang ringan sebelum melakukan operasi khusus string.

## Penggunaan

### Sintaks

Fungsi:

- `isString(value)`

Parameter:

- `value`: Nilai yang akan diuji apakah bertipe string.

### Impor fungsi lokal

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input adalah sebuah string di sini
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isString(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isString](../_analysis/isString.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.14.15 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>