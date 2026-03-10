# areUndefined

## Beskrivelse

`areUndefined` kontrollerer, om hvert element i en given array er `undefined`.

### Anvendelsestilfælde

Validér, at en liste af valgfrie resultater ikke indeholder nogen faktiske værdier (kun `undefined`), f.eks. efter
mapping af opslag, hvor manglende poster repræsenteres som `undefined`, og du vil bekræfte, at alle opslag mislykkedes.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areUndefined`, når du har brug for at fastslå, at en `unknown[]` kun indeholder `undefined`-værdier; den
> returnerer `false` for tomme arrays og ikke-array/ugyldige input på grund af den interne `isFilledArray`-kontrol.

### Fordele

- Returnerer `false` for ikke-arrays og tomme arrays ved at kræve en udfyldt array via `isFilledArray`.
- Sikrer, at hvert element er `undefined`, ikke kun nogle, hvilket gør hensigten eksplicit.
- Nyttig som et guard-lignende prædikat ved validering af ukendte input-samlinger.

## Brug

### Syntaks

Funktion:

- `areUndefined(array)`

Parametre:

- `array`: Arrayen, der skal kontrolleres for `undefined`-elementer.

### Lokal import af funktion

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Bemærk: returnerer false for tomme arrays
const r4 = areUndefined([]); // false
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areUndefined(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:55:22 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>