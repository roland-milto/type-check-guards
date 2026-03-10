# areOneOfType

## Deskripsi

`areOneOfType` memeriksa apakah semua elemen dalam array yang tidak kosong termasuk salah satu dari tipe runtime yang
ditentukan.

### Kasus penggunaan

Memvalidasi data masuk (misalnya JSON yang di-parse) ketika sebuah field harus berupa array tidak kosong yang
item-itemnya dibatasi pada sekumpulan tipe primitif yang diketahui; kembalikan `false` ketika array kosong atau berisi
tipe yang tidak diizinkan.

> **Catatan untuk pengguna TypeScript:**
>
> Fungsi ini mengembalikan boolean dan tidak mempersempit tipe elemen array pada waktu kompilasi; gunakan sebagai
> langkah validasi runtime sebelum pemrosesan lebih lanjut.

### Keunggulan

- Memastikan setiap elemen dalam sebuah array cocok dengan setidaknya satu tipe runtime yang diizinkan, mengembalikan
  `true` hanya ketika seluruh array lolos.
- Menolak input tidak valid lebih awal: mengembalikan `false` ketika `array` atau `types` kosong atau bukan array yang
  terisi.
- Berguna untuk memvalidasi koleksi bertipe campuran (misalnya angka dan string) dengan satu pemanggilan ke
  `areOneOfType`.

## Penggunaan

### Sintaks

Fungsi:

- `areOneOfType(array, types)`

Parameter:

- `array`: Sebuah array elemen yang akan diverifikasi terhadap tipe yang disediakan.
- `types`: Sebuah array string yang merepresentasikan tipe data untuk diperiksa.

### Impor fungsi lokal

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areOneOfType(array, types)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.37.10 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>