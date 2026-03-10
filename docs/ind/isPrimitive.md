# isPrimitive

## Deskripsi

`isPrimitive` menentukan apakah suatu nilai yang diberikan adalah primitif (`null`, `undefined`, `boolean`, `number`,
`string`, `bigint`, `symbol`).

### Kasus penggunaan

Memvalidasi input saat runtime (mis., field payload API, nilai konfigurasi, atau data yang diberikan pengguna) untuk
memastikan suatu nilai adalah primitif sebelum diserialisasi, dicatat (logging), atau diterapkan operasi yang hanya
berlaku untuk primitif.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `isPrimitive` untuk menjaga input `unknown` sebelum memperlakukannya sebagai objek atau fungsi; fungsi ini
> mengembalikan `true` untuk primitif dan `false` untuk objek dan fungsi.

### Keunggulan

- Pemeriksaan cepat tanpa alokasi untuk mengetahui apakah suatu nilai adalah primitif JavaScript.
- Memperlakukan `null` dengan benar sebagai primitif (meskipun `typeof null` adalah `"object"`).
- Membantu mempersempit nilai `unknown` sebelum melakukan operasi yang hanya berlaku untuk objek.

## Penggunaan

### Sintaks

Fungsi:

- `isPrimitive(value)`

Parameter:

- `value`: Nilai yang akan diperiksa apakah bertipe primitif.

### Impor fungsi lokal

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.isPrimitive(value)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 23.56.30 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>