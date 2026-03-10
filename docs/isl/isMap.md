# isMap

## Lýsing

Athugar hvort gefið `value` sé `Map` og skilar `true` ef svo er, annars `false`.

### Notkunartilvik

Notaðu `isMap` þegar þú færð `unknown` gildi (t.d. úr JSON-parsun, ytri API-um eða notandainntaki) og þarft að tryggja
að það sé `Map` áður en þú framkvæmir `Map`-aðgerðir.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isMap` er keyrslutímavörður sem skilar `true` þegar gildið er `Map` og `false` annars; notaðu það til að þrengja
`unknown` áður en kallað er á `Map`-API.

### Kostir

- Veitir skjóta keyrslutímaathugun á því hvort gildi sé `Map`.
- Hjálpar til við að koma í veg fyrir tegundavillur með því að verja kóðaslóðir sem krefjast `Map`-aðferða eins og
  `get`, `set` og `has`.
- Virkar vel sem léttvæg staðfestingarskref þegar unnið er með `unknown` inntak.

## Notkun

### Málfræði

Fall:

- `isMap(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isMap(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isMap](../_analysis/isMap.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 16:04:56 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>