# areFinite

## Beskrivelse

`areFinite` kontrollerer, om en værdi er et ikke-tomt array, hvis elementer alle er endelige tal, og returnerer `true` i
så fald og ellers `false`.

### Anvendelsestilfælde

Validér numeriske input-arrays (f.eks. diagramserier, koordinatlister, måleprøver) før der udføres beregninger, så
resultatet kun er `true`, når alle værdier er endelige tal.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areFinite`, når du skal sikre, at et array ikke er tomt og kun indeholder endelige tal; den returnerer `false`
> for tomme arrays og for arrays, der indeholder `NaN` eller uendeligheder.

### Fordele

- Returnerer kun `true`, når inputtet er et ikke-tomt array, og hvert element er et endeligt tal.
- Afviser `Infinity`, `-Infinity` og `NaN` ved at basere sig på `isFinite`-tjek for hvert element.
- Giver et simpelt boolesk resultat (`true`/`false`), der egner sig til guards og valideringsflows.

## Brug

### Syntaks

Funktion:

- `areFinite(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for, om alle dets elementer er endelige.

### Lokal import af funktion

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // sand
console.log(areFinite(b)); // falsk
console.log(areFinite(c)); // falsk

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areFinite(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 16:34:14 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>