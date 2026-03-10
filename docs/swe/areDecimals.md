# areDecimals

## Beskrivning

Kontrollerar om alla element i en array är decimaltal och att arrayen är ifylld, och returnerar `true` eller `false`.

### Användningsfall

Validera användarangivna listor (t.ex. CSV-kolumner eller formulärinmatningar) för att säkerställa att arrayen inte är
tom och att varje post är ett decimalvärde före parsning eller beräkningar.

> **Notis för TypeScript-användare:**
>
> Använd `areDecimals` när du behöver en snabb boolesk kontroll att en `unknown[]` inte är tom och att varje element är
> en decimalrepresentation.

### Fördelar

- Säkerställer att indata är en ifylld array innan objekten valideras, vilket förhindrar oavsiktlig acceptans av tomma
  listor.
- Validerar varje element med `isDecimal`, så blandade eller ogiltiga värden ger omedelbart resultatet `false`.
- Ger ett enkelt booleskt utfall (`true`/`false`) som passar för guards och valideringsflöden med tidig retur.

## Användning

### Syntax

Funktion:

- `areDecimals(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // sant
console.log(areDecimals(b)); // falskt
console.log(areDecimals(c)); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areDecimals(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Filen skapades 31 January 2026 at 15:59:14 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>