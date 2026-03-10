# areNaNs

## Maelezo

`areNaNs` hukagua kama vipengele vyote katika safu ni `NaN` na hurejesha `true` tu ikiwa kila kipengele ni `NaN`.

### Kesi ya matumizi

Thibitisha data inayoingia ambapo `NaN` hutumika kama thamani ya alama (sentinel) na lazima uhakikishe safu nzima
inajumuisha `NaN` pekee (mf., kugundua mfululizo wa nambari ambao wote hawapo).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areNaNs` unapohitaji kuthibitisha kwamba safu ina thamani ya nambari `NaN` pekee (bila kubadilisha tungo kuwa
> nambari).

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni `NaN` (ukaguzi mkali wa vipengele vyote).
- Haibadilishi (coerce) tungo kuwa nambari; thamani kama "NaN" hubaki si-`NaN` na hufanya matokeo kuwa `false`.
- Hurejesha `false` kwa safu zisizojaa, kuzuia `true` ya bahati mbaya kwenye ingizo tupu.

## Matumizi

### Sintaksia

Kazi:

- `areNaNs(array)`

Vigezo:

- `array`: Safu ya kukaguliwa kwa thamani za `NaN`.

### Uingizaji wa kazi wa ndani

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // kweli
const b = areNaNs([NaN, 1, NaN]); // si kweli
const c = areNaNs([NaN, "NaN", NaN]); // si kweli
const d = areNaNs([NaN, null, NaN]); // si kweli
const e = areNaNs([] as unknown[]); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areNaNs(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 15:53:35 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>