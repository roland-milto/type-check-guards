# isIndexFound

## Lýsing

`isIndexFound` ákvarðar hvort tiltekið gildi sé heiltala sem er ekki neikvæð, sem gefur til kynna að vísir hafi fundist.

### Notkunartilvik

Staðfesta að leitarniðurstaða tákni nothæfan vísi (heiltala `>= 0`) áður en vísað er inn í fylki eða streng, til að koma
í veg fyrir óviljandi notkun á `-1` eða gildum sem eru ekki töluleg.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isIndexFound` eftir aðgerðir eins og `indexOf`, `findIndex` eða sérsniðnar leitir þar sem `-1` (eða önnur
> ógild gildi) getur táknað „fannst ekki“. Þegar það skilar `true`, er gildið tala og öruggt að nota sem vísir í
> fylki/streng.

### Kostir

- Veitir einfaldan tegundavörð til að greina hvort vísir hafi fundist með því að athuga hvort um sé að ræða heiltölu sem
  er ekki neikvæð.
- Skilar `true` aðeins fyrir gild vísis-lík gildi (heiltölur `>= 0`), og hafnar neikvæðum gildum, gildum sem eru ekki
  heiltölur og gildum sem eru ekki tölur.
- Hjálpar til við að forðast off-by-one og sentinel-gildis mistök þegar unnið er með API sem skila `-1` fyrir „fannst
  ekki“.

## Notkun

### Málfræði

Fall:

- `isIndexFound(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé heiltala sem er ekki neikvæð.

### Staðbundinn innflutningur á falli

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx er tala hér og er >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Dæmigerð notkun með indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isIndexFound(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:46:22 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>