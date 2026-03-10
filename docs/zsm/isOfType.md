# isOfType

## Penerangan

Menentukan sama ada `value` yang diberikan sepadan dengan rentetan jenis yang ditentukan, menggunakan `typeof` untuk
jenis primitif dan sandaran untuk jenis kompleks.

### Kes penggunaan

Sahkan dan sempitkan input `unknown` (cth., respons API, input pengguna, JSON yang dihuraikan) dengan menyemak sama ada
sesuatu nilai adalah daripada rentetan jenis yang dijangka sebelum melakukan operasi khusus jenis.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isOfType` untuk membuat percabangan berdasarkan jenis masa jalan apabila bekerja dengan nilai `unknown`; ia
> mengembalikan `true`/`false` dan mengendalikan `null` serta `undefined` secara eksplisit.

### Kelebihan

- Menyemak jenis primitif melalui `typeof` secara terus untuk kelajuan dan kejelasan.
- Mengendalikan `null` dan `undefined` dengan betul, yang tidak dapat dibezakan seperti yang dimaksudkan oleh `typeof`
  sahaja.
- Menyokong rentetan jenis yang kompleks atau tersuai melalui perbandingan sandaran menggunakan `getTypeOf`.
- Mengembalikan hasil boolean yang ringkas (`true`/`false`) sesuai untuk pengawal (guards) dan percabangan.

## Penggunaan

### Sintaks

Fungsi:

- `isOfType(value, type)`

Parameter:

- `value`: Nilai untuk diuji terhadap `type`.
- `type`: Perwakilan rentetan bagi jenis untuk disemak.

### Import fungsi tempatan

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input ialah nombor di sini
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input ialah rentetan di sini
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isOfType(value, type)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 17:07:41 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>