# areIndexesFound

## Beskrivning

`areIndexesFound` kontrollerar om ett värde är en icke-tom array vars element alla är giltiga index, och returnerar
`true` om de är det och `false` annars.

### Användningsfall

Validera användarlevererad eller extern data (t.ex. parsad JSON) som förväntas vara en lista med index innan den används
för att komma åt eller skära arrayer.

> **Notis för TypeScript-användare:**
>
> Använd `areIndexesFound` för att validera okänd indata innan du behandlar dess element som arrayindex; den returnerar
`false` för tomma arrayer och för arrayer som innehåller värden som inte är index.

### Fördelar

- Den returnerar `true` endast när indata är en fylld array och varje element är ett giltigt index.
- Misslyckas snabbt: returnerar `false` så snart ett element som inte är ett index påträffas.
- Användbar som en vakt innan värden används som arraypositioner eller offsetar.

## Användning

### Syntax

Funktion:

- `areIndexesFound(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för att uppfylla indexkraven.

### Lokal funktionsimport

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Här bekräftas att `a` är en ifylld array med index.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areIndexesFound(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Filen skapades 31 January 2026 at 01:04:21 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>