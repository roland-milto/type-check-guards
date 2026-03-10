# isDecimal

## Beskrivning

`isDecimal` kontrollerar om ett värde är en decimal strängrepresentation utan inledande/avslutande blanksteg och med ett
giltigt decimalformat.

### Användningsfall

Validera formulärfält, API-payloads eller konfigurationsvärden som måste anges som en decimal sträng (valfritt med
tecken) utan omgivande blanksteg, innan de tolkas eller lagras.

> **Notis för TypeScript-användare:**
>
> Använd `isDecimal` för att validera användarindata innan du konverterar den (t.ex. med `Number(value)`), särskilt när
> blanksteg måste avvisas.

### Fördelar

- Validerar strikt att indata är en sträng och matchar ett decimal-literal-mönster.
- Avvisar inledande och avslutande blanksteg (inklusive kontrolltecken) för att undvika tvetydig tolkning.
- Snabba förkontroller (typkontroll och första/sista tecken) innan regexen körs.
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för guards och indatavalidering.

## Användning

### Syntax

Funktion:

- `isDecimal(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för ett decimalt strängformat.

### Lokal funktionsimport

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v är en sträng här (validerad vid körning)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isDecimal(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Filen skapades 31 January 2026 at 15:54:47 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>