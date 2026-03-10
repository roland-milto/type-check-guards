# areNull

## Lýsing

Athugar hvort öll stök í gefna `array` séu `null`.

### Notkunartilvik

Staðfesta að gagnasafnsdálkur, listi af API-reitum eða staðgengilsfylki innihaldi aðeins `null` gildi áður en beitt er
rökfræði sem gerir ráð fyrir að allar færslur séu viljandi tómar.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areNull` þegar þú þarft stranga athugun á því að inntak sé ekki tómt fylki og að hvert stak sé nákvæmlega
`null` (ekki `undefined`, ekki falsk gildi).

### Kostir

- Skilar `true` aðeins þegar hvert stak er `null`, sem gerir þetta að ströngu „öll samsvara“ vörnum.
- Hafnar því sem er ekki fylki og tómum fylkjum með því að skila `false`, sem kemur í veg fyrir óvart sannleiksgildi á
  ógildu inntaki.
- Hentar vel sem forskoðunarskilyrði áður en unnið er með gögn sem verða að vera alfarið `null`.

## Notkun

### Málfræði

Fall:

- `areNull(array)`

Færibreytur:

- `array`: Inntaksfylkið sem á að athuga með tilliti til `null` staka.

### Staðbundinn innflutningur á falli

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // satt
const allNullB = areNull(b); // ósatt

const notAnArray = areNull(123 as unknown as unknown[]); // ósatt
const empty = areNull([]); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areNull(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areNull](../_analysis/areNull.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 15:43:49 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>