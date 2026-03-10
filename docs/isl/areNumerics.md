# areNumerics

## Lýsing

`areNumerics` athugar hvort gildi sé fylki sem er ekki tómt þar sem öll stök eru töluleg.

### Notkunartilvik

Notaðu `areNumerics` til að staðfesta ytri eða ógerðagreind gögn (t.d. JSON-pakka, fyrirspurnarbreytur, innslátt í
eyðublöð) áður en þú reiknar summur, meðaltöl eða aðrar tölulegar aðgerðir, og tryggðu að inntakið sé tölulegt fylki sem
er ekki tómt; annars skilar það `false`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areNumerics` til að verja `unknown` inntak áður en þú meðhöndlar það sem tölulegt fylki; það skilar `false`
> fyrir gildi sem eru ekki fylki og fyrir tóm fylki.

### Kostir

- Skilar `true` aðeins þegar inntakið er fylki sem er ekki tómt og hvert stak er tölulegt.
- Bregst hratt: hættir að athuga um leið og stak sem er ekki tölulegt finnst og skilar `false`.
- Hjálpar til við að staðfesta óþekkt inntak á öruggan hátt áður en tölulegar aðgerðir eru framkvæmdar.

## Notkun

### Málfræði

Fall:

- `areNumerics(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til tölulegra staka.

### Staðbundinn innflutningur á falli

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // satt
console.log(areNumerics(b)); // satt
console.log(areNumerics(c)); // ósatt
console.log(areNumerics(d)); // ósatt
console.log(areNumerics(e)); // ósatt

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areNumerics(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 16:05:40 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>