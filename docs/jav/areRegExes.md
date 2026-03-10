# areRegExes

## Katrangan

`areRegExes` mriksa apa sawijining nilai iku larik sing kebak lan mung ngemot obyek `RegExp`.

### Kahanan panggunaan

Validasi yèn opsi konfigurasi (umpamané, dhaptar pola allow/deny) iku larik ekspresi reguler sing ora kosong sadurungé
digunakaké kanggo nyocogaké.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakna `areRegExes` kanggo nyepetaké tipe saka `unknown` dadi `RegExp[]` sadurungé ngiterasi utawa nyusun pola.

### Kauntungan

- Njamin yèn sawijining nilai iku larik sing ora kosong lan saben unsur iku instansi `RegExp`.
- Nyedhiyakake penjaga boolean sing prasaja (`true`/`false`) kanggo mriksa validitas input pangguna utawa konfigurasi.
- Mbantu nyegah kesalahan runtime nalika kode sabanjuré nganggep kabèh item ndhukung operasi ekspresi reguler.

## Panggunaan

### Sintaks

Fungsi:

- `areRegExes(array)`

Paramèter:

- `array`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns iku larik RegExp ing kene
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areRegExes(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:19:08 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>