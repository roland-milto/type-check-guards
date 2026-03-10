# isSet

## Penerangan

Menentukan sama ada nilai yang diberikan ialah `Set`.

### Kes penggunaan

Sahkan input daripada sumber luaran (cth., penguraian JSON, input pengguna, atau API pihak ketiga) untuk memastikan
sesuatu nilai ialah `Set` sebelum melakukan operasi `Set`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isSet` untuk mengecilkan nilai `unknown` sebelum memanggil API khusus `Set` seperti `.add`, `.has`, atau
`.size`.

### Kelebihan

- Menyediakan semakan masa jalan yang ringkas untuk mengesahkan sama ada sesuatu nilai ialah `Set`.
- Membantu mencegah ralat jenis dengan membolehkan percabangan awal apabila sesuatu nilai bukan `Set`.
- Berfungsi dengan apa-apa kandungan `Set` (kosong atau berisi) dan mengembalikan `true`/`false` secara konsisten.

## Penggunaan

### Sintaks

Fungsi:

- `isSet(value)`

Parameter:

- `value`: Nilai untuk diperiksa.

### Import fungsi tempatan

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a ialah Set semasa masa jalan
  console.log(a.size);
}

console.log(isSet(b)); // palsu
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isSet(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isSet](../_analysis/isSet.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 23:11:57 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>