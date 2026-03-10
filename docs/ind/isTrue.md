# isTrue

## Deskripsi

`isTrue` menentukan apakah suatu nilai yang diberikan benar-benar sama dengan `true`.

### Kasus penggunaan

Gunakan `isTrue` untuk memvalidasi flag, feature toggle, atau nilai konfigurasi ketika hanya literal `true` yang boleh
diterima dan semua yang lain harus diperlakukan sebagai `false`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isTrue` ketika Anda perlu menerima hanya literal boolean `true`, bukan sekadar nilai truthy.

### Keunggulan

- Memberikan pemeriksaan ketat untuk literal boolean `true` (tanpa koersi).
- Membantu membedakan `true` dari nilai truthy seperti `1`, `"true"`, atau `{}`.
- Perilaku sederhana dan dapat diprediksi, cocok untuk guard dan pipeline validasi.

## Penggunaan

### Sintaks

Fungsi:

- `isTrue(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // benar
const b = isTrue(1);         // salah
const c = isTrue("true");   // salah

if (isTrue(a)) {
  // a bernilai benar di sini
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isTrue(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.42.37 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>