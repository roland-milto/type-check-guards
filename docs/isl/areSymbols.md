# areSymbols

## Lýsing

Athugar hvort inntak sé fyllt fylki þar sem öll stök eru tákn (symbols) og skilar `true` eða `false`.

### Notkunartilvik

Staðfestu að stillingareitur (t.d. listi af einstökum lyklum táknaður með táknum) sé ótómt fylki sem inniheldur eingöngu
tákn áður en hann er notaður í API sem krefjast `symbol[]`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areSymbols` til að staðfesta óþekkt inntak áður en þú meðhöndlar það sem `symbol[]`; það skilar `false` fyrir
> það sem er ekki fylki og fyrir tóm fylki.

### Kostir

- Skilar `true` aðeins þegar inntakið er ótómt fylki og hvert stak er tákn (symbol).
- Kemur í veg fyrir rangar jákvæðar niðurstöður með því að hafna því sem er ekki fylki og tómum fylkjum með innri
  athugun á fylltu fylki.
- Gagnlegt sem keyrslutíma tegundarvörður til að staðfesta lista sem innihalda eingöngu tákn áður en frekari vinnsla fer
  fram.

## Notkun

### Málfræði

Fall:

- `areSymbols(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til táknstaka.

### Staðbundinn innflutningur á falli

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a er fylki sem inniheldur eingöngu tákn við keyrslu
  const first = a[0];
  console.log(typeof first); // "tákn"
}

console.log(areSymbols(b)); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areSymbols(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:22:14 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>