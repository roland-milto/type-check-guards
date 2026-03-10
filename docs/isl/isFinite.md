# isFinite

## Lýsing

Ákvarðar hvort gefið `value` sé endanleg `number`.

### Notkunartilvik

Notaðu `isFinite` til að staðfesta óþekkt inntak (t.d. úr JSON, eyðublöðum eða API-um) áður en tölulegir útreikningar
eru framkvæmdir, og tryggja að gildið sé raunveruleg, endanleg tala.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isFinite` skilar `true` aðeins fyrir endanlegar tölur; það skilar `false` fyrir `NaN`, `Infinity` og öll gildi sem
> eru ekki tölur.

### Kostir

- Notar innbyggða `Number.isFinite` fyrir áreiðanlega athugun á endanleika.
- Skilar `true` aðeins fyrir endanlegar tölur; skilar `false` fyrir `NaN`, `Infinity` og inntök sem eru ekki tölur.
- Einfalt, án aukaverkana skilyrðisfall sem hentar fyrir staðfestingu og varnar-/gæslulógík.

## Notkun

### Málfræði

Fall:

- `isFinite(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé endanlegt.

### Staðbundinn innflutningur á falli

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers er: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value er endanleg tala hér
  const doubled = value * 2;
  console.log(doubled);
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isFinite(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 16:30:16 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>