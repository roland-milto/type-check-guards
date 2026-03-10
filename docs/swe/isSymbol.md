# isSymbol

## Beskrivning

`isSymbol` avgör om ett givet värde är av typen `symbol` och returnerar `true` för symboler och `false` annars.

### Användningsfall

Validera att ett `unknown`-värde är en `symbol` innan du använder det som en unik identifierare, en registernyckel eller
en beräknad egenskapsnyckel i objekt och mappar.

> **Notis för TypeScript-användare:**
>
> Använd `isSymbol` för att snäva in `unknown` till `symbol` innan du anropar symbolrelaterade funktioner eller använder
> det som en beräknad egenskapsnyckel.

### Fördelar

- Ger en enkel och tillförlitlig körningskontroll för JavaScript-primtivtypen `symbol`.
- Hjälper till att snäva in `unknown`-värden innan symbolspecifika API:er används eller innan de lagras som nycklar.
- Undviker falska positiva resultat genom att använda `typeof`, vilket är det kanoniska sättet att upptäcka `symbol`
  -värden.

## Användning

### Syntax

Funktion:

- `isSymbol(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input är en symbol här
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isSymbol(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:28:50 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>