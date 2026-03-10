# isOctal

## Deskripsi

Menentukan apakah suatu nilai adalah string literal oktal yang valid (mis. `0o755`).

### Kasus penggunaan

Memvalidasi input pengguna atau nilai konfigurasi yang harus dinyatakan sebagai string literal oktal (misalnya, mode
izin berkas seperti `0o644`) sebelum di-parse atau dikonversi.

> **Catatan untuk pengguna TypeScript:**
>
> `isOctal` adalah penjaga tipe (`value is string`). Setelah hasil `true`, TypeScript mempersempit variabel yang
> diperiksa menjadi `string`.

### Keunggulan

- Menyediakan penjaga tipe yang ketat: mengembalikan `true` hanya ketika input adalah string yang cocok dengan format
  literal oktal.
- Menolak string kosong dan string dengan spasi awal/akhir (kontrol/spasi ASCII), sehingga mengurangi kecocokan yang
  tidak disengaja.
- Mendukung tanda opsional dan tidak peka huruf besar/kecil untuk prefiks `0o`/`0O`.
- Lebih toleran untuk input non-string dengan mengembalikan `false` alih-alih melempar error.

## Penggunaan

### Sintaks

Fungsi:

- `isOctal(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // benar
console.log(isOctal(b)); // benar
console.log(isOctal(c)); // salah
console.log(isOctal(d)); // salah

if (isOctal(a)) {
  // a adalah string di sini
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isOctal(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 15.41.34 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>