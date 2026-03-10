# isStream

## Lýsing

`isStream` athugar hvort tiltekið gildi sé straumhlutur (Node.js straumlíkur, `ReadableStream` eða `WritableStream`).

### Notkunartilvik

Staðfesta inntök sem geta verið annaðhvort venjulegir hlutir eða straumar (t.d. skráarupphleðslur, HTTP-bolir eða
vinnsluleiðslur) og greina rökfræði út frá því hvort gildið sé straumur.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isStream` til að þrengja `unknown` áður en straumaðferðir eru kallaðar; það þekkir Node.js straumlíka hluti (í
> gegnum `pipe`/`on`) og Web Streams (`ReadableStream`/`WritableStream`) þegar þessir globalar eru til staðar.

### Kostir

- Greinir á öruggan hátt algenga Node.js straumlíka hluti með því að athuga hvort `pipe` og `on` föll séu til staðar.
- Styður einnig Web Streams með því að þekkja `ReadableStream` og `WritableStream` þegar þau eru tiltæk.
- Skilar einfaldri boolean-niðurstöðu (`true`/`false`) sem hentar fyrir vörður og greiningar-/greinunarrökfræði.

## Notkun

### Málfræði

Fall:

- `isStream(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream er straumlíkt; þú getur örugglega notað algeng straum-API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isStream(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isStream](../_analysis/isStream.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:40:17 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>