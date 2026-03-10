# areStreams

## Beskrivning

`areStreams` avgör om ett värde är en ifylld array där varje element är en `Stream`.

### Användningsfall

Validera användarangivna eller dynamiskt byggda samlingar (t.ex. flera fil-läsströmmar) innan du pipar, återupptar eller
på annat sätt arbetar med dem som en grupp.

> **Notis för TypeScript-användare:**
>
> Använd `areStreams` för att validera okänd indata innan du behandlar den som `Stream[]`; den returnerar `true` endast
> när värdet är en icke-tom array och varje element är en `Stream`.

### Fördelar

- Säkerställer att en indata är en ifylld array där varje element är en `Stream`.
- Ger en enkel `true`/`false`-guard för att validera stream-samlingar innan bearbetning.
- Misslyckas snabbt: returnerar `false` så snart ett element som inte är en `Stream` hittas.
- Hjälper till att förhindra körningsfel när kod antar att alla objekt är `Stream`-instanser.

## Användning

### Syntax

Funktion:

- `areStreams(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för Stream-objekt.

### Lokal funktionsimport

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input är en fylld array med Stream-objekt
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areStreams(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:35:49 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>