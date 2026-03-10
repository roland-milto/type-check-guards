# areValidDates

## Penerangan

Menentukan sama ada sesuatu tatasusunan tidak kosong dan terdiri sepenuhnya daripada objek `Date` yang sah.

### Kes penggunaan

Gunakan `areValidDates` untuk mengesahkan tatasusunan yang dibekalkan pengguna atau API sebelum melakukan operasi
berasaskan tarikh (pengisihan, semakan julat, pemformatan), memastikan semua entri ialah objek `Date` yang sebenar dan
sah serta senarai itu tidak kosong.

> **Nota untuk pengguna TypeScript:**
>
> `areValidDates` mengembalikan `false` untuk tatasusunan kosong; pastikan tatasusunan itu memang bertujuan untuk tidak
> kosong sebelum bergantung padanya sebagai langkah pengesahan.

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen ialah instans `Date` yang sah (tiada tarikh tidak sah seperti
  `new Date('invalid')`).
- Menolak input kosong dengan mengembalikan `false`, memastikan anda hanya menerima senarai tarikh yang bermakna dan
  tidak kosong.
- Menyediakan semakan boolean gaya pengawal yang ringkas dan mudah digabungkan dengan pengesahan lain.

## Penggunaan

### Sintaks

Fungsi:

- `areValidDates(array)`

Parameter:

- `array`: Tatasusunan untuk diperiksa, yang berkemungkinan mengandungi objek `Date`.

### Import fungsi tempatan

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // benar
console.log(areValidDates(b)); // palsu
console.log(areValidDates(c)); // palsu
console.log(areValidDates(d)); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areValidDates(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:34:55 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>