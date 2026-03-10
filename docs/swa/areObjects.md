# areObjects

## Maelezo

`areObjects` hukagua kama safu iliyojaa iliyotolewa ina vitu (objects) pekee.

### Kesi ya matumizi

Tumia `areObjects` unapopokea safu isiyojulikana (mf., kutoka uchanganuzi wa JSON au API za nje) na unahitaji
kuhakikisha kuwa si tupu na kwamba kila kipengele ni kitu (object) kabla ya kuizunguka (iterate) na kufikia sifa za
kitu (object properties).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areObjects` kuthibitisha `unknown[]` kabla ya kuchukulia vipengele kuwa ni vitu (objects); hurejesha `false`
> kwa safu tupu.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa ni safu iliyojaa na kila kipengele ni kitu (object).
- Husitisha mapema na kurejesha `false` mara tu kipengele kisicho kitu (object) kinapopatikana.
- Husaidia kuthibitisha ingizo lisilojulikana kabla ya kufanya operesheni mahususi za vitu (objects).

## Matumizi

### Sintaksia

Kazi:

- `areObjects(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kuona kama ina vipengele vya vitu (objects).

### Uingizaji wa kazi wa ndani

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value ni safu iliyojaa ya vitu
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areObjects(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 00:10:31 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>