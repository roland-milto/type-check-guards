# areStreams

## Lýsing

`areStreams` ákvarðar hvort gildi sé fyllt fylki þar sem hvert stak er `Stream`.

### Notkunartilvik

Sannreyna söfn sem notandi gefur upp eða eru byggð á keyrslutíma (t.d. margir lesstraumar úr skrám) áður en þau eru
pípuð, endurvakin eða unnin á annan hátt sem hópur.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areStreams` til að sannreyna óþekkt inntak áður en þú meðhöndlar það sem `Stream[]`; það skilar `true` aðeins
> þegar gildið er ekki tómt fylki og hvert stak er `Stream`.

### Kostir

- Tryggir að inntak sé fyllt fylki þar sem hvert stak er `Stream`.
- Veitir einfalt `true`/`false` vörð til að sannreyna straumasöfn áður en þau eru unnin.
- Bregst hratt við: skilar `false` um leið og stak sem er ekki `Stream` finnst.
- Hjálpar til við að koma í veg fyrir keyrsluvillur þegar kóði gerir ráð fyrir að öll atriði séu `Stream`-tilvik.

## Notkun

### Málfræði

Fall:

- `areStreams(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til Stream-hluta.

### Staðbundinn innflutningur á falli

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input er fyllt fylki af Stream-hlutum
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areStreams(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:34:16 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>