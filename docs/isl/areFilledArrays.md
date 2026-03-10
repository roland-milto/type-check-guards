# areFilledArrays

## Lýsing

`areFilledArrays` athugar hvort tvívítt fylki sé ekki tómt og að öll undurfylki þess séu ekki tóm.

### Notkunartilvik

Notaðu `areFilledArrays` til að staðfesta töflu- eða fylkis-líkt inntak (t.d. CSV-raðir, hnitagögn, hópaðar niðurstöður)
svo þú getir örugglega gert ráð fyrir að til sé að minnsta kosti eitt undurfylki og að ekkert undurfylki sé tómt.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areFilledArrays` þegar þú þarft að tryggja að 2D fylki hafi að minnsta kosti eina röð og að hver röð hafi að
> minnsta kosti eitt stak áður en þú ítrar yfir það eða vísar í það með vísitölu.

### Kostir

- Staðfestir að ytra fylkið sé ekki tómt og að hvert innra fylki sé einnig ekki tómt, og skilar `true` aðeins þegar bæði
  skilyrðin eru uppfyllt.
- Virkar með hvaða stakagerðum sem er inni í undurfylkjunum (t.d. tölur, strengir, hlutir, földuð fylki) vegna þess að
  það athugar aðeins hvort fylki séu „fyllt“, ekki innihald staka.
- Veitir einfalda boole-gildisniðurstöðu (`true`/`false`) sem hentar sem vörður áður en tvívíð gögn eru unnin.

## Notkun

### Málfræði

Fall:

- `areFilledArrays(array)`

Færibreytur:

- `array`: Tvívíða fylkið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // satt
console.log(areFilledArrays(b)); // satt
console.log(areFilledArrays(c)); // satt
console.log(areFilledArrays(d)); // ósatt
console.log(areFilledArrays(e)); // ósatt
console.log(areFilledArrays(f)); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areFilledArrays(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 11:57:13 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>