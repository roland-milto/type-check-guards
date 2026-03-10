# areNullOrUndefined

## Lýsing

Athugar hvort öll stök í gefna fylkinu séu `null` eða `undefined`.

### Notkunartilvik

Staðfesta að listi af valkvæðum reitum innihaldi engin raunveruleg gildi (aðeins `null`/`undefined`) áður en ákveðið er
að sleppa vinnslu eða að sýna stöðu „engin gildi gefin upp“.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areNullOrUndefined` þegar þú þarft að staðfesta að fylki innihaldi aðeins gildi sem vantar (`null`/
`undefined`). Athugaðu að það skilar `false` fyrir tómt fylki.

### Kostir

- Skilar `true` aðeins þegar hvert stak er `null` eða `undefined`.
- Skilar `false` fyrir tóma fylki, sem hjálpar til við að greina á milli „engin gögn“ og „öll gildi vantar“.
- Virkar með `unknown[]`, sem gerir það öruggt að nota áður en gerðir eru þrengdar.

## Notkun

### Málfræði

Fall:

- `areNullOrUndefined(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === satt

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === ósatt

const empty = areNullOrUndefined([]);
// empty === ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areNullOrUndefined(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:30:05 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>