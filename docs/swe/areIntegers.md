# areIntegers

## Beskrivning

`areIntegers` avgör om alla element i en given array är heltal och returnerar `true` om de är det och `false` annars.

### Användningsfall

Använd `areIntegers` för att validera användarangiven eller extern data (t.ex. frågeparametrar, JSON-payloads,
CSV-rader) när din logik kräver en ifylld lista med heltalsvärden såsom ID:n, räknare, paginerings-offsets eller
arrayindex.

> **Notis för TypeScript-användare:**
>
> Använd `areIntegers` som en runtime-guard för `unknown[]`-indata innan du behandlar dem som `number[]` som endast
> innehåller heltal. Om den returnerar `false` är indata antingen inte en ifylld array eller så innehåller den minst ett
> värde som inte är ett heltal.

### Fördelar

- Returnerar `true` endast när varje element är ett heltal; annars returnerar den `false`.
- Hjälper till att validera okänd indata innan heltalsbaserade operationer utförs (t.ex. indexering, antal, ID:n).
- Misslyckas snabbt: slutar kontrollera så snart ett icke-heltal hittas.

## Användning

### Syntax

Funktion:

- `areIntegers(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för heltalselement.

### Lokal funktionsimport

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // sant
console.log(areIntegers(b)); // sant
console.log(areIntegers(c)); // falskt

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areIntegers(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Filen skapades 31 January 2026 at 01:00:40 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>