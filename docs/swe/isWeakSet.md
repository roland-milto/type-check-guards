# isWeakSet

## Beskrivning

Avgör om det givna `value` är en `WeakSet` av objekt.

### Användningsfall

Använd `isWeakSet` när du tar emot otypad indata (t.ex. från externa API:er, dynamisk konfiguration eller `unknown`
-värden) och du behöver verifiera att det är en `WeakSet` innan du använder `WeakSet`-specifika operationer.

> **Notis för TypeScript-användare:**
>
> Använd `isWeakSet` för att avgränsa ett `unknown`-värde till `WeakSet<object>` vid körning; observera att `WeakSet`
> endast kan innehålla objektreferenser.

### Fördelar

- Ger en enkel körningskontroll för om ett värde är en `WeakSet`.
- Hjälper till att förhindra typfel genom att säkerställa att endast `WeakSet`-instanser behandlas som sådana.
- Fungerar med valfri `unknown`-indata och returnerar ett tydligt booleskt resultat (`true`/`false`).

## Användning

### Syntax

Funktion:

- `isWeakSet(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // sant
console.log(isWeakSet(b)); // falskt

if (isWeakSet(a)) {
  // a är en WeakSet vid körning
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isWeakSet(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:19:19 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>