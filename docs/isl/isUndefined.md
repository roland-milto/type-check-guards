# isUndefined

## Lýsing

Athugar hvort tiltekið gildi sé `undefined`.

### Notkunartilvik

Notaðu `isUndefined` til að verja valfrjáls inntök, greina vantar eiginleika eða aðgreina á milli „ekki gefið upp“ (
`undefined`) og „viljandi tómt“ (`null`).

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isUndefined` þegar þú þarft sérstaklega að greina `undefined` (ekki `null`). Það er öruggt vegna þess að það
> byggir á `typeof value === "undefined"`.

### Kostir

- Veitir skýra, afdráttarlausa athugun á `undefined` með `typeof`, og forðast jaðartilvik með óskilgreindum breytum.
- Skilar einfaldri boolean-niðurstöðu (`true`/`false`) sem hentar fyrir vörður (guards), greiningar (branching) og
  staðfestingarrökfræði.
- Hjálpar til við að greina `undefined` frá öðrum „tómum“ gildum eins og `null`, `0`, `""` eða `NaN`.

## Notkun

### Málfræði

Fall:

- `isUndefined(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x er óskilgreint hér
} else {
  // x er ekki óskilgreint hér
}

const a = isUndefined(undefined); // satt
const b = isUndefined(null);      // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isUndefined(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:03:09 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>