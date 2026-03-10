# areWeakMaps

## Maelezo

`areWeakMaps` hukagua kama thamani ni safu isiyo tupu ambapo kila kipengele ni `WeakMap`, ikirejesha `true` tu katika
hali hiyo na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha data ya wakati wa utekelezaji (mf., JSON iliyochanganuliwa, ingizo za programu-jalizi, au usanidi wenye aina
zisizo madhubuti) ili kuhakikisha ni safu isiyo tupu ya mifano ya `WeakMap` kabla ya kuizunguka na kuita mbinu za
`WeakMap`; hurejesha `false` ikiwa kipengele chochote si `WeakMap` au ikiwa safu ni tupu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areWeakMaps` kuthibitisha ingizo lisilojulikana kabla ya kulichukulia kama `WeakMap[]` isiyo tupu; hurejesha
`false` kwa safu tupu.

### Faida

- Hakikisha kwamba kila kipengele katika safu iliyotolewa ni mfano wa `WeakMap`.
- Hurejesha `false` kwa safu tupu, hivyo kuzuia kukubali kimakosa “hakuna data” kama ingizo halali.
- Ni muhimu kama kinga kabla ya kufanya operesheni mahususi za `WeakMap` kwenye vipengele vyote.

## Matumizi

### Sintaksia

Kazi:

- `areWeakMaps(array)`

Vigezo:

- `array`: Safu ya kukaguliwa ili kuthibitisha mifano ya `WeakMap`.

### Uingizaji wa kazi wa ndani

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list ni safu isiyo tupu ya matukio ya WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // si WeakMap[] isiyo tupu
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areWeakMaps(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:39:38 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>