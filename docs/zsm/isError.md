# isError

## Penerangan

Menyemak sama ada `value` yang diberikan ialah instans `Error`.

### Kes penggunaan

Gunakan `isError` apabila anda menerima nilai `unknown` (seperti daripada blok `catch`, callback, atau pustaka luaran)
dan anda perlu menentukan dengan selamat sama ada ia ialah `Error` sebelum membaca `message`, `name`, atau `stack`.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `isError` untuk mengawal nilai `unknown` (cth., daripada `catch`) sebelum menganggapnya sebagai `Error`.

### Kelebihan

- Menyediakan semakan masa jalan yang ringkas untuk menentukan sama ada sesuatu nilai ialah instans `Error`.
- Membantu mengecilkan input yang tidak diketahui sebelum mengakses sifat `Error` seperti `message` atau `stack`.
- Mengurangkan risiko pengecualian masa jalan apabila mengendalikan nilai daripada `catch`, API luaran, atau sumber
  tanpa jenis.

## Penggunaan

### Sintaks

Fungsi:

- `isError(value)`

Parameter:

- `value`: Nilai untuk disemak terhadap jenis `Error`.

### Import fungsi tempatan

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.isError(value)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [isError](../_analysis/isError.md)

<br>

---

<small>Fail ini dijana pada 6 February 2026 at 12:47:51 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>