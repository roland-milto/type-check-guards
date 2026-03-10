# isNaN

## Lýsing

Ákvarðar hvort uppgefið `value` sé `NaN` af gerðinni `number` án þess að umbreyta strengjum.

### Notkunartilvik

Staðfesta ótraust eða lauslega týpað inntak (t.d. API-pakka, formgildi, þáttað JSON) til að greina sérstaka `NaN`-gildið
og meðhöndla það sérstaklega, á meðan inntök sem ekki eru tölur eru meðhöndluð sem ekki `NaN`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isNaN` þegar þú þarft að greina sérstaka tölugildið `NaN` og tryggja um leið að inntakið sé í raun `number` (
> engin umbreyting úr streng í tölu).

### Kostir

- Athugar hvort gildi sé `NaN` án þess að þvinga ekki-tölur (t.d. strengi) yfir í tölur.
- Skilar `true` aðeins fyrir gildi sem eru bæði af gerðinni `number` og `NaN`.
- Öruggt fyrir `unknown` inntök og forðast rangar jákvæðar niðurstöður vegna óbeinna umbreytinga.

## Notkun

### Málfræði

Fall:

- `isNaN(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé `NaN` af gerðinni `number`.

### Staðbundinn innflutningur á falli

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // satt
console.log(isNaN(b)); // ósatt
console.log(isNaN(c)); // ósatt

if (isNaN(a)) {
  // a er tala og sérstaklega NaN
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isNaN(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 15:46:33 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>