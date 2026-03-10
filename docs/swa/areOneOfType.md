# areOneOfType

## Maelezo

`areOneOfType` hukagua kama vipengele vyote katika safu isiyo tupu ni vya mojawapo ya aina za runtime zilizobainishwa.

### Kesi ya matumizi

Thibitisha data inayoingia (mfano, JSON iliyoparsiwa) ambapo uga lazima uwe safu isiyo tupu na vipengee vyake vimezuiwa
kwa seti inayojulikana ya aina za msingi; rudisha `false` wakati safu ni tupu au ina aina yoyote isiyoruhusiwa.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Kazi hii hurudisha boolean na haibani aina za vipengele vya safu wakati wa compile time; itumie kama hatua ya
> uthibitishaji wa runtime kabla ya uchakataji zaidi.

### Faida

- Huhakikisha kila kipengele katika safu (array) kinalingana na angalau aina moja ya runtime iliyoruhusiwa, ikirudisha
  `true` tu pale ambapo safu nzima imefaulu.
- Hukataa ingizo batili mapema: hurudisha `false` wakati `array` au `types` ni tupu au si safu iliyojaa.
- Ni muhimu kwa kuthibitisha mikusanyiko yenye aina mchanganyiko (mfano, namba na tungo) kwa mwito mmoja wa
  `areOneOfType`.

## Matumizi

### Sintaksia

Kazi:

- `areOneOfType(array, types)`

Vigezo:

- `array`: Safu ya vipengele vya kuthibitisha dhidi ya aina zilizotolewa.
- `types`: Safu ya tungo zinazowakilisha aina za data za kukagua dhidi yake.

### Uingizaji wa kazi wa ndani

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areOneOfType(array, types)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:38:44 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>