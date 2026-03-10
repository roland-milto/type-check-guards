# areNaNs

## Beskrivelse

`areNaNs` sjekker om alle elementer i en array er `NaN` og returnerer `true` bare hvis hvert element er `NaN`.

### Brukstilfelle

Valider innkommende data der `NaN` brukes som en sentinelverdi, og du må sikre at hele arrayen utelukkende består av
`NaN` (f.eks. ved deteksjon av en numerisk serie der alle verdier mangler).

> **Merknad for TypeScript-brukere:**
>
> Bruk `areNaNs` når du må validere at en array kun inneholder den numeriske `NaN`-verdien (uten tvangskonvertering fra
> streng til tall).

### Fordeler

- Returnerer `true` bare når hvert element er `NaN` (streng sjekk av alle elementer).
- Tvinger ikke strenger til tall; verdier som "NaN" forblir ikke-`NaN` og gjør resultatet `false`.
- Returnerer `false` for ikke-utfylte arrayer, og forhindrer utilsiktet `true` ved tom input.

## Bruk

### Syntaks

Funksjon:

- `areNaNs(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for `NaN`-verdier.

### Lokal funksjonsimport

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // sant
const b = areNaNs([NaN, 1, NaN]); // falsk
const c = areNaNs([NaN, "NaN", NaN]); // falsk
const d = areNaNs([NaN, null, NaN]); // falsk
const e = areNaNs([] as unknown[]); // falsk
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areNaNs(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 15:52:52 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>