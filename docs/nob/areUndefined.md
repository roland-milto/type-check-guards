# areUndefined

## Beskrivelse

`areUndefined` sjekker om hvert element i en gitt array er `undefined`.

### Brukstilfelle

Valider at en liste med valgfrie resultater ikke inneholder noen faktiske verdier (kun `undefined`), f.eks. etter
mapping av oppslag der manglende oppføringer representeres som `undefined`, og du vil bekrefte at alle oppslag
mislyktes.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areUndefined` når du trenger å fastslå at en `unknown[]` kun inneholder `undefined`-verdier; den returnerer
`false` for tomme arrays og ikke-array/ugyldige inndata på grunn av den interne `isFilledArray`-sjekken.

### Fordeler

- Returnerer `false` for ikke-arrays og tomme arrays ved å kreve en utfylt array via `isFilledArray`.
- Sikrer at hvert element er `undefined`, ikke bare noen, noe som gjør intensjonen eksplisitt.
- Nyttig som et guard-lignende predikat ved validering av ukjente inndatasamlinger.

## Bruk

### Syntaks

Funksjon:

- `areUndefined(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for `undefined`-elementer.

### Lokal funksjonsimport

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Merk: returnerer false for tomme arrayer
const r4 = areUndefined([]); // false

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areUndefined(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:57:11 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>