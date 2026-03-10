# isNaN

## Katrangan

Nemtokake apa `value` sing diwenehake iku `NaN` kanthi jinis `number` tanpa ngowahi string.

### Kahanan panggunaan

Validasi input sing ora dipercaya utawa tipené longgar (umpamane payload API, nilai formulir, JSON sing diparsing)
kanggo ndeteksi nilai khusus `NaN` lan nangani kanthi eksplisit, nalika nganggep input sing dudu angka dudu `NaN`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isNaN` nalika kowe perlu ndeteksi nilai angka khusus `NaN` nalika mesthekake inputé pancen `number` (ora ana
> konversi string-dadi-angka).

### Kauntungan

- Mriksani apa sawijining nilai iku `NaN` tanpa meksa nilai sing dudu angka (umpamane string) dadi angka.
- Mbalekake `true` mung kanggo nilai sing loro-lorone jinisé `number` lan `NaN`.
- Aman kanggo input `unknown` lan ngindhari positif palsu saka konversi implisit.

## Panggunaan

### Sintaks

Fungsi:

- `isNaN(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa iku `NaN` kanthi jinis `number`.

### Impor fungsi lokal

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // bener
console.log(isNaN(b)); // salah
console.log(isNaN(c)); // salah

if (isNaN(a)) {
  // a iku angka lan mligi NaN
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isNaN(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 15:46:38 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>