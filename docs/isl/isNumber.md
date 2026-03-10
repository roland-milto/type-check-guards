# isNumber

## Lýsing

`isNumber` athugar hvort gildi sé endanleg tala sem er ekki `NaN`.

### Notkunartilvik

Staðfestu tölulegt inntak frá ótraustum uppruna (eyðublöð, fyrirspurnarbreytur, JSON-farmar) áður en útreikningar,
geymsla eða bilaprófanir fara fram, og tryggðu að aðeins endanlegar tölur fari í gegn (`true`) og allt annað skili
`false`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isNumber` til að staðfesta `unknown` gildi áður en þú framkvæmir reikniaðgerðir; það hafnar `NaN`, `Infinity`
> og `-Infinity`.

### Kostir

- Skilar `true` aðeins fyrir raunverulegar JavaScript-tölur (tegundarprófun auk þess að hafna `NaN` og óendanleika).
- Kemur í veg fyrir algeng staðfestingarvandamál þar sem `NaN`, `Infinity` eða `-Infinity` fara óvart í gegn sem tölur.
- Hentar vel sem keyrslutímavörn fyrir óþekkt inntak (t.d. JSON, notendainntak, ytri API).
- Einfalt, hratt og án aukaverkana.

## Notkun

### Málfræði

Fall:

- `isNumber(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // inntak er gilt endanlegt tala
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isNumber(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:09:29 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>