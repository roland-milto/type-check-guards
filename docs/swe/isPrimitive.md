# isPrimitive

## Beskrivning

`isPrimitive` avgör om ett givet värde är en primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Användningsfall

Validera indata vid körning (t.ex. API-payloadfält, konfigurationsvärden eller användarlevererad data) för att
säkerställa att ett värde är en primitive innan serialisering, loggning eller tillämpning av operationer som endast
gäller primitiver.

> **Notis för TypeScript-användare:**
>
> Använd `isPrimitive` för att skydda `unknown`-indata innan du behandlar dem som objekt eller funktioner; den
> returnerar `true` för primitiver och `false` för objekt och funktioner.

### Fördelar

- Snabb, allokeringsfri kontroll av om ett värde är en JavaScript-primitive.
- Behandlar `null` korrekt som en primitive (även om `typeof null` är `"object"`).
- Hjälper till att snäva in `unknown`-värden innan objekt-specifika operationer utförs.

## Användning

### Syntax

Funktion:

- `isPrimitive(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för primitiv typ.

### Lokal funktionsimport

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isPrimitive(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:57:56 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>