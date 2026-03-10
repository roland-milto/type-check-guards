# arePrimitives

## Maelezo

`arePrimitives` hutathmini kama vipengele vyote katika safu iliyotolewa, isiyo tupu, ni aina za msingi (primitive).

### Kesi ya matumizi

Thibitisha kuwa data inayoingia (mf., vigezo vya uulizaji, thamani za mstari wa CSV, au orodha ya ID/tagi) ina thamani
za msingi pekee kabla ya kusirialisha, kuhesha hashi, kuandika kumbukumbu, au kuipitisha kwa API ambazo hazipaswi
kupokea vitu (objects).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `arePrimitives` unapohitaji kuhakikisha kuwa `unknown[]` ina thamani za msingi (string, number, bigint, boolean,
> symbol, undefined, au null) pekee kabla ya uchakataji zaidi.

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni thamani ya msingi (primitive), na kuifanya kuwa kinga kali kwa safu
  za “bila vitu/kazi (objects/functions)”.
- Hushindwa mapema: hurejesha `false` mara tu kipengele kisicho cha msingi kinapopatikana.
- Pia hurejesha `false` kwa visivyo safu (non-arrays) na safu tupu (kupitia ukaguzi wa safu iliyojaa), hivyo kuzuia
  kukubali kimakosa ingizo batili.

## Matumizi

### Sintaksia

Kazi:

- `arePrimitives(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kubaini vipengele vya aina ya msingi (primitive).

### Uingizaji wa kazi wa ndani

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // kweli
const r2 = arePrimitives(b); // kweli
const r3 = arePrimitives(c); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.arePrimitives(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 00:06:36 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>