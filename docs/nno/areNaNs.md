# areNaNs

## Skildring

`areNaNs` sjekkar om alle element i eit array er `NaN` og returnerer `true` berre dersom kvart element er `NaN`.

### Brukstilfelle

Valider innkomande data der `NaN` blir brukt som ein sentinelverdi, og du må sikre at heile arrayet utelukkande består
av `NaN` (t.d. for å oppdage ein heilt manglande numerisk serie).

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areNaNs` når du treng å validere at eit array berre inneheld den numeriske `NaN`-verdien (utan
> tvangskonvertering frå streng til tal).

### Fordelar

- Returnerer `true` berre når kvart element er `NaN` (streng sjekk av alle element).
- Tvingar ikkje strengar til tal; verdiar som "NaN" blir verande ikkje-`NaN` og gjer resultatet `false`.
- Returnerer `false` for ikkje-utfylte array, og hindrar utilsikta `true` ved tom input.

## Bruk

### Syntaks

Funksjon:

- `areNaNs(array)`

Parameter:

- `array`: Arrayet som skal sjekkast for `NaN`-verdiar.

### Lokal funksjonsimport

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // sann
const b = areNaNs([NaN, 1, NaN]); // usann
const c = areNaNs([NaN, "NaN", NaN]); // usann
const d = areNaNs([NaN, null, NaN]); // usann
const e = areNaNs([] as unknown[]); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areNaNs(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 15:52:45 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>