# areUndefined

## Maelezo

`areUndefined` hukagua kama kila kipengele katika safu iliyotolewa ni `undefined`.

### Kesi ya matumizi

Thibitisha kwamba orodha ya matokeo ya hiari haina thamani halisi (ni `undefined` tu), kwa mfano, baada ya kufanya
mapping ya lookups ambapo viingilio vilivyokosekana vinawakilishwa kama `undefined`, na unataka kuthibitisha kwamba
lookups zote zimeshindwa.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areUndefined` unapohitaji kuthibitisha kwamba `unknown[]` ina thamani za `undefined` pekee; hurejesha `false`
> kwa safu tupu na kwa ingizo lisilo safu/halali kutokana na ukaguzi wa ndani wa `isFilledArray`.

### Faida

- Hurejesha `false` kwa visivyo safu na safu tupu kwa kuhitaji safu iliyojaa kupitia `isFilledArray`.
- Hakikisha kila kipengele ni `undefined`, si baadhi tu, hivyo kufanya nia iwe wazi.
- Ni muhimu kama prediketi ya mtindo wa ulinzi wakati wa kuthibitisha mikusanyiko ya ingizo lisilojulikana.

## Matumizi

### Sintaksia

Kazi:

- `areUndefined(array)`

Vigezo:

- `array`: Safu ya kukaguliwa kwa vipengele vya `undefined`.

### Uingizaji wa kazi wa ndani

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Kumbuka: hurudisha false kwa safu tupu
const r4 = areUndefined([]); // false

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areUndefined(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:58:06 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>