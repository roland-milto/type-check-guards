# isObject

## Beskrivning

Avgör om ett givet `value` är ett `object` (exklusive `null`).

### Användningsfall

Använd `isObject` för att validera okända indata (t.ex. parsad JSON, API-svar, händelsepayloads) innan du kommer åt
egenskaper, så att du säkerställer att värdet är ett objekt och inte `null`.

> **Notis för TypeScript-användare:**
>
> `isObject` är en körnings-guard som returnerar en boolean; den snävar inte in till en specifik objektform. Kombinera
> den med ytterligare kontroller (t.ex. att en egenskap finns) när du behöver starkare typning.

### Fördelar

- Returnerar `true` endast för icke-`null`-värden vars `typeof` är `"object"`.
- Förhindrar den vanliga JavaScript-fällan där `null` annars skulle behandlas som ett objekt.
- Fungerar för vanliga objekt och inbyggda objektinstanser (t.ex. `Date`, `RegExp`).
- Enkel och snabb körningskontroll som passar för defensiv programmering och indatavalidering.

## Användning

### Syntax

Funktion:

- `isObject(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för att vara ett `object`.

### Lokal funktionsimport

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input är ett icke-null-objekt vid körning
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isObject(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isObject](../_analysis/isObject.md)

<br>

---

<small>Filen skapades 31 January 2026 at 00:20:31 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>