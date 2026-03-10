# areBigInts

## Beskrivning

`areBigInts` avgör om ett värde är en icke-tom array som endast innehåller `bigint`-värden.

### Användningsfall

Validera okända indata (t.ex. parsad JSON-liknande data, API-payloads eller funktionsparametrar typade som `unknown`)
för att säkerställa att det är en icke-tom array av `bigint`-värden innan bearbetning; returnerar `true` endast när alla
element är `bigint`, annars `false`.

> **Notis för TypeScript-användare:**
>
> Använd `areBigInts` som en runtime-guard innan du utför `bigint`-endast-operationer (t.ex. aritmetik, jämförelser) på
> okända indata.

### Fördelar

- Säkerställer att varje element är en `bigint` och returnerar `true` endast när hela arrayen matchar.
- Avvisar icke-arrayer och tomma arrayer av design (via `isFilledArray`), vilket förhindrar oavsiktlig acceptans av
  ogiltiga indata.
- Snabbt avbrott: returnerar `false` så snart ett element som inte är `bigint` hittas.

## Användning

### Syntax

Funktion:

- `areBigInts(array)`

Parametrar:

- `array`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // sant
console.log(areBigInts(b)); // falskt
console.log(areBigInts(c)); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areBigInts(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:27:29 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>