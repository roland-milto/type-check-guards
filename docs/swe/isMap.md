# isMap

## Beskrivning

Kontrollerar om det angivna `value` är en `Map` och returnerar `true` om det är det, annars `false`.

### Användningsfall

Använd `isMap` när du får ett `unknown`-värde (t.ex. från JSON-tolkning, externa API:er eller användarinmatning) och
behöver säkerställa att det är en `Map` innan du utför `Map`-operationer.

> **Notis för TypeScript-användare:**
>
> `isMap` är en körningsvakt som returnerar `true` när värdet är en `Map` och annars `false`; använd den för att
> avgränsa `unknown` innan du anropar `Map`-API:er.

### Fördelar

- Ger en snabb kontroll vid körning av om ett värde är en `Map`.
- Hjälper till att förhindra typfel genom att skydda kodvägar som kräver `Map`-metoder som `get`, `set` och `has`.
- Fungerar bra som ett lättviktigt valideringssteg vid hantering av `unknown`-indata.

## Användning

### Syntax

Funktion:

- `isMap(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isMap(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isMap](../_analysis/isMap.md)

<br>

---

<small>Filen skapades 31 January 2026 at 16:29:49 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>