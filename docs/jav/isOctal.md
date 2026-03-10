# isOctal

## Katrangan

Nemtokake apa sawijining nilai iku string literal oktal sing valid (contone `0o755`).

### Kahanan panggunaan

Validasi input pangguna utawa nilai konfigurasi sing kudu diwujudake minangka string literal oktal (umpamane, mode ijin
berkas kaya `0o644`) sadurunge diparse utawa diowahi.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isOctal` iku type guard (`value is string`). Sawise asil `true`, TypeScript nyepetake (narrow) variabel sing dipriksa
> dadi `string`.

### Kauntungan

- Nyedhiyakake type guard sing ketat: mbalekake `true` mung nalika input iku string sing cocog karo format literal
  oktal.
- Nolak string kosong lan string sing nduweni spasi ing ngarep/mburi (kontrol/spasi ASCII), supaya nyuda kecocokan sing
  ora disengaja.
- Ndhukung tandha opsional lan ora mbedakake huruf gedhe/cilik kanggo prefiks `0o`/`0O`.
- Luwes kanggo input non-string kanthi mbalekake `false` tinimbang mbuwang error.

## Panggunaan

### Sintaks

Fungsi:

- `isOctal(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // bener
console.log(isOctal(b)); // bener
console.log(isOctal(c)); // salah
console.log(isOctal(d)); // salah

if (isOctal(a)) {
  // a iku string ing kene
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isOctal(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 15:41:43 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>