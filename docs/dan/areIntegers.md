# areIntegers

## Beskrivelse

`areIntegers` afgør, om alle elementer i et givent array er heltal, og returnerer `true`, hvis de er, og `false` ellers.

### Anvendelsestilfælde

Brug `areIntegers` til at validere brugerleverede eller eksterne data (f.eks. query-parametre, JSON-payloads,
CSV-rækker), når din logik kræver en udfyldt liste af heltalsværdier såsom ID'er, tællere, paginerings-offsets eller
arrayindekser.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areIntegers` som en runtime-guard for `unknown[]`-input, før du behandler det som `number[]`, der kun indeholder
> heltal. Hvis den returnerer `false`, er input enten ikke et udfyldt array eller indeholder mindst én ikke-heltalsværdi.

### Fordele

- Returnerer `true` kun når hvert element er et heltal; ellers returnerer den `false`.
- Hjælper med at validere ukendt input, før der udføres operationer, der kun må bruge heltal (f.eks. indeksering,
  optællinger, ID'er).
- Fejler hurtigt: stopper kontrollen, så snart et ikke-heltals-element findes.

## Brug

### Syntaks

Funktion:

- `areIntegers(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for heltalselementer.

### Lokal import af funktion

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // sand
console.log(areIntegers(b)); // sand
console.log(areIntegers(c)); // falsk

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areIntegers(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:58:01 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>