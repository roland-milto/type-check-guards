# areNullOrUndefined

## Beskrivning

Kontrollerar om alla element i den givna arrayen är `null` eller `undefined`.

### Användningsfall

Validera att en lista med valfria fält inte innehåller några faktiska värden (endast `null`/`undefined`) innan du
bestämmer dig för att hoppa över bearbetning eller visa ett läge för “inga värden angivna”.

> **Notis för TypeScript-användare:**
>
> Använd `areNullOrUndefined` när du behöver verifiera att en array endast innehåller saknade värden (`null`/
`undefined`). Observera att den returnerar `false` för en tom array.

### Fördelar

- Returnerar `true` endast när varje element är `null` eller `undefined`.
- Returnerar `false` för tomma arrayer, vilket hjälper till att skilja “inga data” från “alla saknade värden”.
- Fungerar med `unknown[]`, vilket gör den säker att använda innan typer snävas in.

## Användning

### Syntax

Funktion:

- `areNullOrUndefined(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areNullOrUndefined(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Filen skapades 31 January 2026 at 00:31:32 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>