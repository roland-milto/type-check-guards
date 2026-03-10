# areWeakSets

## Deskripsi

Memeriksa apakah sebuah input adalah array tidak kosong di mana setiap elemennya adalah `WeakSet`, dan hanya
mengembalikan `true` dalam kasus tersebut.

### Kasus penggunaan

Memvalidasi input runtime (misalnya dari API, konfigurasi, atau data yang diberikan pengguna) untuk memastikan Anda
memiliki daftar tidak kosong berisi instance `WeakSet` sebelum melanjutkan dengan logika yang bergantung pada perilaku
`WeakSet`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areWeakSets` untuk memvalidasi input yang tidak diketahui sebelum memperlakukannya sebagai `WeakSet[]`.
> Fungsi ini mengembalikan `false` untuk array kosong dan yang bukan array.

### Keunggulan

- Memastikan setiap elemen dalam array input adalah `WeakSet`.
- Mengembalikan `false` untuk array kosong, mencegah hasil “semuanya valid” yang tidak disengaja saat data tidak ada.
- Gagal dengan aman dengan mengembalikan `false` ketika input bukan array yang terisi (termasuk `null`).
- Berguna sebagai guard sebelum melakukan operasi yang memerlukan instance `WeakSet`.

## Penggunaan

### Sintaks

Fungsi:

- `areWeakSets(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk objek `WeakSet`.

### Impor fungsi lokal

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a adalah array tidak kosong dari instance WeakSet
}

console.log(areWeakSets(a)); // benar
console.log(areWeakSets(b)); // salah
console.log(areWeakSets(c)); // salah
console.log(areWeakSets(null as unknown)); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areWeakSets(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.08.59 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>