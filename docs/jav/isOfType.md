# isOfType

## Katrangan

Nemtokake apa `value` tartamtu cocog karo string jinis sing ditemtokake, nganggo `typeof` kanggo primitif lan cara
cadangan kanggo jinis sing kompleks.

### Kahanan panggunaan

Validasi lan nyepetake (narrow) input `unknown` (umpamane respons API, input pangguna, JSON sing wis diparse) kanthi
mriksa apa sawijining nilai iku kalebu string jinis sing diarep-arep sadurunge nindakake operasi sing gumantung marang
jinis.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isOfType` kanggo nggawe cabang adhedhasar jinis runtime nalika nggarap nilai `unknown`; fungsi iki mbalekake
`true`/`false` lan nambani `null` lan `undefined` kanthi eksplisit.

### Kauntungan

- Mriksani primitif nganggo `typeof` langsung supaya cepet lan cetha.
- Nangani `null` lan `undefined` kanthi bener, sing ora bisa dibedakake kaya sing dikarepake yen mung nganggo `typeof`
  wae.
- Ndhukung string jinis sing kompleks utawa kustom liwat pambandhingan cadangan nganggo `getTypeOf`.
- Mbalekake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard lan branching.

## Panggunaan

### Sintaks

Fungsi:

- `isOfType(value, type)`

Paramèter:

- `value`: Nilai sing arep diuji marang `type`.
- `type`: Representasi string saka jinis sing arep dicek.

### Impor fungsi lokal

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input iku angka ing kene
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input iku string ing kene
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isOfType(value, type)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 17:00:20 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>