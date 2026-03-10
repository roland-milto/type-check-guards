# isSymbol

## Deskripsi

`isSymbol` menentukan apakah suatu nilai yang diberikan bertipe `symbol`, mengembalikan `true` untuk symbol dan `false`
jika tidak.

### Kasus penggunaan

Validasi bahwa nilai `unknown` adalah `symbol` sebelum menggunakannya sebagai pengenal unik, key registry, atau key
properti terhitung (computed) pada objek dan map.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isSymbol` untuk mempersempit `unknown` menjadi `symbol` sebelum memanggil fungsi terkait symbol atau
> menggunakannya sebagai key properti terhitung (computed).

### Keunggulan

- Menyediakan pemeriksaan runtime yang sederhana dan andal untuk tipe primitif JavaScript `symbol`.
- Membantu mempersempit nilai `unknown` sebelum menggunakan API khusus symbol atau menyimpannya sebagai key.
- Menghindari positif palsu dengan menggunakan `typeof`, yang merupakan cara kanonis untuk mendeteksi nilai `symbol`.

## Penggunaan

### Sintaks

Fungsi:

- `isSymbol(value)`

Parameter:

- `value`: Nilai yang akan diperiksa.

### Impor fungsi lokal

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input adalah simbol di sini
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isSymbol(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 14.27.10 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>