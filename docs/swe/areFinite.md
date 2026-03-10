# areFinite

## Beskrivning

`areFinite` kontrollerar om ett värde är en icke-tom array vars element alla är ändliga tal, och returnerar `true` i så
fall och `false` annars.

### Användningsfall

Validera numeriska indata-arrayer (t.ex. diagramserier, koordinatlistor, mätprover) innan du utför beräkningar, och
säkerställ att resultatet är `true` endast när alla värden är ändliga tal.

> **Notis för TypeScript-användare:**
>
> Använd `areFinite` när du behöver säkerställa att en array är icke-tom och endast innehåller ändliga tal; den
> returnerar `false` för tomma arrayer och för arrayer som innehåller `NaN` eller oändligheter.

### Fördelar

- Returnerar `true` endast när indata är en icke-tom array och varje element är ett ändligt tal.
- Avvisar `Infinity`, `-Infinity` och `NaN` genom att förlita sig på `isFinite`-kontroller för varje element.
- Ger ett enkelt booleskt resultat (`true`/`false`) som passar för guards och valideringsflöden.

## Användning

### Syntax

Funktion:

- `areFinite(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för att alla dess element är ändliga.

### Lokal funktionsimport

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // sant
console.log(areFinite(b)); // falskt
console.log(areFinite(c)); // falskt

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areFinite(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Filen skapades 30 January 2026 at 16:37:25 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>