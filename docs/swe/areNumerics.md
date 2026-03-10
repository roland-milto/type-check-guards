# areNumerics

## Beskrivning

`areNumerics` kontrollerar om ett värde är en icke-tom array där alla element är numeriska.

### Användningsfall

Använd `areNumerics` för att validera extern eller otypad data (t.ex. JSON-nyttolaster, frågeparametrar,
formulärinmatning) innan du beräknar summor, medelvärden eller andra numeriska operationer, och säkerställ att indata är
en icke-tom numerisk array och annars returnera `false`.

> **Notis för TypeScript-användare:**
>
> Använd `areNumerics` för att skydda `unknown`-indata innan du behandlar den som en numerisk array; den returnerar
`false` för icke-arrayer och tomma arrayer.

### Fördelar

- Returnerar `true` endast när indata är en icke-tom array och varje element är numeriskt.
- Misslyckas snabbt: slutar kontrollera så snart ett icke-numeriskt element hittas och returnerar `false`.
- Hjälper till att validera okänd indata på ett säkert sätt innan numeriska operationer utförs.

## Användning

### Syntax

Funktion:

- `areNumerics(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för numeriska element.

### Lokal funktionsimport

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // sant
console.log(areNumerics(b)); // sant
console.log(areNumerics(c)); // falskt
console.log(areNumerics(d)); // falskt
console.log(areNumerics(e)); // falskt

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areNumerics(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Filen skapades 6 February 2026 at 16:07:39 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>