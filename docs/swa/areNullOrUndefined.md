# areNullOrUndefined

## Maelezo

Hukagua kama vipengele vyote katika safu iliyotolewa ni `null` au `undefined`.

### Kesi ya matumizi

Thibitisha kwamba orodha ya sehemu za hiari haina thamani halisi (ina `null`/`undefined` pekee) kabla ya kuamua kuruka
uchakataji au kuonyesha hali ya “hakuna thamani zilizotolewa”.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areNullOrUndefined` unapohitaji kuthibitisha kwamba safu ina thamani zilizokosekana pekee (`null`/`undefined`).
> Kumbuka kwamba hurejesha `false` kwa safu tupu.

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni `null` au `undefined`.
- Hurejesha `false` kwa safu tupu, kusaidia kutofautisha “hakuna data” na “thamani zote hazipo”.
- Hufanya kazi na `unknown[]`, hivyo ni salama kutumia kabla ya kubana aina (narrowing types).

## Matumizi

### Sintaksia

Kazi:

- `areNullOrUndefined(array)`

Vigezo:

- `array`: Safu ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === kweli

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === si kweli

const empty = areNullOrUndefined([]);
// empty === si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areNullOrUndefined(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 00:31:32 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>