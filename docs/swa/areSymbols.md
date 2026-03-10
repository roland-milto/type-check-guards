# areSymbols

## Maelezo

Hukagua kama ingizo ni safu iliyojaa (isiyo tupu) ambayo vipengele vyake vyote ni alama (symbols), na hurejesha `true`
au `false`.

### Kesi ya matumizi

Thibitisha kuwa uga wa usanidi (mf., orodha ya funguo za kipekee zinazowakilishwa kama alama) ni safu isiyo tupu yenye
alama pekee kabla ya kuitumia kwenye API zinazohitaji `symbol[]`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areSymbols` kuthibitisha ingizo lisilojulikana kabla ya kulichukulia kama `symbol[]`; hurejesha `false` kwa
> visivyo safu na safu tupu.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa safu isiyo tupu na kila kipengele ni alama (symbol).
- Huzuia matokeo chanya ya uongo kwa kukataa visivyo safu na safu tupu kupitia ukaguzi wa ndani wa filled-array.
- Ni muhimu kama ulinzi wa aina wakati wa utekelezaji (runtime type guard) kwa kuthibitisha orodha zenye alama pekee
  kabla ya uchakataji zaidi.

## Matumizi

### Sintaksia

Kazi:

- `areSymbols(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kuona kama ina vipengele vya alama (symbol).

### Uingizaji wa kazi wa ndani

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a ni safu ya alama pekee wakati wa utekelezaji
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areSymbols(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:23:55 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>