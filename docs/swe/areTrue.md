# areTrue

## Beskrivning

Kontrollerar om en icke-tom array endast innehåller booleska värdet `true`.

### Användningsfall

Använd `areTrue` för att validera att en uppsättning förvillkor eller funktionsflaggor alla är aktiverade (alla värden
är `true`) innan du fortsätter, samtidigt som tomma eller felaktiga indata behandlas som ej uppfyllda (`false`).

> **Notis för TypeScript-användare:**
>
> `areTrue` returnerar `false` för en tom array och för arrayer som innehåller något värde som inte är strikt `true`.

### Fördelar

- Returnerar `true` endast när varje element är strikt `true` och arrayen inte är tom.
- Misslyckas snabbt: returnerar `false` så snart ett värde som inte är `true` hittas.
- Avvisar ogiltiga indata (icke-arrayer eller tomma arrayer) genom att returnera `false`.

## Användning

### Syntax

Funktion:

- `areTrue(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för enbart `true`-värden.

### Lokal funktionsimport

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areTrue(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:52:53 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>