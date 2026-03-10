# isValidDate

## Beskrivning

`isValidDate` kontrollerar om ett givet värde är ett giltigt `Date`-objekt och returnerar `true` endast för verkliga,
icke-ogiltiga datum.

### Användningsfall

Validera användarinmatning eller API-data som kan innehålla datum, och säkerställ att värdet är en verklig `Date`
-instans och inte ett ogiltigt datum innan du utför datumberäkningar, formatering eller jämförelser.

> **Notis för TypeScript-användare:**
>
> Använd `isValidDate` innan du anropar `Date`-metoder (t.ex. `toISOString`, `getTime`) på värden typade som `unknown`
> för att säkerställa att de är giltiga `Date`-objekt.

### Fördelar

- Säkerställer att ett värde är en `Date`-instans och inte bara en datumliknande sträng eller ett tal.
- Avvisar ogiltiga datum (t.ex. `new Date("invalid")`) genom att kontrollera efter `NaN`-tidsvärden.
- En enkel boolesk guard som är lätt att använda i villkor och valideringspipelines.
- Hjälper till att förhindra körningsfel när man anropar datummetoder genom att först verifiera indata.

## Användning

### Syntax

Funktion:

- `isValidDate(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input är en giltig Date-instans
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isValidDate(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Filen skapades 30 January 2026 at 16:53:04 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>