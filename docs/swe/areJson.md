# areJson

## Beskrivning

Kontrollerar om alla element i en array är JSON-strängar och returnerar `true` endast om arrayen är ifylld och varje
objekt är giltig JSON; annars returnerar den `false`.

### Användningsfall

Validera inkommande data (t.ex. från query-parametrar, miljövariabler eller externa API:er) där du förväntar dig en
array av JSON-kodade strängar och vill avvisa tomma arrayer eller eventuella icke-JSON-poster.

> **Notis för TypeScript-användare:**
>
> Använd `areJson` när du behöver validera att en `unknown[]` endast innehåller JSON-strängar innan du parsar dem (t.ex.
> med `JSON.parse`).

### Fördelar

- Returnerar `true` endast när varje element är en giltig JSON-sträng; annars returnerar den `false`.
- Misslyckas snabbt: slutar kontrollera så snart ett icke-JSON-element hittas.
- Avvisar tomma arrayer avsiktligt och returnerar `false` för icke-ifylld indata.

## Användning

### Syntax

Funktion:

- `areJson(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras efter JSON-strängelement.

### Lokal funktionsimport

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // sant
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falskt
const empty = areJson([]); // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areJson(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areJson](../_analysis/areJson.md)

<br>

---

<small>Filen skapades 30 January 2026 at 16:17:38 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>