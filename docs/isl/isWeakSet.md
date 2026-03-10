# isWeakSet

## Lýsing

Ákvarðar hvort gefið `value` sé `WeakSet` af hlutum.

### Notkunartilvik

Notaðu `isWeakSet` þegar þú tekur við ógerðri inntaksgerð (t.d. frá ytri API-um, kvikri stillingu eða `unknown` gildum)
og þú þarft að staðfesta að það sé `WeakSet` áður en þú notar aðgerðir sem eru sértækar fyrir `WeakSet`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isWeakSet` til að þrengja `unknown` gildi í `WeakSet<object>` á keyrslutíma; athugaðu að `WeakSet` getur
> aðeins innihaldið tilvísanir í hluti.

### Kostir

- Veitir einfalda keyrslutímaathugun á því hvort gildi sé `WeakSet`.
- Hjálpar til við að koma í veg fyrir týpuvillur með því að tryggja að aðeins `WeakSet`-tilvik séu meðhöndluð sem slík.
- Virkar með hvaða `unknown` inntaki sem er og skilar skýru boole-gildi (`true`/`false`).

## Notkun

### Málfræði

Fall:

- `isWeakSet(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // satt
console.log(isWeakSet(b)); // ósatt

if (isWeakSet(a)) {
  // a er WeakSet í keyrslu
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isWeakSet(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:15:12 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>