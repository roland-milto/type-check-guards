# isSet

## Beskrivning

Avgör om ett givet värde är en `Set`.

### Användningsfall

Validera indata från externa källor (t.ex. JSON-tolkning, användarinmatning eller tredjeparts-API:er) för att
säkerställa att ett värde är en `Set` innan du utför `Set`-operationer.

> **Notis för TypeScript-användare:**
>
> Använd `isSet` för att snäva in `unknown`-värden innan du anropar `Set`-specifika API:er som `.add`, `.has` eller
`.size`.

### Fördelar

- Ger en enkel körningskontroll för att bekräfta om ett värde är en `Set`.
- Hjälper till att förhindra typfel genom att möjliggöra tidig förgrening när ett värde inte är en `Set`.
- Fungerar med vilket `Set`-innehåll som helst (tomt eller ifyllt) och returnerar konsekvent `true`/`false`.

## Användning

### Syntax

Funktion:

- `isSet(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a är en Set vid körning
  console.log(a.size);
}

console.log(isSet(b)); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isSet(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isSet](../_analysis/isSet.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:11:20 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>