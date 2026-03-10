# arePlainObjects

## Deskripsi

Memeriksa apakah semua elemen dari sebuah array adalah objek biasa, mengembalikan `true` hanya jika setiap elemen
memenuhi syarat.

### Kasus penggunaan

Memvalidasi data eksternal atau tanpa tipe (mis., JSON yang di-parse, payload API, pengiriman formulir) untuk memastikan
Anda menerima array yang tidak kosong di mana setiap entri adalah objek biasa sebelum melakukan iterasi dan membaca
properti.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `arePlainObjects` untuk memvalidasi input yang tidak diketahui sebelum memperlakukannya sebagai
`Record<string, unknown>[]` (atau bentuk objek yang lebih ketat) di TypeScript.

### Keunggulan

- Memastikan setiap elemen dalam array input adalah objek biasa, mengembalikan `true` hanya ketika semua item cocok.
- Menolak input yang tidak valid lebih awal (bukan array atau array kosong) dengan mengembalikan `false`.
- Memperlakukan baik objek literal maupun objek `Object.create(null)` sebagai objek biasa yang valid.

## Penggunaan

### Sintaks

Fungsi:

- `arePlainObjects(array)`

Parameter:

- `array`: Array yang akan diperiksa apakah elemennya merupakan objek biasa.

### Impor fungsi lokal

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // benar
const b = arePlainObjects([{}, Object.create(null)]); // benar
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // salah
const d = arePlainObjects([] as unknown[]); // salah
```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.arePlainObjects(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 16.25.32 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>