# isFilledArray

## Beskrivning

Kontrollerar om `value` är en array med minst ett element och returnerar `true` eller `false`.

### Användningsfall

Använd `isFilledArray` för att validera inkommande data (t.ex. API-payloads, formulärvärden, konfiguration) innan du
itererar, kommer åt det första elementet eller tillämpar logik som kräver minst ett objekt.

> **Notis för TypeScript-användare:**
>
> `isFilledArray` är en körtids-guard som returnerar ett booleskt värde; den snävar inte in elementtyper utöver att
> bekräfta att arrayen inte är tom.

### Fördelar

- Enkel och snabb kontroll av en icke-tom array med `Array.isArray` och en längdkontroll.
- Hjälper till att undvika körtidsfel när kod antar att en array har minst ett element.
- Tydligt booleskt resultat: returnerar `true` för icke-tomma arrayer och `false` annars.

## Användning

### Syntax

Funktion:

- `isFilledArray(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för att se om det är en icke-tom array.

### Lokal funktionsimport

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input är en icke-tom array vid körning
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isFilledArray(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Filen skapades 6 February 2026 at 11:48:59 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>