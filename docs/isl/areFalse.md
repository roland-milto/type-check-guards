# areFalse

## Lýsing

`areFalse` athugar hvort öll stök í gefnu fylki séu strangt tiltekið boolean-gildið `false`.

### Notkunartilvik

Staðfesta að listi af feature flags, athugunum eða guard-niðurstöðum sé allur `false` áður en haldið er áfram (t.d.
staðfesta að engin hindrandi skilyrði séu til staðar).

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areFalse` þegar þú þarft stranga staðfestingu á því að fylki sé ekki tómt og innihaldi eingöngu boolean-gildið
`false`.

### Kostir

- Tryggir að hvert stak sé strangt tiltekið `false` (engin truthy/falsey þvingun).
- Skilar `false` fyrir ekki-fylki eða tóm fylki með því að krefjast fyllts fylkis í gegnum `isFilledArray`.
- Hættir snemma við fyrsta stak sem er ekki `false` til að auka skilvirkni.

## Notkun

### Málfræði

Fall:

- `areFalse(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga, sem inniheldur stök af hvaða gerð sem er.

### Staðbundinn innflutningur á falli

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // satt
const b = areFalse([false, true, false]);  // ósatt
const c = areFalse([false, "false", false]); // ósatt
const d = areFalse([]); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areFalse(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 16:17:26 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>