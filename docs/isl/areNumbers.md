# areNumbers

## Lýsing

`areNumbers` athugar hvort gildi sé ótómt fylki þar sem öll stök eru tölur.

### Notkunartilvik

Sannreyna gögn sem notandi eða API veitir til að tryggja að þau séu ótómt fylki af tölum áður en heildarsummur, meðaltöl
eða aðrar tölulegar samantektir eru reiknaðar.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areNumbers` til að sannreyna óþekkt fylki áður en tölulegir útreikningar eru framkvæmdir; það skilar `false`
> fyrir tóm fylki og fyrir fylki sem innihalda eitthvert gildi sem er ekki tala.

### Kostir

- Skilar `true` aðeins þegar inntakið er ótómt fylki og hvert stak er tala.
- Kemur í veg fyrir falskar jákvæðar niðurstöður með því að hafna tómum fylkjum og inntökum sem ekki eru fylki.
- Gagnlegt sem vörður áður en tölulegar aðgerðir eru framkvæmdar (t.d. samlagning, meðaltalsútreikningur) til að forðast
  keyrsluvillur.

## Notkun

### Málfræði

Fall:

- `areNumbers(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til talnastaka.

### Staðbundinn innflutningur á falli

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areNumbers(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:04:43 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>