# isNull

## Beskrivning

Avgör om det angivna `value` är `null`.

### Användningsfall

Använd `isNull` för att validera indata eller fält i API-payloads där `null` är ett meningsfullt sentinelvärde och måste
hanteras annorlunda än `undefined` eller andra värden.

> **Notis för TypeScript-användare:**
>
> Använd `isNull` när du behöver skilja `null` från `undefined` och andra falsy-värden; den returnerar `true` endast för
`null`.

### Fördelar

- Ger en exakt kontroll för `null` utan att blanda ihop det med `undefined`.
- Fungerar tillförlitligt för alla indatatyper eftersom den accepterar `unknown`.
- Enkel, snabb och fri från bieffekter; returnerar endast `true` eller `false`.

## Användning

### Syntax

Funktion:

- `isNull(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för `null`.

### Lokal funktionsimport

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // sant
console.log(isNull(b)); // falskt

if (isNull(a)) {
  // a är null här
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isNull(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isNull](../_analysis/isNull.md)

<br>

---

<small>Filen skapades 31 January 2026 at 15:40:57 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>