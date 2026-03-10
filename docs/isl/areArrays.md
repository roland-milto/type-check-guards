# areArrays

## Lýsing

`areArrays` ákvarðar hvort gildi sé fyllt tvívítt fylki þar sem öll stök þess eru fylki.

### Notkunartilvik

Notaðu `areArrays` til að staðfesta töflu- eða fylkis-lík inntök (t.d. CSV-raðir, hnitagögn eða hópaða lista) áður en þú
framkvæmir raða-/dálkaaðgerðir; það skilar `false` ef inntakið er ekki fylki, er tómt eða inniheldur eitthvert stak sem
er ekki fylki.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areArrays` þegar þú þarft að tryggja að gildi sé ótómt 2D fylki og að hver röð sé fylki áður en þú ítrar eða
> vísar í innfelld fylki.

### Kostir

- Staðfestir að inntakið sé ótómt tvívítt fylki þar sem hvert stak er fylki.
- Skilar einfaldri boole-gildi niðurstöðu (`true`/`false`) sem hentar fyrir varnir og snemmbærar útgöngur.
- Hjálpar til við að koma í veg fyrir keyrsluvillur þegar síðari kóði gerir ráð fyrir aðgerðum á innfelldum fylkjum (
  t.d. að varpa yfir raðir).

## Notkun

### Málfræði

Fall:

- `areArrays(array)`

Færibreytur:

- `array`: Inntakið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value er tvívítt fylki með fylkjum sem stökum
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areArrays(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 13:40:02 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>