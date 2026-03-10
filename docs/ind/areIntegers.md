# areIntegers

## Deskripsi

`areIntegers` menentukan apakah semua elemen dalam array tertentu adalah bilangan bulat, mengembalikan `true` jika ya
dan `false` jika tidak.

### Kasus penggunaan

Gunakan `areIntegers` untuk memvalidasi data yang disediakan pengguna atau data eksternal (mis., parameter kueri,
payload JSON, baris CSV) ketika logika Anda memerlukan daftar terisi dari nilai bilangan bulat seperti ID, penghitung,
offset paginasi, atau indeks array.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areIntegers` sebagai guard runtime untuk input `unknown[]` sebelum memperlakukannya sebagai `number[]` yang
> hanya berisi bilangan bulat. Jika mengembalikan `false`, input tersebut bukan array terisi atau mengandung setidaknya
> satu nilai yang bukan bilangan bulat.

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah bilangan bulat; jika tidak, mengembalikan `false`.
- Membantu memvalidasi input yang tidak diketahui sebelum melakukan operasi yang hanya berlaku untuk bilangan bulat (
  mis., pengindeksan, hitungan, ID).
- Gagal cepat: berhenti memeriksa segera setelah menemukan elemen yang bukan bilangan bulat.

## Penggunaan

### Sintaks

Fungsi:

- `areIntegers(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk elemen bilangan bulat.

### Impor fungsi lokal

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // benar
console.log(areIntegers(b)); // benar
console.log(areIntegers(c)); // salah

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areIntegers(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 00.58.45 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>