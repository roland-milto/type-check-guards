# isNumeric

## Lýsing

`isNumeric` ákvarðar hvort tiltekið `value` teljist tölulegt með því að bera uppleysta gerð þess saman við
`NUMERIC_TYPES`.

### Notkunartilvik

Notaðu `isNumeric` til að sannreyna inntök (t.d. API-farm, eyðublaðagildi, stillingar) áður en tölulegar aðgerðir eru
framkvæmdar, og til að samþykkja á samræmdan hátt tölulegar gerðir (eins og `BigInt`) samkvæmt `NUMERIC_TYPES`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isNumeric` er forsögn (predicate) sem skilar boolean; líttu á hana sem keyrslutímaathugun á því hvort gildi tilheyri
> tölulegu gerðasafni sem bókasafnið skilgreinir.

### Kostir

- Notar `getTypeOf` ásamt `NUMERIC_TYPES` til að miðstýra rökfræði fyrir greiningu á tölugildum og halda athugunum
  samræmdum í gegnum allan kóðagrunn.
- Skilar einföldu boolean-gildi (`true`/`false`) til að auðvelda greinun í flæði og notkun sem vörður (guard-style).
- Styður margar framsetningar tölugilda (t.d. `number`, `BigInt`) eins og skilgreint er af `NUMERIC_TYPES`.

## Notkun

### Málfræði

Fall:

- `isNumeric(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé af tölulegri gerð.

### Staðbundinn innflutningur á falli

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v er talið tölulegt samkvæmt gerðarreglum bókasafnsins
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isNumeric(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 15:53:02 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>