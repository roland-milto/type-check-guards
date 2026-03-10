# areFalse

## Beskrivelse

`areFalse` sjekker om alle elementer i en gitt array er strengt den boolske verdien `false`.

### Brukstilfelle

Valider at en liste med feature flags, sjekker eller guard-resultater alle er `false` før du går videre (f.eks. bekreft
at ingen blokkerende betingelser er til stede).

> **Merknad for TypeScript-brukere:**
>
> Bruk `areFalse` når du trenger en streng validering av at en array ikke er tom og kun inneholder den boolske verdien
`false`.

### Fordeler

- Sikrer at hvert element er strengt `false` (ingen truthy/falsey-konvertering).
- Returnerer `false` for ikke-arrays eller tomme arrays ved å kreve en fylt array via `isFilledArray`.
- Stopper tidlig ved det første ikke-`false`-elementet for effektivitet.

## Bruk

### Syntaks

Funksjon:

- `areFalse(array)`

Parametere:

- `array`: Arrayen som skal sjekkes, som inneholder elementer av hvilken som helst type.

### Lokal funksjonsimport

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // sann
const b = areFalse([false, true, false]);  // usann
const c = areFalse([false, "false", false]); // usann
const d = areFalse([]); // usann

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areFalse(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 16:18:03 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>