# isValidDate

## Lýsing

`isValidDate` athugar hvort tiltekið gildi sé gilt `Date`-hlut og skilar `true` aðeins fyrir raunverulegar, ekki-ógildar
dagsetningar.

### Notkunartilvik

Staðfesta notandainntak eða API-gögn sem geta innihaldið dagsetningar og tryggja að gildið sé raunverulegt `Date`-tilvik
en ekki ógild dagsetning áður en dagsetningaútreikningar, sniðmátun eða samanburður er framkvæmdur.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isValidDate` áður en þú kallar `Date`-aðferðir (t.d. `toISOString`, `getTime`) á gildi sem eru týpuð sem
`unknown` til að tryggja að þau séu gild `Date`-hlutir.

### Kostir

- Tryggir að gildi sé tilvik af `Date` og ekki bara dagsetningarlík strengur eða tala.
- Hafnar ógildum dagsetningum (t.d. `new Date("invalid")`) með því að athuga hvort tímagildi sé `NaN`.
- Einföld boolean-vörn sem er auðvelt að nota í skilyrðum og staðfestingarferlum.
- Hjálpar til við að koma í veg fyrir keyrsluvillur þegar dagsetningaaðferðir eru kallaðar með því að sannreyna inntakið
  fyrst.

## Notkun

### Málfræði

Fall:

- `isValidDate(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // inntak er gilt Date-tilvik
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // ósatt
console.log(isValidDate("2025-12-22")); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isValidDate(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 16:40:40 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>