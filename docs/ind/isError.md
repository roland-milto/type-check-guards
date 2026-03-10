# isError

## Deskripsi

Memeriksa apakah `value` yang diberikan merupakan instance dari `Error`.

### Kasus penggunaan

Gunakan `isError` saat Anda menerima nilai `unknown` (misalnya dari blok `catch`, callback, atau library eksternal) dan
Anda perlu menentukan dengan aman apakah itu merupakan `Error` sebelum membaca `message`, `name`, atau `stack`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isError` untuk menjaga nilai `unknown` (misalnya, dari `catch`) sebelum memperlakukannya sebagai `Error`.

### Keunggulan

- Menyediakan pemeriksaan runtime sederhana untuk mengetahui apakah suatu nilai merupakan instance `Error`.
- Membantu mempersempit input yang tidak diketahui sebelum mengakses properti `Error` seperti `message` atau `stack`.
- Mengurangi risiko pengecualian runtime saat menangani nilai dari `catch`, API eksternal, atau sumber tanpa tipe.

## Penggunaan

### Sintaks

Fungsi:

- `isError(value)`

Parameter:

- `value`: Nilai yang akan diperiksa terhadap tipe `Error`.

### Impor fungsi lokal

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isError(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isError](../_analysis/isError.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 12.45.50 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>