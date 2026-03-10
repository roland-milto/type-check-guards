# areNaNs

## Lýsing

`areNaNs` athugar hvort öll stök í fylki séu `NaN` og skilar `true` aðeins ef hvert stak er `NaN`.

### Notkunartilvik

Staðfesta innkomin gögn þar sem `NaN` er notað sem merkigildi og þú verður að tryggja að allt fylkið samanstandi
eingöngu af `NaN` (t.d. til að greina algerlega vantaða talnarunu).

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areNaNs` þegar þú þarft að staðfesta að fylki innihaldi eingöngu tölugildið `NaN` (án þvingunar úr streng í
> tölu).

### Kostir

- Skilar `true` aðeins þegar hvert stak er `NaN` (strangt próf á öllum stökum).
- Þvingar ekki strengi í tölur; gildi eins og "NaN" haldast ekki-`NaN` og gera niðurstöðuna `false`.
- Skilar `false` fyrir ófyllt fylki, sem kemur í veg fyrir óvart `true` á tómu inntaki.

## Notkun

### Málfræði

Fall:

- `areNaNs(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `NaN` gilda.

### Staðbundinn innflutningur á falli

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // satt
const b = areNaNs([NaN, 1, NaN]); // ósatt
const c = areNaNs([NaN, "NaN", NaN]); // ósatt
const d = areNaNs([NaN, null, NaN]); // ósatt
const e = areNaNs([] as unknown[]); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areNaNs(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 15:51:57 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>