# getTypeOf

## Penerangan

`getTypeOf` mengembalikan label jenis yang terperinci dan mudah dibaca manusia untuk sesuatu nilai, termasuk jenis
numerik yang diperhalusi dan jenis objek yang khusus.

### Kes penggunaan

Gunakan `getTypeOf` untuk menyeragamkan pengesanan jenis dalam pengesahan input dan diagnostik—contohnya, untuk menolak
`nan`, menerima hanya ID `integer`, melayan rentetan numerik seperti `decimal` secara berbeza daripada `string` biasa,
atau untuk mengelog jenis objek yang tepat seperti `date` dan `regexp`.

> **Nota untuk pengguna TypeScript:**
>
> Jenis pulangan ialah `DataTypeAsString | string`. Anggap ia sebagai label deskriptif; bandingkan dengan literal yang
> diketahui seperti `integer`, `float`, `nan`, `array`, `null`, dan `undefined` apabila membuat percabangan.

### Kelebihan

- Mengembalikan rentetan jenis yang lebih terperinci berbanding `typeof` JavaScript, termasuk subjenis numerik seperti
  `integer`, `float`, dan `nan`.
- Membezakan `null` dan `undefined` secara jelas sebagai `null` dan `undefined`.
- Mengesan format rentetan numerik yang lazim dan melaporkannya sebagai `binary`, `octal`, `decimal`, atau `hexadecimal`
  dan bukannya sekadar `string`.
- Turut mengenal pasti tatasusunan sebagai `array` dan menggunakan `Object.prototype.toString` untuk memberikan nama
  jenis objek yang khusus (cth., `date`, `regexp`, `map`, `set`).
- Sangat berguna untuk pengesahan, pengelogan, dan penyahpepijatan apabila label jenis yang konsisten dan mudah dibaca
  manusia diperlukan.

## Penggunaan

### Sintaks

Fungsi:

- `getTypeOf(value)`

Parameter:

- `value`: Nilai yang jenis datanya hendak ditentukan.

### Import fungsi tempatan

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Semakan contoh
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.getTypeOf(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 13:16:03 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>