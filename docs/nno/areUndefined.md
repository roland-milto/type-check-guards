# areUndefined

## Skildring

`areUndefined` sjekkar om kvart element i eit gjeve array er `undefined`.

### Brukstilfelle

Valider at ei liste med valfrie resultat ikkje inneheld nokon faktiske verdiar (berre `undefined`), til dømes etter
mapping av oppslag der manglande oppføringar er representerte som `undefined`, og du vil stadfeste at alle oppslaga
feila.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areUndefined` når du treng å slå fast at eit `unknown[]` berre inneheld `undefined`-verdiar; det returnerer
`false` for tomme array og ikkje-array/ugyldige inndata på grunn av den interne `isFilledArray`-sjekken.

### Fordelar

- Returnerer `false` for ikkje-arrays og tomme array ved å krevje eit utfylt array via `isFilledArray`.
- Sikrar at kvart element er `undefined`, ikkje berre nokre, og gjer intensjonen eksplisitt.
- Nyttig som eit vakt-stil predikat når ein validerer ukjende inndatasamlingar.

## Bruk

### Syntaks

Funksjon:

- `areUndefined(array)`

Parameter:

- `array`: Arrayet som skal sjekkast for `undefined`-element.

### Lokal funksjonsimport

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Merk: returnerer false for tomme array
const r4 = areUndefined([]); // false
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areUndefined(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:57:08 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>