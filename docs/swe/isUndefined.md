# isUndefined

## Beskrivning

Kontrollerar om ett givet värde är `undefined`.

### Användningsfall

Använd `isUndefined` för att skydda valfria indata, upptäcka saknade egenskaper eller skilja mellan ”inte angivet” (
`undefined`) och ”uttryckligen tomt” (`null`).

> **Notis för TypeScript-användare:**
>
> Använd `isUndefined` när du specifikt behöver upptäcka `undefined` (inte `null`). Det är säkert eftersom det bygger på
`typeof value === "undefined"`.

### Fördelar

- Ger en tydlig, explicit kontroll av `undefined` med hjälp av `typeof`, vilket undviker kantfall med odeklarerade
  variabler.
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för guards, förgrening och valideringslogik.
- Hjälper till att skilja `undefined` från andra ”tomma” värden som `null`, `0`, `""` eller `NaN`.

## Användning

### Syntax

Funktion:

- `isUndefined(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x är odefinierad här
} else {
  // x är inte odefinierad här
}

const a = isUndefined(undefined); // sant
const b = isUndefined(null);      // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isUndefined(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:04:32 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>