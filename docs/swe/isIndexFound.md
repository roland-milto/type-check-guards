# isIndexFound

## Beskrivning

`isIndexFound` avgör om ett givet värde är ett icke-negativt heltal, vilket indikerar att ett index har hittats.

### Användningsfall

Validera att ett sökresultat representerar ett användbart index (heltal `>= 0`) innan du indexerar i en array eller
sträng, vilket förhindrar oavsiktlig användning av `-1` eller icke-numeriska värden.

> **Notis för TypeScript-användare:**
>
> Använd `isIndexFound` efter operationer som `indexOf`, `findIndex` eller anpassade sökningar där `-1` (eller andra
> ogiltiga värden) kan indikera ”hittades inte”. När den returnerar `true` är värdet ett tal och säkert att använda som
> ett array-/strängindex.

### Fördelar

- Ger en enkel typvakt för att upptäcka om ett index hittades genom att kontrollera efter ett icke-negativt heltal.
- Returnerar `true` endast för giltiga indexliknande värden (heltal `>= 0`), och avvisar negativa tal, icke-heltal och
  icke-numeriska värden.
- Hjälper till att undvika off-by-one- och sentinelvärdesmisstag när man arbetar med API:er som returnerar `-1` för
  ”hittades inte”.

## Användning

### Syntax

Funktion:

- `isIndexFound(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för att vara ett icke-negativt heltal.

### Lokal funktionsimport

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx är ett tal här och är >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typisk användning med indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isIndexFound(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Filen skapades 31 January 2026 at 00:48:05 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>