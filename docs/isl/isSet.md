# isSet

## Lýsing

Ákvarðar hvort tiltekið gildi sé `Set`.

### Notkunartilvik

Staðfesta inntök frá ytri uppruna (t.d. JSON-þáttun, notandainntak eða API frá þriðja aðila) til að tryggja að gildi sé
`Set` áður en `Set`-aðgerðir eru framkvæmdar.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isSet` til að þrengja `unknown` gildi áður en þú kallar á `Set`-sértæk API eins og `.add`, `.has` eða `.size`.

### Kostir

- Veitir einfalda keyrslutímaathugun til að staðfesta hvort gildi sé `Set`.
- Hjálpar til við að koma í veg fyrir tegundavillur með því að leyfa snemma greiningu þegar gildi er ekki `Set`.
- Virkar með hvaða `Set`-innihaldi sem er (tómt eða með gögnum) og skilar `true`/`false` á áreiðanlegan hátt.

## Notkun

### Málfræði

Fall:

- `isSet(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a er Set á keyrslutíma
  console.log(a.size);
}

console.log(isSet(b)); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isSet(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isSet](../_analysis/isSet.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:10:04 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>