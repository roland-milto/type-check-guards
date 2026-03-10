# isFloat

## Lýsing

`isFloat` ákvarðar hvort gefið `value` sé endanleg fleytitala (tala (`number`) sem er ekki heiltala).

### Notkunartilvik

Staðfesta tölulegt inntak frá notanda þar sem brotagildi eru nauðsynleg (t.d. verð, mælingar, hlutföll) og hafna
heiltölum, `NaN` og óendanleika.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isFloat` þegar þú þarft að samþykkja aðeins endanlegar, ekki-heiltölulegar tölur; það hafnar heiltölum og
> óendanlegum tölum.

### Kostir

- Skilar `true` aðeins fyrir endanlegar, ekki-heiltölur (útilokar heiltölur, `NaN`, `Infinity` og `-Infinity`).
- Virkar með hvaða inntakstegund sem er (`unknown`) og þrengir gerð á öruggan hátt með því að athuga
  `typeof value === "number"`.
- Notar innbyggðar tölulegar varnir (`Number.isInteger`, `Number.isFinite`) fyrir fyrirsjáanlega hegðun.

## Notkun

### Málfræði

Fall:

- `isFloat(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé fleytitala.

### Staðbundinn innflutningur á falli

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // gildi er tala í keyrslu; hún er endanleg og ekki heiltala
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isFloat(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 16:08:10 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>