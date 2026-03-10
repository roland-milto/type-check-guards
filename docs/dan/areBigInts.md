# areBigInts

## Beskrivelse

`areBigInts` afgør, om en værdi er et ikke-tomt array, der kun indeholder `bigint`-værdier.

### Anvendelsestilfælde

Validér ukendt input (f.eks. parsed JSON-lignende data, API-payloads eller funktionsparametre typet som `unknown`) for
at sikre, at det er et ikke-tomt array af `bigint`-værdier før behandling; returnerer kun `true`, når alle elementer er
`bigint`, ellers `false`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areBigInts` som en runtime-guard, før du udfører `bigint`-kun operationer (f.eks. aritmetik, sammenligninger) på
> ukendt input.

### Fordele

- Sikrer, at hvert element er en `bigint`, og returnerer kun `true`, når hele arrayet matcher.
- Afviser ikke-arrays og tomme arrays som standard (via `isFilledArray`), hvilket forhindrer utilsigtet accept af
  ugyldige input.
- Hurtigt stop: returnerer `false`, så snart et ikke-`bigint`-element findes.

## Brug

### Syntaks

Funktion:

- `areBigInts(array)`

Parametre:

- `array`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // sand
console.log(areBigInts(b)); // falsk
console.log(areBigInts(c)); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areBigInts(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:25:34 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>