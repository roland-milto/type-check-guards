# isWeakMap

## Maelezo

Hubaini kama `value` iliyotolewa ni mfano wa `WeakMap`.

### Kesi ya matumizi

Tumia `isWeakMap` unapokubali thamani ya `unknown` (mf., kutoka API ya umma, mfumo wa programu-jalizi, au usanidi
unaobadilika) na unahitaji kuthibitisha kuwa ni `WeakMap` kabla ya kutumia tabia mahususi za `WeakMap`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isWeakMap` hufanya ukaguzi wa `instanceof WeakMap`; ni kinga ya wakati wa utekelezaji inayorejesha `true` tu kwa
> mifano halisi ya `WeakMap`.

### Faida

- Ukaguzi rahisi wa wakati wa utekelezaji ili kubaini kama thamani ni `WeakMap`.
- Husaidia kuzuia matumizi yasiyo sahihi ya API zinazohitaji `WeakMap` kwa kurejesha `true`/`false` badala ya kutupa
  hitilafu.
- Hufanya kazi na ingizo la `unknown`, hivyo ni rahisi kwenye mipaka ya moduli (mf., uchanganuzi, data ya nje, au msimbo
  usio na aina).

## Matumizi

### Sintaksia

Kazi:

- `isWeakMap(value)`

Vigezo:

- `value`: Thamani ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a ni WeakMap wakati wa utekelezaji
}

console.log(isWeakMap(a)); // kweli
console.log(isWeakMap(b)); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isWeakMap(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:26:58 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>