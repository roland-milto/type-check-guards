# areIntegers

## Lýsing

`areIntegers` ákvarðar hvort öll stök í tilteknu fylki séu heiltölur og skilar `true` ef svo er og `false` annars.

### Notkunartilvik

Notaðu `areIntegers` til að sannreyna gögn sem notandi gefur upp eða koma utan frá (t.d. fyrirspurnarbreytur, JSON-farm,
CSV-raðir) þegar rökfræðin þín krefst fyllts lista af heiltölugildum eins og auðkennum, teljurum, hliðrunum fyrir
síðuskiptingu eða fylkisvísum.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areIntegers` sem keyrsluvörn fyrir `unknown[]` inntök áður en þau eru meðhöndluð sem `number[]` sem inniheldur
> eingöngu heiltölur. Ef það skilar `false` er inntakið annaðhvort ekki fyllt fylki eða inniheldur að minnsta kosti eitt
> gildi sem er ekki heiltala.

### Kostir

- Skilar `true` aðeins þegar hvert stak er heiltala; annars skilar það `false`.
- Hjálpar til við að sannreyna óþekkt inntak áður en heiltöluaðgerðir eru framkvæmdar (t.d. vísun í fylki, talningar,
  auðkenni).
- Bregst hratt við: hættir að athuga um leið og stak sem er ekki heiltala finnst.

## Notkun

### Málfræði

Fall:

- `areIntegers(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til heiltölustaka.

### Staðbundinn innflutningur á falli

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // satt
console.log(areIntegers(b)); // satt
console.log(areIntegers(c)); // ósatt

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areIntegers(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:58:56 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>