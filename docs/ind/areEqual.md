# areEqual

## Deskripsi

`areEqual` memeriksa apakah semua elemen dalam sebuah array sama dengan nilai yang diharapkan, mengembalikan `true`
hanya untuk array yang tidak kosong ketika setiap item cocok.

### Kasus penggunaan

Memvalidasi bahwa sebuah daftar hanya berisi satu nilai yang diizinkan (misalnya, semua flag status adalah `true`, semua
peran adalah `"admin"`, atau semua entri numerik sama dengan konstanta yang diwajibkan) sambil memperlakukan input
kosong sebagai tidak valid (`false`).

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areEqual` ketika Anda memerlukan pemeriksaan ketat untuk semua item; fungsi ini mengembalikan `false` untuk
> array kosong dan untuk input apa pun yang bukan array atau bukan array yang terisi.

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen cocok dengan nilai yang diharapkan; jika tidak, mengembalikan `false`.
- Gagal cepat: berhenti memeriksa segera setelah elemen yang tidak cocok ditemukan.
- Melindungi dari input tidak valid dengan mengembalikan `false` ketika input bukan array yang terisi.

## Penggunaan

### Sintaks

Fungsi:

- `areEqual(value, expected)`

Parameter:

- `value`: Array yang akan diperiksa.
- `expected`: Elemen yang digunakan untuk membandingkan setiap item array.

### Impor fungsi lokal

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areEqual(value, expected)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Berkas dibuat pada 31 Januari 2026 pukul 23.50.49 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>