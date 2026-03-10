# areMaps

## Beskrivning

`areMaps` avgör om en given array är icke-tom och om alla dess element är `Map`-instanser.

### Användningsfall

Validera okänd indata (t.ex. från JSON-tolkning, externa API:er eller dynamiska källor) innan den behandlas som en
icke-tom lista med `Map`-objekt.

> **Notis för TypeScript-användare:**
>
> Returnerar `false` för en tom array; den returnerar bara `true` när arrayen är fylld och varje element är en `Map`.

### Fördelar

- Säkerställer att varje element är en `Map`-instans och returnerar `true` endast när hela arrayen klarar kontrollen.
- Avvisar tomma arrayer avsiktligt, vilket förhindrar att “ingen data” av misstag accepteras som giltig indata.
- Användbar som en vakt innan `Map`-specifika operationer (t.ex. `.get()`, `.set()`, iteration) utförs över en samling.

## Användning

### Syntax

Funktion:

- `areMaps(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items är garanterat en icke-tom array av Map-instanser vid körning
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false för: tomma arrayer, eller arrayer som innehåller något icke-Map-värde
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areMaps(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Filen skapades 31 January 2026 at 16:14:46 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>