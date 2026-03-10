# areOneOfType

## Penerangan

`areOneOfType` menyemak sama ada semua elemen dalam tatasusunan tidak kosong adalah daripada salah satu jenis masa jalan
yang ditentukan.

### Kes penggunaan

Sahkan data masuk (contohnya, JSON yang dihuraikan) apabila satu medan mesti merupakan tatasusunan tidak kosong yang
itemnya dihadkan kepada set jenis primitif yang diketahui; kembalikan `false` apabila tatasusunan kosong atau
mengandungi sebarang jenis yang tidak dibenarkan.

> **Nota untuk pengguna TypeScript:**
>
> Fungsi ini mengembalikan boolean dan tidak mengecilkan jenis elemen tatasusunan pada masa kompilasi; gunakannya
> sebagai langkah pengesahan masa jalan sebelum pemprosesan lanjut.

### Kelebihan

- Memastikan setiap elemen dalam tatasusunan sepadan dengan sekurang-kurangnya satu jenis masa jalan yang dibenarkan,
  mengembalikan `true` hanya apabila keseluruhan tatasusunan lulus.
- Menolak input tidak sah lebih awal: mengembalikan `false` apabila `array` atau `types` kosong atau bukan tatasusunan
  yang berisi.
- Berguna untuk mengesahkan koleksi jenis bercampur (contohnya, nombor dan rentetan) dengan satu panggilan kepada
  `areOneOfType`.

## Penggunaan

### Sintaks

Fungsi:

- `areOneOfType(array, types)`

Parameter:

- `array`: Tatasusunan elemen untuk disahkan terhadap jenis yang dibekalkan.
- `types`: Tatasusunan rentetan yang mewakili jenis data untuk diperiksa.

### Import fungsi tempatan

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areOneOfType(array, types)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Fail ini dijana pada 31 January 2026 at 23:39:27 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>