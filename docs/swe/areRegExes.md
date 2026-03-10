# areRegExes

## Beskrivning

`areRegExes` kontrollerar om ett värde är en fylld array som endast innehåller `RegExp`-objekt.

### Användningsfall

Validera att ett konfigurationsalternativ (t.ex. en lista med tillåt-/förbjud-mönster) är en icke-tom array av reguljära
uttryck innan det används för matchning.

> **Notis för TypeScript-användare:**
>
> Använd `areRegExes` för att snäva in `unknown` till `RegExp[]` innan du itererar eller sätter ihop mönster.

### Fördelar

- Säkerställer att ett värde är en icke-tom array där varje element är en instans av `RegExp`.
- Ger en enkel boolesk kontroll (`true`/`false`) för att validera användarinmatning eller konfiguration.
- Hjälper till att förhindra körningsfel när senare kod antar att alla objekt stöder operationer med reguljära uttryck.

## Användning

### Syntax

Funktion:

- `areRegExes(array)`

Parametrar:

- `array`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns är en array av RegExp här
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areRegExes(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:21:51 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>