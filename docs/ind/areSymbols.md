# areSymbols

## Deskripsi

Memeriksa apakah sebuah input adalah array terisi yang elemennya semuanya simbol, mengembalikan `true` atau `false`.

### Kasus penggunaan

Memvalidasi bahwa sebuah field konfigurasi (misalnya, daftar kunci unik yang direpresentasikan sebagai simbol) adalah
array tidak kosong yang hanya berisi simbol sebelum digunakan dalam API yang membutuhkan `symbol[]`.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areSymbols` untuk memvalidasi input yang tidak diketahui sebelum memperlakukannya sebagai `symbol[]`; fungsi
> ini mengembalikan `false` untuk non-array dan array kosong.

### Keunggulan

- Mengembalikan `true` hanya ketika input adalah array yang tidak kosong dan setiap elemennya adalah simbol.
- Mencegah positif palsu dengan menolak non-array dan array kosong melalui pemeriksaan array-terisi internal.
- Berguna sebagai type guard runtime untuk memvalidasi daftar yang hanya berisi simbol sebelum pemrosesan lebih lanjut.

## Penggunaan

### Sintaks

Fungsi:

- `areSymbols(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah elemennya berupa simbol.

### Impor fungsi lokal

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a adalah array yang hanya berisi simbol saat runtime
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areSymbols(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.22.02 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>