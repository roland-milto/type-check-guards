# isOneOfType

## Deskripsi

`isOneOfType` menentukan apakah `value` yang diberikan cocok dengan setidaknya satu dari string tipe yang disediakan,
mengembalikan `true` jika ada kecocokan dan `false` jika tidak.

### Kasus penggunaan

Memvalidasi data bertipe longgar atau data eksternal (misalnya JSON yang di-parse, parameter kueri) dengan mengizinkan
beberapa tipe runtime yang dapat diterima (seperti `number` atau `string`) sebelum melanjutkan ke logika berikutnya.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isOneOfType` ketika Anda menginginkan pemeriksaan runtime bahwa sebuah nilai cocok dengan salah satu dari
> beberapa tipe yang diizinkan; fungsi ini mengembalikan `true` jika setidaknya satu tipe cocok, jika tidak `false`.

### Keunggulan

- Memeriksa sebuah nilai terhadap beberapa tipe yang diizinkan dalam satu pemanggilan, mengembalikan `true` pada
  kecocokan pertama.
- Berfungsi dengan input `unknown`, sehingga berguna pada batas runtime (misalnya data eksternal, input pengguna).
- Hasil boolean sederhana (`true`/`false`) yang mudah dikomposisikan dengan logika kondisional dan pengembalian awal.

## Penggunaan

### Sintaks

Fungsi:

- `isOneOfType(value, types)`

Parameter:

- `value`: Nilai yang akan diperiksa terhadap tipe yang ditentukan.
- `types`: Array string tipe yang merepresentasikan tipe potensial dari nilai tersebut.

### Impor fungsi lokal

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input adalah sebuah objek saat runtime
}

console.log(isOneOfType(3, ["number", "string"])); // benar
console.log(isOneOfType("hello", ["number", "boolean"])); // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isOneOfType(value, types)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.43.38 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>