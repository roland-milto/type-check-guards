# isRegEx

## Lýsing

Ákvarðar hvort gefið gildi sé `RegExp`-tilvik.

### Notkunartilvik

Staðfesta gildi sem notandi gefur upp eða eru kvik (t.d. stillingar, API-farmar, inntök viðbóta) áður en þau eru
meðhöndluð sem regluleg segð.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isRegEx` til að þrengja `unknown` (eða samsettar) gildi áður en RegExp-sértækir eiginleikar eða aðferðir eru
> notaðar; það skilar `true` aðeins fyrir gildi sem eru tilvik af `RegExp`.

### Kostir

- Veitir einfaldan keyrslutíma tegundarvörð til að athuga hvort gildi sé `RegExp`.
- Hjálpar til við að koma í veg fyrir villur þegar kóði býst við reglulegri segð (t.d. áður en kallað er á `test`,
  `exec` eða lesið `source`).
- Virkar bæði með regex-bókstafsgildum og tilvikum sem eru búin til með `new RegExp(...)`.
- Skilar skýru boolean-niðustöðugildi (`true`/`false`) án þess að kasta villu fyrir inntök sem eru ekki regex.

## Notkun

### Málfræði

Fall:

- `isRegEx(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input er RegExp hér
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isRegEx(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:29:46 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>