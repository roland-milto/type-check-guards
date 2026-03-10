# isNull

## Deskripsi

Menentukan apakah `value` yang diberikan adalah `null`.

### Kasus penggunaan

Gunakan `isNull` untuk memvalidasi input atau field payload API ketika `null` adalah nilai sentinel yang bermakna dan
harus ditangani berbeda dari `undefined` atau nilai lainnya.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isNull` ketika Anda perlu membedakan `null` dari `undefined` dan nilai falsy lainnya; fungsi ini
> mengembalikan `true` hanya untuk `null`.

### Keunggulan

- Memberikan pemeriksaan yang presisi untuk `null` tanpa menyamakannya dengan `undefined`.
- Bekerja dengan andal untuk tipe input apa pun karena menerima `unknown`.
- Sederhana, cepat, dan bebas efek samping; hanya mengembalikan `true` atau `false`.

## Penggunaan

### Sintaks

Fungsi:

- `isNull(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah `null`.

### Impor fungsi lokal

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // benar
console.log(isNull(b)); // salah

if (isNull(a)) {
  // a bernilai null di sini
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isNull(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isNull](../_analysis/isNull.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 15.39.30 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>