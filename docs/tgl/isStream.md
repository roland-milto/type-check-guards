# isStream

## Paglalarawan

Sinusuri ng `isStream` kung ang ibinigay na value ay isang stream object (Node.js stream-like, `ReadableStream`, o
`WritableStream`).

### Kaso ng paggamit

I-validate ang mga input na maaaring alinman sa mga plain object o stream (hal., mga file upload, HTTP body, o mga
processing pipeline) at i-branch ang logic batay sa kung stream ang value.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isStream` para i-narrow ang `unknown` bago tumawag ng mga stream method; kinikilala nito ang mga Node.js
> stream-like na object (sa pamamagitan ng `pipe`/`on`) at Web Streams (`ReadableStream`/`WritableStream`) kapag umiiral
> ang mga global na iyon.

### Mga bentahe

- Ligtas na natutukoy ang mga karaniwang Node.js na stream-like na object sa pamamagitan ng pag-check sa mga function na
  `pipe` at `on`.
- Sinusuportahan din ang Web Streams sa pamamagitan ng pagkilala sa `ReadableStream` at `WritableStream` kapag
  available.
- Nagbabalik ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at branching logic.

## Paggamit

### Sintaks

Function:

- `isStream(value)`

Mga parameter:

- `value`: Ang value na iche-check.

### Lokal na pag-import ng function

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // ang nodeStream ay kahawig ng stream; maaari mong ligtas na gamitin ang mga karaniwang stream API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isStream(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isStream](../_analysis/isStream.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:43:15 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>