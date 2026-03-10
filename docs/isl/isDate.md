# isDate

## Lýsing

`isDate` ákvarðar hvort gefið gildi sé `Date` og skilar `true` fyrir `Date`-tilvik og `false` annars.

### Notkunartilvik

Staðfestu og þrengdu óþekkt gildi (t.d. beiðnigögn, stillingargildi eða túlkað JSON) áður en `Date`-aðgerðir eru
framkvæmdar, svo sem snið, samanburðir eða að kalla á `toISOString()`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isDate` til að þrengja `unknown` í `Date` á keyrslutíma; það skilar `true` aðeins fyrir raunveruleg `Date`
> -tilvik (ekki dagsetningarstrengi).

### Kostir

- Veitir einfaldan keyrslutímavörð til að staðfesta hvort gildi sé `Date`.
- Hjálpar til við að koma í veg fyrir tegundavillur með því að tryggja að aðeins `Date`-tilvik standist staðfestingu.
- Gagnlegt til að staðfesta óþekkt inntök (t.d. API-farm) áður en dagsetningarsértækar aðferðir eru notaðar.

## Notkun

### Málfræði

Fall:

- `isDate(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé af gerðinni `Date`.

### Staðbundinn innflutningur á falli

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input er Date hér
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isDate(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isDate](../_analysis/isDate.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 15:37:45 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>