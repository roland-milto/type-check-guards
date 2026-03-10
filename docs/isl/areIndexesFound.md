# areIndexesFound

## Lýsing

`areIndexesFound` athugar hvort gildi sé ekki-tómt fylki þar sem öll stök eru gildar vísitölur, og skilar `true` ef svo
er en annars `false`.

### Notkunartilvik

Staðfesta gögn sem notandi gefur upp eða koma utan frá (t.d. þáttað JSON) sem búist er við að séu listi af vísitölum,
áður en þau eru notuð til að nálgast eða sneiða fylki.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areIndexesFound` til að staðfesta óþekkt inntak áður en þú meðhöndlar stök þess sem fylkisvísitölur; það
> skilar `false` fyrir tóm fylki og fyrir fylki sem innihalda gildi sem eru ekki vísitölur.

### Kostir

- Skilar `true` aðeins þegar inntakið er fyllt fylki og hvert stak er gilt vísitölugildi.
- Bregst hratt: skilar `false` um leið og stak sem er ekki vísitala finnst.
- Gagnlegt sem vörður áður en gildi eru notuð sem staðsetningar eða hliðranir í fylki.

## Notkun

### Málfræði

Fall:

- `areIndexesFound(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til þess hvort það uppfylli skilyrði fyrir vísitölur.

### Staðbundinn innflutningur á falli

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // satt
console.log(areIndexesFound(b)); // ósatt
console.log(areIndexesFound(c)); // ósatt

if (areIndexesFound(a)) {
  // Hér er staðfest að `a` sé fyllt fylki af vísitölum.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areIndexesFound(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:42:17 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>