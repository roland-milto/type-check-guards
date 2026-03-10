# areObjects

## Beskrivning

`areObjects` kontrollerar om en angiven fylld array endast innehåller objekt.

### Användningsfall

Använd `areObjects` när du tar emot en okänd array (t.ex. från JSON-tolkning eller externa API:er) och behöver
säkerställa att den inte är tom och att varje element är ett objekt innan du itererar och kommer åt objektegenskaper.

> **Notis för TypeScript-användare:**
>
> Använd `areObjects` för att validera `unknown[]` innan du behandlar objekten som objekt; den returnerar `false` för
> tomma arrayer.

### Fördelar

- Returnerar `true` endast när indata är en fylld array och varje element är ett objekt.
- Avslutar tidigt och returnerar `false` så snart ett element som inte är ett objekt hittas.
- Hjälper till att validera okänd indata innan objekt-specifika operationer utförs.

## Användning

### Syntax

Funktion:

- `areObjects(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för objektelement.

### Lokal funktionsimport

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value är en fylld array av objekt
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areObjects(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Filen skapades 31 January 2026 at 00:10:35 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>