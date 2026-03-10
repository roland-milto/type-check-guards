# arePlainObjects

## Penerangan

Menyemak sama ada semua elemen dalam tatasusunan ialah objek biasa, mengembalikan `true` hanya jika setiap elemen
memenuhi syarat.

### Kes penggunaan

Sahkan data luaran atau tanpa jenis (contohnya JSON yang dihuraikan, muatan API, penyerahan borang) untuk memastikan
anda menerima tatasusunan tidak kosong di mana setiap entri ialah objek biasa sebelum mengiterasi dan membaca sifat.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `arePlainObjects` untuk mengesahkan input tidak diketahui sebelum menganggapnya sebagai
`Record<string, unknown>[]` (atau bentuk objek yang lebih ketat) dalam TypeScript.

### Kelebihan

- Memastikan setiap elemen dalam tatasusunan input ialah objek biasa, mengembalikan `true` hanya apabila semua item
  sepadan.
- Menolak input tidak sah lebih awal (bukan tatasusunan atau tatasusunan kosong) dengan mengembalikan `false`.
- Menganggap kedua-dua objek literal dan objek `Object.create(null)` sebagai objek biasa yang sah.

## Penggunaan

### Sintaks

Fungsi:

- `arePlainObjects(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi elemen objek biasa.

### Import fungsi tempatan

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // benar
const b = arePlainObjects([{}, Object.create(null)]); // benar
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // palsu
const d = arePlainObjects([] as unknown[]); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.arePlainObjects(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 16:56:49 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>