# isInteger

## Lýsing

Ákvarðar hvort tiltekið `value` sé örugg heiltölutala.

### Notkunartilvik

Sannreyna ótraust inntak (t.d. fyrirspurnarbreytur, JSON-farm, umhverfisbreytur) áður en það er notað sem heiltala fyrir
fylkisvísitölur, síðuskiptingu, teljara eða gagnagrunnsauðkenni.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isInteger` til að sannreyna óþekkt inntak áður en þú meðhöndlar það sem tölulega heiltölu; það skilar `true`
> aðeins fyrir gildi þar sem `typeof value === "number"` og `Number.isSafeInteger(value)`.

### Kostir

- Athugar bæði gerð og tölulegt öryggi: skilar `true` aðeins þegar inntakið er tala og örugg heiltala.
- Kemur í veg fyrir algengar gildrur við tölulegar þvinganir: strengir eins og "5" skila réttilega `false`.
- Hafnar óheilum tölum og óöruggum heilum tölum, sem gerir það hentugt fyrir auðkenni, teljara og vísun í fylki.

## Notkun

### Málfræði

Fall:

- `isInteger(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé heiltala.

### Staðbundinn innflutningur á falli

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // satt
const b = isInteger(-100);   // satt
const c = isInteger("5");    // ósatt
const d = isInteger(5.5);    // ósatt
const e = isInteger(null);   // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isInteger(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:50:16 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>