# areValidDates

## Beskrivning

Avgör om en array är icke-tom och uteslutande består av giltiga `Date`-objekt.

### Användningsfall

Använd `areValidDates` för att validera användar- eller API-tillhandahållna arrayer innan du utför datumbaserade
operationer (sortering, intervallkontroller, formatering), så att alla poster är verkliga, giltiga `Date`-objekt och att
listan inte är tom.

> **Notis för TypeScript-användare:**
>
> `areValidDates` returnerar `false` för en tom array; säkerställ att arrayen är avsedd att vara icke-tom innan du
> förlitar dig på den som ett valideringssteg.

### Fördelar

- Returnerar `true` endast när varje element är en giltig `Date`-instans (inga ogiltiga datum som
  `new Date('invalid')`).
- Avvisar tom indata genom att returnera `false`, vilket säkerställer att du bara accepterar meningsfulla, icke-tomma
  datumlistor.
- Ger en enkel boolesk guard-liknande kontroll som är lätt att kombinera med andra valideringar.

## Användning

### Syntax

Funktion:

- `areValidDates(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras, som potentiellt innehåller `Date`-objekt.

### Lokal funktionsimport

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // sant
console.log(areValidDates(b)); // falskt
console.log(areValidDates(c)); // falskt
console.log(areValidDates(d)); // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areValidDates(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:34:02 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>