# isStream

## Ibsa

`isStream` gatiin kenname stream object ta'uu isaa (akka stream Node.js fakkaatu, `ReadableStream`, yookaan
`WritableStream`) ni mirkaneessa.

### Haala itti fayyadama

Galtee (inputs) wantoota salphaa yookaan streams ta'uu danda'an (fakkeenyaaf, file uploads, HTTP bodies, yookaan
processing pipelines) mirkaneessi; gatiin stream ta'uu isaa irratti hundaa'uun loojikii damee (branch) godhi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` dhiphisuuf (narrow) mala stream waamuun dura `isStream` fayyadami; wantoota akka stream Node.js fakkaatan (
`pipe`/`on` irraa) fi Web Streams (`ReadableStream`/`WritableStream`) yeroo globaloonni sun jiran ni beeka.

### Faayidaa

- `pipe` fi `on` faankishinii ilaaluudhaan wantoota akka stream Node.js beekamoo ta'an nagaan adda baasa.
- Yeroo jiraatanitti `ReadableStream` fi `WritableStream` beekuudhaan Web Streams illee ni deeggera.
- Bu'aa boolean salphaa (`true`/`false`) kan guards fi loojikii damee (branching) irratti fayyadu ni deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isStream(value)`

Paaraameetaroota:

- `value`: Gatii ilaalamu.

### Galchii faankishinii naannoo

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream akka stream fakkaata; API-wwan stream beekamoo nagaan fayyadamuu dandeessa
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isStream(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isStream](../_analysis/isStream.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:42:31 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>