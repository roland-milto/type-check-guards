# isDecimal

## Katrangan

`isDecimal` mriksa apa sawijining nilai iku representasi string desimal tanpa spasi kosong ing ngarep/mburi lan nduweni
format desimal sing bener.

### Kahanan panggunaan

Nvalidasi kolom formulir, payload API, utawa nilai konfigurasi sing kudu diwenehake minangka string desimal (bisa
nganggo tandha +/−) tanpa spasi kosong ing sakubenge, sadurunge diparse utawa disimpen.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isDecimal` kanggo validasi input pangguna sadurunge diowahi (contone nganggo `Number(value)`), utamane
> nalika spasi kosong kudu ditolak.

### Kauntungan

- Nvalidasi kanthi ketat yen input iku string lan cocog karo pola literal desimal.
- Nolak spasi kosong ing ngarep lan mburi (kalebu karakter kontrol) supaya ora ana parsing sing ambigu.
- Mriksa cepet dhisik (mriksani tipe lan karakter pisanan/pungkasan) sadurunge mlakuake regex.
- Ngasilake asil boolean sing prasaja (`true`/`false`) sing trep kanggo guard lan validasi input.

## Panggunaan

### Sintaks

Fungsi:

- `isDecimal(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa nduweni format string desimal.

### Impor fungsi lokal

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v iku string ing kene (divalidasi nalika runtime)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isDecimal(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 15:52:54 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>