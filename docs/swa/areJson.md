# areJson

## Maelezo

Hukagua kama vipengele vyote vya safu ni kamba za JSON, ikirejesha `true` tu ikiwa safu imejazwa na kila kipengele ni
JSON halali; vinginevyo hurejesha `false`.

### Kesi ya matumizi

Thibitisha data inayoingia (mf., kutoka query params, environment variables, au external APIs) ambapo unatarajia safu ya
kamba zilizosimbwa kwa JSON na unataka kukataa safu tupu au ingizo lolote lisilo-JSON.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areJson` unapohitaji kuthibitisha kwamba `unknown[]` ina kamba za JSON pekee kabla ya kuzichanganua (mf., kwa
`JSON.parse`).

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni kamba halali ya JSON; vinginevyo hurejesha `false`.
- Hushindwa mapema: huacha kukagua mara tu kipengele kisicho-JSON kinapopatikana.
- Hukataa safu tupu kwa muundo, ikirejesha `false` kwa ingizo lisilojazwa.

## Matumizi

### Sintaksia

Kazi:

- `areJson(array)`

Vigezo:

- `array`: Safu ya kukaguliwa ili kubaini vipengele vya kamba za JSON.

### Uingizaji wa kazi wa ndani

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // kweli
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // si kweli
const empty = areJson([]); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areJson(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areJson](../_analysis/areJson.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 16:17:36 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>