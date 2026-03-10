# isHexadecimal

## Katrangan

`isHexadecimal` mriksa apa sawijining nilai tartamtu iku literal string heksadesimal kanthi prefiks `0x`/`0X` sing
wajib.

### Kahanan panggunaan

Gunakake `isHexadecimal` kanggo nvalidasi nilai konfigurasi, kolom payload API, utawa argumen CLI sing kudu diwenehake
minangka literal string heksadesimal (contone ID, mask, utawa alamat) lan ora kena ngemot spasi putih ing sakubenge.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isHexadecimal` nalika sampeyan perlu nvalidasi input pangguna utawa data sing wis diserialisasi minangka
> string literal heksadesimal sing ketat (kalebu prefiks `0x`/`0X`) sadurunge diparse utawa dikonversi.

### Kauntungan

- Nvalidasi yen sawijining nilai iku string lan cocog karo format literal heksadesimal sing ketat (mbutuhake prefiks
  `0x`/`0X`).
- Nolak string sing nduweni spasi putih ing ngarep utawa ing mburi, mbantu nyegah panriman input sing kepadding kanthi
  ora sengaja.
- Ndhukung tandha opsional lan ora mbedakake huruf gedhe/cilik kanggo prefiks lan digit, ngasilake `true`/`false` kanthi
  bisa diprediksi.

## Panggunaan

### Sintaks

Fungsi:

- `isHexadecimal(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // bener
isHexadecimal("-0Xff"); // bener
isHexadecimal("1A2B"); // salah (awalan ora ana)
isHexadecimal(" 0x1A2B"); // salah (spasi ing ngarep)
isHexadecimal(0x1a2b); // salah (dudu string)
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isHexadecimal(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 22:59:09 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>