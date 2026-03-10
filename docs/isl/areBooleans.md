# areBooleans

## Lýsing

`areBooleans` athugar hvort tiltekið ótómt fylki innihaldi eingöngu boolean gildi og skilar `true` ef svo er, annars
`false`.

### Notkunartilvik

Staðfesta gögn sem notandi gefur upp eða koma utan frá (t.d. JSON-pakka, fyrirspurnarbreytur, stillingafylki) til að
tryggja að ótómur listi innihaldi eingöngu booleans áður en rökfræði með booleans er beitt eða hann er sendur í API sem
býst við `boolean[]`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areBooleans` til að staðfesta `unknown[]` áður en þú meðhöndlar það sem `boolean[]`; það skilar `false` fyrir
> tóm fylki, svo meðhöndlaðu það tilvik sérstaklega ef tómur listi ætti að vera leyfður.

### Kostir

- Skilar `true` aðeins þegar hvert stak er boolean og inntakið er ótómt fylki.
- Kemur í veg fyrir falskar jákvæðar niðurstöður með því að hafna tómum fylkjum (skilar `false`).
- Hentar vel sem keyrsluvörn áður en aðeins-boolean aðgerðir eru framkvæmdar (t.d. `every`, `some`, röklegar
  samlagningar).

## Notkun

### Málfræði

Fall:

- `areBooleans(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til boolean staka.

### Staðbundinn innflutningur á falli

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areBooleans(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:40:45 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>