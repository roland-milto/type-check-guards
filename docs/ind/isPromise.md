# isPromise

## Deskripsi

Menentukan apakah suatu nilai tertentu adalah `Promise`.

### Kasus penggunaan

Gunakan `isPromise` untuk memvalidasi input yang tidak diketahui sebelum memperlakukannya sebagai `Promise`, misalnya
saat menangani nilai yang dikembalikan dari plugin, impor dinamis, atau API yang bertipe longgar.

> **Catatan untuk pengguna TypeScript:**
>
> `isPromise` memeriksa melalui `instanceof Promise`, jadi hanya mengembalikan `true` untuk instance `Promise` yang
> nyata (bukan thenable generik).

### Keunggulan

- Menyediakan pemeriksaan runtime sederhana untuk mengetahui apakah suatu nilai adalah `Promise`.
- Membantu menjaga jalur kode yang memerlukan instance `Promise` yang sebenarnya, dengan mengembalikan `true` atau
  `false` secara dapat diprediksi.
- Menghindari positif palsu dari objek “thenable” (misalnya, `{ then() {} }`) dengan mensyaratkan instance `Promise`
  yang sebenarnya.

## Penggunaan

### Sintaks

Fungsi:

- `isPromise(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // benar
console.log(isPromise(b)); // salah
console.log(isPromise(123)); // salah
console.log(isPromise(null)); // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isPromise(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.53.07 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>