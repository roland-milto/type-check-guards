# isWeakMap

## Beskrivning

Avgör om ett givet `value` är en `WeakMap`-instans.

### Användningsfall

Använd `isWeakMap` när du tar emot ett `unknown`-värde (t.ex. från ett offentligt API, ett pluginsystem eller dynamisk
konfiguration) och behöver verifiera att det är en `WeakMap` innan du använder `WeakMap`-specifikt beteende.

> **Notis för TypeScript-användare:**
>
> `isWeakMap` utför en `instanceof WeakMap`-kontroll; det är en körningsvakt som returnerar `true` endast för faktiska
`WeakMap`-instanser.

### Fördelar

- Enkel körningskontroll för att avgöra om ett värde är en `WeakMap`.
- Hjälper till att förhindra felaktig användning av API:er som kräver en `WeakMap` genom att returnera `true`/`false` i
  stället för att kasta ett fel.
- Fungerar med `unknown`-indata, vilket gör den praktisk vid modulgränser (t.ex. parsning, extern data eller otypad
  kod).

## Användning

### Syntax

Funktion:

- `isWeakMap(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a är en WeakMap vid körning
}

console.log(isWeakMap(a)); // sant
console.log(isWeakMap(b)); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isWeakMap(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:27:05 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>