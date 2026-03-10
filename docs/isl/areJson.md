# areJson

## Lýsing

Athugar hvort öll stök í fylki séu JSON-strengir og skilar `true` aðeins ef fylkið er útfyllt og hvert atriði er gilt
JSON; annars skilar `false`.

### Notkunartilvik

Staðfestu innkomin gögn (t.d. úr fyrirspurnarbreytum, umhverfisbreytum eða ytri API-um) þar sem þú býst við fylki af
JSON-kóðuðum strengjum og vilt hafna tómum fylkjum eða öllum færslum sem eru ekki JSON.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areJson` þegar þú þarft að staðfesta að `unknown[]` innihaldi eingöngu JSON-strengi áður en þú þáttgreinir
> þá (t.d. með `JSON.parse`).

### Kostir

- Skilar `true` aðeins þegar hvert stak er gildur JSON-strengur; annars skilar `false`.
- Bregst hratt: hættir að athuga um leið og stak sem er ekki JSON finnst.
- Hafnar tómum fylkjum samkvæmt hönnun og skilar `false` fyrir óútfyllt inntak.

## Notkun

### Málfræði

Fall:

- `areJson(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til JSON-strengja.

### Staðbundinn innflutningur á falli

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // satt
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // ósatt
const empty = areJson([]); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areJson(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areJson](../_analysis/areJson.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 16:16:20 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>