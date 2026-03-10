# isOneOfType

## Penerangan

`isOneOfType` menentukan sama ada `value` yang diberikan sepadan dengan sekurang-kurangnya satu daripada rentetan jenis
yang disediakan, mengembalikan `true` jika sebarang padanan ditemui dan `false` jika tidak.

### Kes penggunaan

Sahkan data yang ditaip secara longgar atau data luaran (contohnya, JSON yang dihuraikan, parameter kueri) dengan
membenarkan berbilang jenis masa jalan yang boleh diterima (seperti `number` atau `string`) sebelum meneruskan dengan
logik seterusnya.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isOneOfType` apabila anda mahukan semakan masa jalan bahawa sesuatu nilai sepadan dengan mana-mana daripada
> beberapa jenis yang dibenarkan; ia mengembalikan `true` jika sekurang-kurangnya satu jenis sepadan, jika tidak `false`.

### Kelebihan

- Menyemak sesuatu nilai terhadap berbilang jenis yang dibenarkan dalam satu panggilan, mengembalikan `true` pada
  padanan pertama.
- Ia menyediakan hasil boolean yang ringkas dan mudah digabungkan dengan logik bersyarat serta pemulangan awal.
- Ia berfungsi dengan input `unknown`, menjadikannya berguna pada sempadan masa jalan (contohnya, data luaran, input
  pengguna).

## Penggunaan

### Sintaks

Fungsi:

- `isOneOfType(value, types)`

Parameter:

- `value`: Nilai yang akan disemak terhadap jenis yang ditentukan.
- `types`: Tatasusunan rentetan jenis yang mewakili jenis-jenis berpotensi bagi nilai tersebut.

### Import fungsi tempatan

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input ialah objek pada masa jalan
}

console.log(isOneOfType(3, ["number", "string"])); // benar
console.log(isOneOfType("hello", ["number", "boolean"])); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isOneOfType(value, types)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 13:59:36 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>