# isBinary

## Lýsing

`isBinary` ákvarðar hvort gildi sé tvíundarstrengur (valkvætt með `0b`/`0B` forskeyti) og skilar `true` eða `false`.

### Notkunartilvik

Staðfesta strengji sem notandi gefur upp (t.d. eyðublöð, CLI-viðföng, stillingagildi) til að tryggja að þeir tákni
eingöngu tvíundarstafi, valkvætt með `0b`/`0B` forskeyti, áður en frekari vinnsla fer fram.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isBinary` sem tegundarvörð áður en strengur er þáttaður eða umbreytt í `BigInt`/`Number` til að forðast ógilt
> inntak.

### Kostir

- Tekur við tvíundarstrengjum með eða án `0b`/`0B` forskeytis.
- Hafnar tómum strengjum og strengjum með bilum fremst/aftast (ASCII ≤ 32).
- Skilar `true`/`false` án þess að kasta villu, sem gerir það öruggt fyrir óþekkt inntök.

## Notkun

### Málfræði

Fall:

- `isBinary(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // satt
const b = isBinary("1010");   // satt
const c = isBinary("0b1020"); // ósatt
const d = isBinary(0b1010);     // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isBinary(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:10:14 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>