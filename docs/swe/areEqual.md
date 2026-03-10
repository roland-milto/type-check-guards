# areEqual

## Beskrivning

`areEqual` kontrollerar om alla element i en array är lika med ett givet förväntat värde och returnerar `true` endast
för icke-tomma arrayer där varje post matchar.

### Användningsfall

Validera att en lista endast innehåller ett enda tillåtet värde (t.ex. att alla statusflaggor är `true`, alla roller är
`"admin"`, eller att alla numeriska poster är lika med en obligatorisk konstant) samtidigt som tom indata behandlas som
ogiltig (`false`).

> **Notis för TypeScript-användare:**
>
> Använd `areEqual` när du behöver en strikt kontroll av alla poster; den returnerar `false` för tomma arrayer och för
> all indata som inte är en array eller inte är ifylld.

### Fördelar

- Returnerar `true` endast när varje element matchar det förväntade värdet; annars returnerar den `false`.
- Failar snabbt: slutar kontrollera så snart ett element som inte matchar hittas.
- Skyddar mot ogiltig indata genom att returnera `false` när indata inte är en ifylld array.

## Användning

### Syntax

Funktion:

- `areEqual(value, expected)`

Parametrar:

- `value`: Arrayen som ska kontrolleras.
- `expected`: Elementet som varje arraypost ska jämföras mot.

### Lokal funktionsimport

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areEqual(value, expected)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:52:20 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>