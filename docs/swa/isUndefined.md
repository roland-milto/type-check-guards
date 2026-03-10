# isUndefined

## Maelezo

Hukagua kama thamani iliyotolewa ni `undefined`.

### Kesi ya matumizi

Tumia `isUndefined` kulinda ingizo za hiari, kugundua sifa zinazokosekana, au kutofautisha kati ya “haijatolewa” (
`undefined`) na “tupu kwa makusudi” (`null`).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isUndefined` unapohitaji hasa kugundua `undefined` (si `null`). Ni salama kwa sababu inategemea
`typeof value === "undefined"`.

### Faida

- Hutoa ukaguzi wazi na wa moja kwa moja wa `undefined` kwa kutumia `typeof`, na hivyo kuepuka hali za pembeni
  zinazohusiana na vigeu ambavyo havijatangazwa.
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi, matawi, na mantiki ya uthibitishaji.
- Husaidia kutofautisha `undefined` na thamani nyingine “tupu” kama `null`, `0`, `""`, au `NaN`.

## Matumizi

### Sintaksia

Kazi:

- `isUndefined(value)`

Vigezo:

- `value`: Thamani inayopaswa kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x haijafafanuliwa hapa
} else {
  // x haijafafanuliwa hapa
}

const a = isUndefined(undefined); // kweli
const b = isUndefined(null);      // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isUndefined(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:04:26 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>