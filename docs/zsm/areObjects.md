# areObjects

## Penerangan

`areObjects` menyemak sama ada tatasusunan terisi yang diberikan mengandungi objek sahaja.

### Kes penggunaan

Gunakan `areObjects` apabila anda menerima tatasusunan yang tidak diketahui (cth., daripada penguraian JSON atau API
luaran) dan perlu memastikan ia tidak kosong serta setiap elemen ialah objek sebelum mengiterasi dan mengakses sifat
objek.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areObjects` untuk mengesahkan `unknown[]` sebelum menganggap item sebagai objek; ia mengembalikan `false`
> untuk tatasusunan kosong.

### Kelebihan

- Mengembalikan `true` hanya apabila input ialah tatasusunan yang terisi dan setiap elemen ialah objek.
- Berhenti awal dan mengembalikan `false` sebaik sahaja elemen bukan objek ditemui.
- Membantu mengesahkan input yang tidak diketahui sebelum melakukan operasi khusus objek.

## Penggunaan

### Sintaks

Fungsi:

- `areObjects(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa sama ada mengandungi elemen objek.

### Import fungsi tempatan

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value ialah tatasusunan objek yang terisi
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areObjects(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 00:11:13 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>