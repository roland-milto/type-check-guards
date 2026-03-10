# areUndefined

## Lýsing

`areUndefined` athugar hvort hvert stak í gefnu fylki sé `undefined`.

### Notkunartilvik

Staðfesta að listi af valkvæðum niðurstöðum innihaldi engin raunveruleg gildi (aðeins `undefined`), t.d. eftir að hafa
varpað (mapping) uppflettingum þar sem vantar færslur eru táknaðar sem `undefined`, og þú vilt staðfesta að allar
uppflettingar hafi mistekist.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areUndefined` þegar þú þarft að staðfesta að `unknown[]` innihaldi eingöngu `undefined` gildi; það skilar
`false` fyrir tóm fylki og fyrir inntök sem eru ekki fylki/ógild vegna innri `isFilledArray` athugunarinnar.

### Kostir

- Skilar `false` fyrir hluti sem eru ekki fylki og fyrir tóm fylki með því að krefjast fyllts fylkis með
  `isFilledArray`.
- Tryggir að hvert stak sé `undefined`, ekki bara sum, sem gerir tilganginn skýran.
- Gagnlegt sem vörður-líkt forsagnarföll (predicate) við staðfestingu á óþekktum inntakssöfnum.

## Notkun

### Málfræði

Fall:

- `areUndefined(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `undefined` staka.

### Staðbundinn innflutningur á falli

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // satt
const r2 = areUndefined(b); // ósatt
const r3 = areUndefined(c); // ósatt

// Athugið: skilar ósatt fyrir tóma fylki
const r4 = areUndefined([]); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areUndefined(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:56:18 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>