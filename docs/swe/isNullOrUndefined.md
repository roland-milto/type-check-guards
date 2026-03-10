# isNullOrUndefined

## Beskrivning

Kontrollerar om ett givet värde är `null` eller `undefined`.

### Användningsfall

Använd `isNullOrUndefined` när du behöver behandla både `null` och `undefined` som ”inget värde”, till exempel vid
validering av valfria indata, normalisering av API-payloads eller för att skydda kodvägar innan du derefererar ett
potentiellt saknat värde.

> **Notis för TypeScript-användare:**
>
> Använd `isNullOrUndefined` för att skydda mot saknade värden innan du kommer åt egenskaper eller anropar metoder; den
> returnerar `true` endast för `null` och `undefined`.

### Fördelar

- Ger en tydlig, återanvändbar guard för att upptäcka `null` och `undefined` på ett och samma ställe.
- Returnerar ett enkelt booleskt värde (`true`/`false`) som är lätt att kombinera i villkor och valideringar.
- Hjälper till att undvika vanliga körtidsfel genom att kontrollera saknade värden innan du kommer åt egenskaper eller
  anropar metoder.

## Användning

### Syntax

Funktion:

- `isNullOrUndefined(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för `null` eller `undefined`.

### Lokal funktionsimport

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // hantera saknat värde
}

console.log(isNullOrUndefined(b)); // sant
console.log(isNullOrUndefined(c)); // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isNullOrUndefined(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Filen skapades 31 January 2026 at 00:35:24 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>