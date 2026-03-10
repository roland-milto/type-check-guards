# areValidDates

## Lýsing

Ákvarðar hvort fylki sé ekki tómt og samanstandi eingöngu af gildum `Date`-hlutum.

### Notkunartilvik

Notaðu `areValidDates` til að staðfesta fylki sem notendur eða API veita áður en dagsetningatengdar aðgerðir eru
framkvæmdar (röðun, bilaprófanir, snið), og tryggðu að allar færslur séu raunverulegir, gildir `Date`-hlutir og að
listinn sé ekki tómur.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `areValidDates` skilar `false` fyrir tómt fylki; tryggðu að fylkið eigi að vera ekki tómt áður en þú treystir á það
> sem staðfestingarskref.

### Kostir

- Skilar `true` aðeins þegar hvert stak er gilt `Date`-tilvik (engin ógild dagsetning eins og `new Date('invalid')`).
- Hafnar tómu inntaki með því að skila `false`, sem tryggir að þú samþykkir aðeins merkingarbæra, ekki tóma lista af
  dagsetningum.
- Veitir einfalda boolean-verndarsinnaða athugun sem er auðvelt að setja saman með öðrum staðfestingum.

## Notkun

### Málfræði

Fall:

- `areValidDates(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga, sem getur innihaldið `Date`-hluti.

### Staðbundinn innflutningur á falli

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // satt
console.log(areValidDates(b)); // ósatt
console.log(areValidDates(c)); // ósatt
console.log(areValidDates(d)); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areValidDates(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:32:23 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>