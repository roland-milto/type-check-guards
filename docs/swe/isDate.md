# isDate

## Beskrivning

`isDate` avgör om ett angivet värde är en `Date` och returnerar `true` för `Date`-instanser och `false` annars.

### Användningsfall

Validera och avgränsa okända värden (t.ex. begärandedata, konfigurationsvärden eller parsad JSON) innan du utför `Date`
-operationer som formatering, jämförelser eller anrop av `toISOString()`.

> **Notis för TypeScript-användare:**
>
> Använd `isDate` för att avgränsa `unknown` till `Date` vid körning; den returnerar `true` endast för faktiska `Date`
> -instanser (inte datumsträngar).

### Fördelar

- Det ger en enkel körningsvakt för att verifiera om ett värde är en `Date`.
- Det hjälper till att förhindra typfel genom att säkerställa att endast `Date`-instanser passerar valideringen.
- Det är användbart för att validera okända indata (t.ex. API-nyttolaster) innan man använder datum-specifika metoder.

## Användning

### Syntax

Funktion:

- `isDate(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för typen `Date`.

### Lokal funktionsimport

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input är ett Date här
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isDate(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isDate](../_analysis/isDate.md)

<br>

---

<small>Filen skapades 31 January 2026 at 15:47:55 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>