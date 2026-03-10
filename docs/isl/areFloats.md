# areFloats

## Lýsing

`areFloats` athugar hvort tiltekið fylki sé fyllt og hvort öll stök þess séu fleytitölur.

### Notkunartilvik

Notaðu `areFloats` þegar þú færð `unknown[]` (t.d. úr JSON, fyrirspurnarbreytum eða ytri API-um) og þú þarft að tryggja
að það sé ótómt fylki þar sem hvert atriði er fleytitala áður en þú keyrir talnalógík eins og meðaltalsútreikninga,
innskot eða tölfræðilega útreikninga.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areFloats` til að verja `unknown[]` áður en þú meðhöndlar það sem `number[]` sem inniheldur eingöngu
> fleytitölur; það skilar `false` fyrir tóm fylki og fyrir hvert stak sem er ekki fleytitala.

### Kostir

- Skilar `true` aðeins þegar inntakið er ótómt fylki og hvert stak er fleytitala.
- Bregst hratt: skilar `false` um leið og stak sem er ekki fleytitala finnst.
- Hjálpar til við að sannreyna óþekkt inntak áður en fleytitalnasértækar útreikningar eru framkvæmdar.

## Notkun

### Málfræði

Fall:

- `areFloats(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til fleytitalna.

### Staðbundinn innflutningur á falli

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // satt
console.log(areFloats(b)); // ósatt
console.log(areFloats(c)); // ósatt

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areFloats(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 15:57:55 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>