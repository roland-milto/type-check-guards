# areFinite

## Lýsing

`areFinite` athugar hvort gildi sé ótómt fylki þar sem öll stök eru endanlegar tölur, og skilar `true` ef svo er og
`false` annars.

### Notkunartilvik

Staðfesta fylki af tölulegum inntökum (t.d. línuritaraðir, hnitlista, mælisýni) áður en útreikningar eru framkvæmdir, og
tryggja að niðurstaðan sé `true` aðeins þegar öll gildi eru endanlegar tölur.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areFinite` þegar þú þarft að tryggja að fylki sé ótómt og innihaldi aðeins endanlegar tölur; það skilar
`false` fyrir tóm fylki og fyrir fylki sem innihalda `NaN` eða óendanleika.

### Kostir

- Skilar `true` aðeins þegar inntakið er ótómt fylki og hvert stak er endanleg tala.
- Hafnar `Infinity`, `-Infinity` og `NaN` með því að reiða sig á `isFinite`-athuganir fyrir hvert stak.
- Veitir einfalda boole-gildisniðurstöðu (`true`/`false`) sem hentar fyrir vörður og staðfestingarflæði.

## Notkun

### Málfræði

Fall:

- `areFinite(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til þess hvort öll stök þess séu endanleg.

### Staðbundinn innflutningur á falli

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // satt
console.log(areFinite(b)); // ósatt
console.log(areFinite(c)); // ósatt

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areFinite(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 16:35:21 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>