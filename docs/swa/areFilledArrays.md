# areFilledArrays

## Maelezo

`areFilledArrays` hukagua kama safu ya pande mbili si tupu na safu zake zote ndogo si tupu.

### Kesi ya matumizi

Tumia `areFilledArrays` kuthibitisha ingizo la jedwali au linalofanana na matriki (mf., safu mlalo za CSV, data ya
gridi, matokeo yaliyopangwa kwa makundi) ili uweze kudhani kwa usalama kwamba kuna angalau safu ndogo moja na hakuna
safu ndogo iliyo tupu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areFilledArrays` unapohitaji kuhakikisha kwamba safu ya 2D ina angalau safu mlalo moja na kwamba kila safu
> mlalo ina angalau kipengele kimoja kabla ya kuizunguka (iterate) au kuifikia kwa faharasa (indexing).

### Faida

- Huthibitisha kwamba safu ya nje si tupu na kwamba kila safu ya ndani pia si tupu, ikirejesha `true` tu pale masharti
  yote mawili yanapotimizwa.
- Hufanya kazi na aina yoyote ya vipengele ndani ya safu ndogo (mf., nambari, tungo, vitu, safu zilizopachikwa) kwa
  sababu hukagua tu hali ya safu kuwa “imejaa”, si maudhui ya vipengele.
- Hutoa matokeo rahisi ya boolean (`true`/`false`) yanayofaa kama ulinzi kabla ya kuchakata data ya pande mbili.

## Matumizi

### Sintaksia

Kazi:

- `areFilledArrays(array)`

Vigezo:

- `array`: Safu ya pande mbili ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // kweli
console.log(areFilledArrays(b)); // kweli
console.log(areFilledArrays(c)); // kweli
console.log(areFilledArrays(d)); // si kweli
console.log(areFilledArrays(e)); // si kweli
console.log(areFilledArrays(f)); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areFilledArrays(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 11:59:08 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>