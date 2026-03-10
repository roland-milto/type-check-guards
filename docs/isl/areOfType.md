# areOfType

## Lýsing

Athugar hvort öll stök í gefnu `array` séu af tilgreindri `type`.

### Notkunartilvik

Notaðu `areOfType` til að staðfesta óþekkt inntak (t.d. þáttað JSON, API-farm, notandainntak) áður en gerðarsértækar
aðgerðir eru framkvæmdar á hverju staki í fylki.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Þar sem `areOfType` er gerðarvörður þrengir TypeScript fylkið innan `if (areOfType(...)) {}` blokkar í
`Array<DataTypeOf<T>>`.

### Kostir

- Veitir TypeScript-gerðarvörð: þegar það skilar `true` er inntakið þrengt í `Array<DataTypeOf<T>>`.
- Staðfestir hvert stak gagnvart umbeðinni keyrslutímagerð og kemur í veg fyrir að fylki með blönduðum gerðum komist í
  gegn.
- Bregst hratt: skilar `false` um leið og stak sem passar ekki finnst.
- Hafnar ófylkjum og tómum fylkjum samkvæmt hönnun (fer eftir `isFilledArray`).

## Notkun

### Málfræði

Fall:

- `areOfType(array, type)`

Færibreytur:

- `array`: Fylkið sem á að athuga.
- `type`: Gerðin sem á að athuga gagnvart hverju staki í fylkinu.

### Staðbundinn innflutningur á falli

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values er nú number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areOfType(array, type)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 17:09:59 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>