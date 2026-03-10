# areEqual

## Maelezo

`areEqual` hukagua kama vipengele vyote katika safu ni sawa na thamani fulani inayotarajiwa, na hurejesha `true` tu kwa
safu zisizo tupu ambapo kila kipengee kinalingana.

### Kesi ya matumizi

Thibitisha kwamba orodha ina thamani moja tu iliyoruhusiwa (kwa mfano, bendera zote za hali ni `true`, majukumu yote ni
`"admin"`, au maingizo yote ya namba ni sawa na konstanti inayohitajika) huku ukichukulia ingizo tupu kuwa batili (
`false`).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areEqual` unapohitaji ukaguzi mkali wa vipengee vyote; hurejesha `false` kwa safu tupu na kwa ingizo lolote
> lisilo safu au lisilojaa.

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele kinalingana na thamani inayotarajiwa; vinginevyo hurejesha `false`.
- Hushindwa mapema: huacha kukagua mara tu kipengele kisicholingana kinapopatikana.
- Hulinda dhidi ya ingizo batili kwa kurejesha `false` wakati ingizo si safu iliyojaa.

## Matumizi

### Sintaksia

Kazi:

- `areEqual(value, expected)`

Vigezo:

- `value`: Safu ya kukaguliwa.
- `expected`: Kipengele cha kulinganisha kila kipengee cha safu nacho.

### Uingizaji wa kazi wa ndani

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areEqual(value, expected)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:52:18 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>