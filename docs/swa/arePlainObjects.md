# arePlainObjects

## Maelezo

Hukagua kama vipengele vyote vya safu ni objekti za kawaida, ikirudisha `true` tu ikiwa kila kipengele kinatimiza
vigezo.

### Kesi ya matumizi

Thibitisha data ya nje au isiyo na aina (mf., JSON iliyochanganuliwa, payload za API, uwasilishaji wa fomu) ili
kuhakikisha umepokea safu isiyo tupu ambapo kila ingizo ni objekti ya kawaida kabla ya kuizunguka na kusoma sifa.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `arePlainObjects` kuthibitisha ingizo lisilojulikana kabla ya kulichukulia kama `Record<string, unknown>[]` (au
> umbo la objekti lenye masharti zaidi) katika TypeScript.

### Faida

- Hakikisha kila kipengele katika safu ya ingizo ni objekti ya kawaida, ikirudisha `true` tu pale ambapo vipengele vyote
  vinafanana.
- Hukataa mapema ingizo batili (zisizo safu au safu tupu) kwa kurudisha `false`.
- Huchukulia objekti za object-literal na objekti za `Object.create(null)` kuwa ni objekti za kawaida halali.

## Matumizi

### Sintaksia

Kazi:

- `arePlainObjects(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kubaini kama ina vipengele vya objekti za kawaida.

### Uingizaji wa kazi wa ndani

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // kweli
const b = arePlainObjects([{}, Object.create(null)]); // kweli
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // si kweli
const d = arePlainObjects([] as unknown[]); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.arePlainObjects(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 16:55:55 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>