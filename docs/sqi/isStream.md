# isStream

## Përshkrim

`isStream` kontrollon nëse një vlerë e dhënë është një objekt stream (i ngjashëm me stream në Node.js, `ReadableStream`,
ose `WritableStream`).

### Rast përdorimi

Vlerëso inpute që mund të jenë ose objekte të thjeshta ose streams (p.sh., ngarkime skedarësh, trupa HTTP, ose pipeline
përpunimi) dhe degëzo logjikën bazuar nëse vlera është një stream.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isStream` për të ngushtuar `unknown` përpara se të thërrasësh metoda të stream; ai njeh objekte të ngjashme me
> stream në Node.js (përmes `pipe`/`on`) dhe Web Streams (`ReadableStream`/`WritableStream`) kur këto globale ekzistojnë.

### Përparësi

- Zbulon në mënyrë të sigurt objekte të zakonshme të ngjashme me stream në Node.js duke kontrolluar për funksionet
  `pipe` dhe `on`.
- Mbështet gjithashtu Web Streams duke njohur `ReadableStream` dhe `WritableStream` kur janë të disponueshme.
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) i përshtatshëm për guards dhe logjikë degëzimi.

## Përdorim

### Sintaksë

Funksion:

- `isStream(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream është i ngjashëm me një stream; mund të përdorni në mënyrë të sigurt API-të e zakonshme të stream-it
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isStream(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isStream](../_analysis/isStream.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:43:00 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>