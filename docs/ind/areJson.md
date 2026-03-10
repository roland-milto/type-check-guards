# areJson

## Deskripsi

Memeriksa apakah semua elemen dalam sebuah array adalah string JSON, mengembalikan `true` hanya jika array terisi dan
setiap item adalah JSON yang valid; jika tidak, mengembalikan `false`.

### Kasus penggunaan

Memvalidasi data masuk (misalnya, dari parameter kueri, variabel lingkungan, atau API eksternal) ketika Anda
mengharapkan sebuah array berisi string yang dikodekan sebagai JSON dan ingin menolak array kosong atau entri non-JSON
apa pun.

> **Catatan untuk pengguna TypeScript:**
>
> Gunakan `areJson` ketika Anda perlu memvalidasi bahwa sebuah `unknown[]` hanya berisi string JSON sebelum
> mem-parsing-nya (misalnya, dengan `JSON.parse`).

### Keunggulan

- Mengembalikan `true` hanya ketika setiap elemen adalah string JSON yang valid; jika tidak, mengembalikan `false`.
- Gagal cepat: berhenti memeriksa segera setelah elemen non-JSON ditemukan.
- Menolak array kosong secara desain, mengembalikan `false` untuk input yang tidak terisi.

## Penggunaan

### Sintaks

Fungsi:

- `areJson(array)`

Parameter:

- `array`: Array yang akan diperiksa untuk elemen string JSON.

### Impor fungsi lokal

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // benar
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // salah
const empty = areJson([]); // salah

```

### Impor objek global

Untuk mengimpor fungsi sebagai metode objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode berikut kemudian tersedia secara global:

- `Type.areJson(array)`

## Analisis fungsi

Di sini didokumentasikan analisis tabel dari keluaran yang dihasilkan saat memasukkan parameter yang berbeda ke dalam
fungsi: [areJson](../_analysis/areJson.md)

<br>

---

<small>Berkas dibuat pada 30 Januari 2026 pukul 16.16.11 (UTC) dengan menggunakan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>