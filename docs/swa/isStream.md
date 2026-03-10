# isStream

## Maelezo

`isStream` hukagua kama thamani iliyotolewa ni kitu cha stream (kinachofanana na stream cha Node.js, `ReadableStream`,
au `WritableStream`).

### Kesi ya matumizi

Thibitisha ingizo ambazo zinaweza kuwa ama vitu vya kawaida au streams (mfano, upakiaji wa faili, miili ya HTTP, au njia
za uchakataji) na uweke mantiki ya matawi kulingana na kama thamani ni stream.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isStream` kupunguza aina ya `unknown` kabla ya kuita mbinu za stream; hutambua vitu vinavyofanana na stream vya
> Node.js (kupitia `pipe`/`on`) na Web Streams (`ReadableStream`/`WritableStream`) wakati globali hizo zipo.

### Faida

- Hugundua kwa usalama vitu vya kawaida vinavyofanana na stream vya Node.js kwa kukagua uwepo wa kazi za `pipe` na `on`.
- Pia huunga mkono Web Streams kwa kutambua `ReadableStream` na `WritableStream` zinapopatikana.
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi (guards) na mantiki ya matawi (branching).

## Matumizi

### Sintaksia

Kazi:

- `isStream(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream ni kama mtiririko; unaweza kutumia kwa usalama API za kawaida za mtiririko
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isStream(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isStream](../_analysis/isStream.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:43:01 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>