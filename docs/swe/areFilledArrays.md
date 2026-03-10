# areFilledArrays

## Beskrivning

`areFilledArrays` kontrollerar om en tvådimensionell array inte är tom och att alla dess underarrayer inte är tomma.

### Användningsfall

Använd `areFilledArrays` för att validera tabell- eller matrisliknande indata (t.ex. CSV-rader, rutnätsdata, grupperade
resultat) så att du säkert kan anta att det finns minst en underarray och att ingen av underarrayerna är tom.

> **Notis för TypeScript-användare:**
>
> Använd `areFilledArrays` när du behöver säkerställa att en 2D-array har minst en rad och att varje rad har minst ett
> element innan du itererar över den eller indexerar i den.

### Fördelar

- Validerar att den yttre arrayen inte är tom och att varje inre array också inte är tom, och returnerar `true` endast
  när båda villkoren är uppfyllda.
- Fungerar med alla elementtyper inuti underarrayerna (t.ex. tal, strängar, objekt, nästlade arrayer) eftersom den bara
  kontrollerar om arrayen är ”fylld”, inte elementens innehåll.
- Ger ett enkelt booleskt resultat (`true`/`false`) som passar som skydd innan tvådimensionella data bearbetas.

## Användning

### Syntax

Funktion:

- `areFilledArrays(array)`

Parametrar:

- `array`: Den tvådimensionella arrayen som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // sant
console.log(areFilledArrays(b)); // sant
console.log(areFilledArrays(c)); // sant
console.log(areFilledArrays(d)); // falskt
console.log(areFilledArrays(e)); // falskt
console.log(areFilledArrays(f)); // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areFilledArrays(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Filen skapades 6 February 2026 at 11:59:11 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>