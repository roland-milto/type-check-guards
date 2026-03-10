# areOctals

## Penerangan

`areOctals` menentukan sama ada nilai yang diberikan ialah tatasusunan tidak kosong bagi rentetan oktal yang sah.

### Kes penggunaan

Gunakan `areOctals` apabila mengesahkan input pengguna, nilai konfigurasi, atau muatan API yang mesti mengandungi
literal oktal (contohnya, mod kebenaran fail seperti `0o755`) dan anda mahu menolak tatasusunan kosong atau sebarang
entri tidak sah dengan mengembalikan `false`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areOctals` untuk memastikan anda mempunyai `unknown[]` yang tidak kosong di mana setiap entri ialah rentetan
> oktal yang sah sebelum menukar (contohnya, melalui `Number(...)` atau penghuraian tersuai).

### Kelebihan

- Mengesahkan bahawa sesuatu nilai ialah tatasusunan tidak kosong di mana setiap elemen ialah rentetan oktal,
  mengembalikan `true` hanya apabila semua item lulus.
- Gagal dengan pantas: mengembalikan `false` sebaik sahaja elemen bukan oktal ditemui.
- Berguna sebagai pengawal sebelum menghuraikan atau menukar rentetan oktal untuk mengelakkan ralat masa jalan dan
  pengendalian input yang tidak konsisten.

## Penggunaan

### Sintaks

Fungsi:

- `areOctals(array)`

Parameter:

- `array`: Nilai yang hendak diperiksa.

### Import fungsi tempatan

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value ialah tatasusunan tidak kosong bagi rentetan oktal
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areOctals(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 14:59:19 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>