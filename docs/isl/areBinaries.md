# areBinaries

## Lýsing

Athugar hvort gefið gildi sé ekki-tómt fylki af gildum tvíundarstrengjum og skilar `true` aðeins ef öll stök standast
staðfestingu.

### Notkunartilvik

Notaðu `areBinaries` þegar þú færð óþekktan lista (t.d. úr JSON, eyðublöðum eða API-um) og þarft að tryggja að hann sé
ekki-tómt fylki af tvíundarstrengjum áður en þú þáttaðir eða vinnur úr honum.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areBinaries` til að staðfesta óþekkt inntak áður en tvíundarstrengjum er breytt í tölur/BigInts; það tryggir
> að fylkið sé ekki-tómt og að hvert stak sé gildur tvíundarstrengur.

### Kostir

- Staðfestir að gildi sé ekki-tómt fylki þar sem hvert stak er gildur tvíundarstrengur.
- Skilar einfaldri boole-gildi (`true`/`false`) sem hentar fyrir vörður, snemmtilbakaskil og inntaksstaðfestingu.
- Kemur í veg fyrir villur við áframhaldandi þáttun með því að hafna fylkjum sem innihalda einhverja færslu sem er ekki
  tvíund.

## Notkun

### Málfræði

Fall:

- `areBinaries(array)`

Færibreytur:

- `array`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // satt
console.log(areBinaries(b)); // ósatt
console.log(areBinaries([])); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areBinaries(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:14:53 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>