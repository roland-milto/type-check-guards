# areJson

## Penerangan

Menyemak sama ada semua elemen dalam tatasusunan ialah rentetan JSON, mengembalikan `true` hanya jika tatasusunan diisi
dan setiap item ialah JSON yang sah; jika tidak mengembalikan `false`.

### Kes penggunaan

Sahkan data masuk (contohnya, daripada parameter kueri, pembolehubah persekitaran, atau API luaran) apabila anda
menjangkakan tatasusunan rentetan yang dikodkan JSON dan mahu menolak tatasusunan kosong atau sebarang entri bukan JSON.

> **Nota untuk pengguna TypeScript:**
>
> Gunakan `areJson` apabila anda perlu mengesahkan bahawa `unknown[]` hanya mengandungi rentetan JSON sebelum
> menghuraikannya (contohnya, dengan `JSON.parse`).

### Kelebihan

- Mengembalikan `true` hanya apabila setiap elemen ialah rentetan JSON yang sah; jika tidak mengembalikan `false`.
- Gagal dengan pantas: berhenti menyemak sebaik sahaja elemen bukan JSON ditemui.
- Menolak tatasusunan kosong secara reka bentuk, mengembalikan `false` untuk input yang tidak diisi.

## Penggunaan

### Sintaks

Fungsi:

- `areJson(array)`

Parameter:

- `array`: Tatasusunan yang hendak diperiksa bagi elemen rentetan JSON.

### Import fungsi tempatan

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // benar
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // palsu
const empty = areJson([]); // palsu

```

### Import objek global

Untuk mengimport fungsi sebagai kaedah objek global, gunakan:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kemudian kaedah berikut akan tersedia secara global:

- `Type.areJson(array)`

## Analisis fungsi

Di sini didokumenkan analisis jadual tentang output yang terhasil apabila memasukkan parameter berbeza ke dalam
fungsi: [areJson](../_analysis/areJson.md)

<br>

---

<small>Fail ini dijana pada 30 January 2026 at 16:18:20 (UTC) dengan penggunaan *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** oleh *
*[Roland Milto](https://roland-milto.de/)**.</small>