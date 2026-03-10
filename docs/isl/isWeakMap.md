# isWeakMap

## Lýsing

Ákvarðar hvort gefið `value` sé `WeakMap`-tilvik.

### Notkunartilvik

Notaðu `isWeakMap` þegar þú tekur við `unknown` gildi (t.d. frá opinberu API, viðbótakerfi eða kvikri stillingu) og
þarft að staðfesta að það sé `WeakMap` áður en þú notar `WeakMap`-sértæka hegðun.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isWeakMap` framkvæmir `instanceof WeakMap`-athugun; það er keyrslutímavörður sem skilar `true` aðeins fyrir
> raunveruleg `WeakMap`-tilvik.

### Kostir

- Einföld keyrslutímaskoðun á því hvort gildi sé `WeakMap`.
- Hjálpar til við að koma í veg fyrir ranga notkun á API-um sem krefjast `WeakMap` með því að skila `true`/`false` í
  stað þess að kasta villu.
- Virkar með `unknown` inntökum, sem gerir það hentugt við mörk eininga (t.d. við þáttun, ytri gögn eða ógerðaðan kóða).

## Notkun

### Málfræði

Fall:

- `isWeakMap(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a er WeakMap í keyrslu
}

console.log(isWeakMap(a)); // satt
console.log(isWeakMap(b)); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isWeakMap(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:25:29 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>