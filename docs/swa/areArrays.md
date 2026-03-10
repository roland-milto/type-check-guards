# areArrays

## Maelezo

`areArrays` huamua kama thamani ni safu ya vipimo viwili iliyojaa ambayo vipengele vyake vyote ni safu.

### Kesi ya matumizi

Tumia `areArrays` kuthibitisha ingizo za jedwali au zinazofanana na matriki (mf., mistari ya CSV, data ya gridi, au
orodha zilizopangwa kwa makundi) kabla ya kufanya uendeshaji wa mstari/safu-wima; hurejesha `false` ikiwa ingizo si
safu, ni tupu, au lina kipengele chochote kisicho safu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areArrays` unapohitaji kuhakikisha kuwa thamani ni safu ya 2D isiyo tupu na kwamba kila mstari ni safu kabla ya
> kuzunguka au kuorodhesha ndani ya safu zilizopachikwa.

### Faida

- Huthibitisha kwamba ingizo ni safu ya vipimo viwili isiyo tupu ambapo kila kipengele ni safu.
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi na kutoka mapema.
- Husaidia kuzuia makosa ya wakati wa utekelezaji wakati msimbo wa baadaye unadhania uendeshaji wa safu zilizopachikwa (
  mf., kuchora ramani ya safu za mistari).

## Matumizi

### Sintaksia

Kazi:

- `areArrays(array)`

Vigezo:

- `array`: Ingizo linalopaswa kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value ni safu ya vipimo viwili yenye safu kama vipengele
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areArrays(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 13:41:36 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>