# areBuffers

## Lýsing

`areBuffers` athugar hvort gefið gildi sé ótómt, fyllt fylki þar sem hvert stak er `Buffer`, og skilar `true` ef svo er
og annars `false`.

### Notkunartilvik

Staðfestu innkomin chunk-fylki (t.d. úr streymum, skráaupphleðslum eða netpökkum) til að tryggja að allir hlutar séu
`Buffer`-tilvik áður en þau eru sameinuð, afkóðuð eða send áfram í dulritunar- eða tvíundarvinnsluföll.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areBuffers` til að staðfesta `unknown[]` áður en kallað er á Buffer-sértæk API eins og `Buffer.concat`, og
> tryggðu að fallið skili `true` aðeins þegar hvert stak er `Buffer`.

### Kostir

- Tryggir að hvert stak í inntakinu sé Node.js `Buffer`-tilvik og skilar aðeins `true` þegar allt fylkið passar.
- Hafnar ógildum inntökum snemma með því að krefjast ótóms, fyllts fylkis; skilar `false` fyrir tóm fylki eða gildi sem
  eru ekki fylki.
- Gagnlegt sem vörður áður en framkvæmdar eru aðgerðir sem eingöngu eiga við um buffer (t.d. samsetning, hakkun,
  tvíundarsamskiptareglur).

## Notkun

### Málfræði

Fall:

- `areBuffers(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til buffer-tilvika.

### Staðbundinn innflutningur á falli

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areBuffers(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 16:25:46 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>