# isStream

## Beskrivning

`isStream` kontrollerar om ett givet värde är ett strömobjekt (Node.js-strömliknande, `ReadableStream` eller
`WritableStream`).

### Användningsfall

Validera indata som kan vara antingen vanliga objekt eller strömmar (t.ex. filuppladdningar, HTTP-kroppar eller
bearbetningspipelines) och förgrena logiken baserat på om värdet är en ström.

> **Notis för TypeScript-användare:**
>
> Använd `isStream` för att snäva in `unknown` innan du anropar strömmetoder; den känner igen Node.js-strömliknande
> objekt (via `pipe`/`on`) och Web Streams (`ReadableStream`/`WritableStream`) när dessa globala objekt finns.

### Fördelar

- Upptäcker på ett säkert sätt vanliga Node.js-strömliknande objekt genom att kontrollera om funktionerna `pipe` och
  `on` finns.
- Stöder även Web Streams genom att känna igen `ReadableStream` och `WritableStream` när de finns tillgängliga.
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för typvakter och förgreningslogik.

## Användning

### Syntax

Funktion:

- `isStream(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream är strömliknande; du kan säkert använda vanliga ström-API:er
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isStream(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isStream](../_analysis/isStream.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:43:08 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>