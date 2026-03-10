# isWeakMap

## Deskripsi

Menentukan apakah `value` yang diberikan merupakan instance `WeakMap`.

### Kasus penggunaan

Gunakan `isWeakMap` saat Anda menerima nilai `unknown` (misalnya dari API publik, sistem plugin, atau konfigurasi
dinamis) dan perlu memverifikasi bahwa nilai tersebut adalah `WeakMap` sebelum menggunakan perilaku khusus `WeakMap`.

> **Catatan untuk pengguna TypeScript:**
>
> `isWeakMap` melakukan pemeriksaan `instanceof WeakMap`; ini adalah guard runtime yang mengembalikan `true` hanya untuk
> instance `WeakMap` yang benar-benar ada.

### Keunggulan

- Pemeriksaan runtime sederhana untuk mengetahui apakah suatu nilai adalah `WeakMap`.
- Membantu mencegah penyalahgunaan API yang memerlukan `WeakMap` dengan mengembalikan `true`/`false` alih-alih melempar
  error.
- Berfungsi dengan input `unknown`, sehingga praktis di batas modul (misalnya parsing, data eksternal, atau kode tanpa
  tipe).

## Penggunaan

### Sintaks

Fungsi:

- `isWeakMap(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a adalah WeakMap saat runtime
}

console.log(isWeakMap(a)); // benar
console.log(isWeakMap(b)); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isWeakMap(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.25.20 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>