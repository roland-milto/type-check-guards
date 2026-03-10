# areIndexesFound

## Maelezo

`areIndexesFound` hukagua kama thamani ni safu isiyo tupu ambayo vipengele vyake vyote ni indeksi halali, ikirejesha
`true` ikiwa ndivyo na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha data iliyotolewa na mtumiaji au ya nje (mf., JSON iliyochanganuliwa) inayotarajiwa kuwa orodha ya indeksi
kabla ya kuitumia kufikia au kukata safu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areIndexesFound` kuthibitisha ingizo lisilojulikana kabla ya kuchukulia vipengele vyake kama indeksi za safu;
> hurejesha `false` kwa safu tupu na kwa safu zenye thamani zisizo indeksi.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa safu iliyojaa na kila kipengele ni indeksi halali.
- Hushindwa mapema: hurejesha `false` mara tu kipengele kisicho indeksi kinapopatikana.
- Ni muhimu kama kinga kabla ya kutumia thamani kama nafasi au ofseti za safu.

## Matumizi

### Sintaksia

Kazi:

- `areIndexesFound(array)`

Vigezo:

- `array`: Safu inayopaswa kukaguliwa ili kuthibitisha ulinganifu wa indeksi.

### Uingizaji wa kazi wa ndani

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // kweli
console.log(areIndexesFound(b)); // si kweli
console.log(areIndexesFound(c)); // si kweli

if (areIndexesFound(a)) {
  // Hapa, `a` imethibitishwa kuwa safu iliyojaa ya fahirisi.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areIndexesFound(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 01:04:19 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>