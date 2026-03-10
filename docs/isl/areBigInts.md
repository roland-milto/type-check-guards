# areBigInts

## Lýsing

`areBigInts` ákvarðar hvort gildi sé ekki-tómt fylki sem inniheldur eingöngu `bigint` gildi.

### Notkunartilvik

Staðfesta óþekkt inntak (t.d. þáttað JSON-lík gögn, API-pakka eða færibreytur falla sem eru týpaðar sem `unknown`) til
að tryggja að það sé ekki-tómt fylki af `bigint` gildum áður en unnið er úr því; skilar `true` aðeins þegar öll stök eru
`bigint`, annars `false`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areBigInts` sem keyrslutímavörð áður en þú framkvæmir `bigint`-eingöngu aðgerðir (t.d. reikniaðgerðir,
> samanburð) á óþekktu inntaki.

### Kostir

- Tryggir að hvert stak sé `bigint` og skilar aðeins `true` þegar allt fylkið passar.
- Hafnar gildum sem eru ekki fylki og tómum fylkjum samkvæmt hönnun (í gegnum `isFilledArray`), sem kemur í veg fyrir að
  ógild inntök séu óvart samþykkt.
- Hraðbilun: skilar `false` um leið og stak sem er ekki `bigint` finnst.

## Notkun

### Málfræði

Fall:

- `areBigInts(array)`

Færibreytur:

- `array`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // satt
console.log(areBigInts(b)); // ósatt
console.log(areBigInts(c)); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areBigInts(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:26:17 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>