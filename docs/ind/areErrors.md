# areErrors

## Deskripsi

Memeriksa apakah sebuah array tidak kosong dan hanya berisi objek `Error`, mengembalikan `true` atau `false`.

### Kasus penggunaan

Memvalidasi bahwa `unknown[]` yang disediakan saat runtime (misalnya kegagalan yang digabungkan, hasil validasi, atau
data yang dideserialisasi) adalah daftar objek `Error` yang tidak kosong sebelum melakukan iterasi, pencatatan, atau
melempar ulang.

> **Catatan untuk pengguna TypeScript:**
>
> `areErrors` mengembalikan `true` hanya untuk array yang terisi di mana setiap item adalah `Error`; mengembalikan
`false` untuk array kosong atau jika ada elemen yang bukan `Error`.

### Keunggulan

- Memastikan setiap elemen adalah instans `Error`, sehingga memungkinkan penanganan dan pencatatan kesalahan yang aman.
- Menolak array kosong, mencegah keadaan “tanpa kesalahan” yang tidak sengaja diperlakukan sebagai daftar kesalahan yang
  valid.
- Berfungsi baik sebagai penjaga runtime saat menangani input `unknown[]` (misalnya dari API atau blok `catch`).

## Penggunaan

### Sintaks

Fungsi:

- `areErrors(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk objek `Error`.

### Impor fungsi lokal

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value adalah array tidak kosong dari objek Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areErrors(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Berkas dibuat pada 6 Februari 2026 pukul 12.33.57 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>