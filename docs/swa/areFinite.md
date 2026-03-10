# areFinite

## Maelezo

`areFinite` hukagua kama thamani ni safu isiyo tupu ambayo vipengele vyake vyote ni nambari zenye kikomo, ikirejesha
`true` ikiwa ndivyo na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha safu za ingizo za nambari (mf., mfululizo wa chati, orodha za viwianishi, sampuli za vipimo) kabla ya kufanya
hesabu, ukihakikisha matokeo ni `true` tu pale thamani zote zinapokuwa nambari zenye kikomo.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areFinite` unapohitaji kuhakikisha kuwa safu si tupu na ina nambari zenye kikomo pekee; hurejesha `false` kwa
> safu tupu na kwa safu zenye `NaN` au infinities.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa safu isiyo tupu na kila kipengele ni nambari yenye kikomo.
- Hukataa `Infinity`, `-Infinity`, na `NaN` kwa kutegemea ukaguzi wa `isFinite` kwa kila kipengele.
- Hutoa matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi na mtiririko wa uthibitishaji.

## Matumizi

### Sintaksia

Kazi:

- `areFinite(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kuthibitisha kuwa vipengele vyake vyote vina kikomo.

### Uingizaji wa kazi wa ndani

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // kweli
console.log(areFinite(b)); // si kweli
console.log(areFinite(c)); // si kweli

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areFinite(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 16:37:20 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>