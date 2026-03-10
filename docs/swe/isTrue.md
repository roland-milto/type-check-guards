# isTrue

## Beskrivning

`isTrue` avgör om ett givet värde är strikt lika med `true`.

### Användningsfall

Använd `isTrue` för att validera flaggor, feature toggles eller konfigurationsvärden där endast literaltypen `true` ska
accepteras och allt annat måste behandlas som `false`.

> **Notis för TypeScript-användare:**
>
> Använd `isTrue` när du behöver acceptera endast den booleska literaltypen `true`, inte bara truthy-värden.

### Fördelar

- Ger en strikt kontroll av den booleska literaltypen `true` (ingen typomvandling).
- Hjälper till att skilja `true` från truthy-värden som `1`, `"true"` eller `{}`.
- Enkelt och förutsägbart beteende som passar för guards och valideringspipelines.

## Användning

### Syntax

Funktion:

- `isTrue(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // sant
const b = isTrue(1);         // falskt
const c = isTrue("true");   // falskt

if (isTrue(a)) {
  // a är sant här
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isTrue(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:46:20 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>