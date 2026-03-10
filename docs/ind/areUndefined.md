# areUndefined

## Deskripsi

`areUndefined` memeriksa apakah setiap elemen dalam array yang diberikan adalah `undefined`.

### Kasus penggunaan

Memvalidasi bahwa daftar hasil opsional tidak berisi nilai aktual (hanya `undefined`), misalnya setelah melakukan
pemetaan lookup di mana entri yang hilang direpresentasikan sebagai `undefined`, dan Anda ingin memastikan bahwa semua
lookup gagal.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areUndefined` ketika Anda perlu memastikan bahwa sebuah `unknown[]` hanya berisi nilai `undefined`; fungsi
> ini mengembalikan `false` untuk array kosong dan input non-array/tidak valid karena pemeriksaan internal
`isFilledArray`.

### Keunggulan

- Mengembalikan `false` untuk non-array dan array kosong dengan mensyaratkan array yang terisi melalui `isFilledArray`.
- Memastikan setiap elemen adalah `undefined`, bukan hanya sebagian, sehingga maksudnya menjadi eksplisit.
- Berguna sebagai predikat bergaya guard saat memvalidasi koleksi input yang tidak diketahui.

## Penggunaan

### Sintaks

Fungsi:

- `areUndefined(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk elemen `undefined`.

### Impor fungsi lokal

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Catatan: mengembalikan false untuk array kosong
const r4 = areUndefined([]); // false

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areUndefined(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 13.56.07 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>