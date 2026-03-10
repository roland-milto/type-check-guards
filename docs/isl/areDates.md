# areDates

## Lýsing

`areDates` ákvarðar hvort tiltekið fylki sé fyllt og innihaldi eingöngu `Date`-hluti og skilar `true` aðeins þegar öll
stök eru gildar dagsetningar.

### Notkunartilvik

Notaðu `areDates` til að staðfesta óþekkt inntak (t.d. þáttað JSON, eyðublaðagögn, API-farm) áður en dagsetningasértæk
rökfræði er keyrð, eins og að raða eftir tíma, forsníða eða reikna bil.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Skilar `true` aðeins fyrir ó tóm fylki þar sem hvert stak er `Date`; tóm fylki gefa `false`.

### Kostir

- Tryggir að fylki sé ekki tómt áður en innihald þess er staðfest, sem kemur í veg fyrir `true` fyrir tómt inntak.
- Staðfestir að hvert stak sé `Date`-tilvik og skilar `false` strax við fyrsta ósamræmi.
- Gagnlegt sem vörður-lík athugun áður en dagsetningasértækar aðgerðir eru framkvæmdar á stökum fylkisins.

## Notkun

### Málfræði

Fall:

- `areDates(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `Date`-hluta.

### Staðbundinn innflutningur á falli

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // satt
console.log(areDates(b)); // ósatt
console.log(areDates(c)); // ósatt

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areDates(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areDates](../_analysis/areDates.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 15:30:49 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>