# isSet

## Deskripsi

Menentukan apakah suatu nilai yang diberikan adalah `Set`.

### Kasus penggunaan

Validasi input dari sumber eksternal (misalnya, parsing JSON, input pengguna, atau API pihak ketiga) untuk memastikan
suatu nilai adalah `Set` sebelum melakukan operasi `Set`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isSet` untuk mempersempit nilai `unknown` sebelum memanggil API khusus `Set` seperti `.add`, `.has`, atau
`.size`.

### Keunggulan

- Menyediakan pemeriksaan runtime yang sederhana untuk mengonfirmasi apakah suatu nilai adalah `Set`.
- Membantu mencegah kesalahan tipe dengan memungkinkan percabangan lebih awal ketika suatu nilai bukan `Set`.
- Berfungsi dengan konten `Set` apa pun (kosong atau berisi) dan secara konsisten mengembalikan `true`/`false`.

## Penggunaan

### Sintaks

Fungsi:

- `isSet(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a adalah sebuah Set saat runtime
  console.log(a.size);
}

console.log(isSet(b)); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isSet(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isSet](../_analysis/isSet.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.09.55 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>