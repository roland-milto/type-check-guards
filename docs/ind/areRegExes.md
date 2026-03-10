# areRegExes

## Deskripsi

`areRegExes` memeriksa apakah sebuah nilai adalah array yang terisi dan hanya berisi objek `RegExp`.

### Kasus penggunaan

Validasi bahwa sebuah opsi konfigurasi (misalnya, daftar pola allow/deny) adalah array ekspresi reguler yang tidak
kosong sebelum menggunakannya untuk pencocokan.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areRegExes` untuk mempersempit `unknown` menjadi `RegExp[]` sebelum melakukan iterasi atau menyusun pola.

### Keunggulan

- Memastikan sebuah nilai adalah array yang tidak kosong di mana setiap elemennya merupakan instance `RegExp`.
- Menyediakan guard boolean sederhana (`true`/`false`) untuk memvalidasi input pengguna atau konfigurasi.
- Membantu mencegah error saat runtime ketika kode selanjutnya mengasumsikan semua item mendukung operasi ekspresi
  reguler.

## Penggunaan

### Sintaks

Fungsi:

- `areRegExes(array)`

Parameter:

- `array`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns adalah sebuah array RegExp di sini
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areRegExes(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.18.51 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>