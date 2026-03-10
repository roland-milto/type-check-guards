# areFloats

## Beskrivning

`areFloats` kontrollerar om en given array är ifylld och om alla dess element är flyttal.

### Användningsfall

Använd `areFloats` när du tar emot en `unknown[]` (t.ex. från JSON, frågeparametrar eller externa API:er) och du behöver
säkerställa att det är en ifylld array där varje objekt är ett flyttal innan du kör numerisk logik såsom
medelvärdesberäkning, interpolation eller statistiska beräkningar.

> **Notis för TypeScript-användare:**
>
> Använd `areFloats` för att skydda `unknown[]` innan du behandlar den som `number[]` som endast innehåller flyttal; den
> returnerar `false` för tomma arrayer och för alla element som inte är flyttal.

### Fördelar

- Returnerar `true` endast när indata är en icke-tom array och varje element är ett flyttal.
- Misslyckas snabbt: returnerar `false` så snart ett element som inte är ett flyttal hittas.
- Hjälper till att validera okänd indata innan flyttalsspecifika beräkningar utförs.

## Användning

### Syntax

Funktion:

- `areFloats(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras efter flyttalselement.

### Lokal funktionsimport

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // sant
console.log(areFloats(b)); // falskt
console.log(areFloats(c)); // falskt

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areFloats(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Filen skapades 30 January 2026 at 15:59:46 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>