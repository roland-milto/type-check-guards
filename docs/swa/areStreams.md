# areStreams

## Maelezo

`areStreams` huamua kama thamani ni safu iliyojaa ambayo kila kipengele ni `Stream`.

### Kesi ya matumizi

Thibitisha mikusanyiko iliyotolewa na mtumiaji au iliyojengwa kwa njia ya nguvu (mf., stream nyingi za kusoma faili)
kabla ya kuzipaipu, kuziendeleza (resume), au kuzifanyia kazi nyingine kama kikundi.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areStreams` kuthibitisha ingizo lisilojulikana kabla ya kulichukulia kama `Stream[]`; hurudisha `true` tu
> wakati thamani ni safu isiyo tupu na kila kipengele ni `Stream`.

### Faida

- Huhakikisha kuwa ingizo ni safu iliyojaa ambapo kila kipengele ni `Stream`.
- Hutoa ulinzi rahisi wa `true`/`false` kwa kuthibitisha mikusanyiko ya stream kabla ya kuchakata.
- Hushindwa haraka: hurudisha `false` mara tu kipengele kisicho `Stream` kinapopatikana.
- Husaidia kuzuia makosa ya wakati wa utekelezaji wakati msimbo unadhania kuwa vipengee vyote ni vielelezo vya `Stream`.

## Matumizi

### Sintaksia

Kazi:

- `areStreams(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kubaini kama ina vitu vya Stream.

### Uingizaji wa kazi wa ndani

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input ni safu iliyojaa ya vitu vya Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areStreams(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:35:45 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>