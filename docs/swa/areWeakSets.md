# areWeakSets

## Maelezo

Hukagua kama ingizo ni safu isiyo tupu ambapo kila kipengele ni `WeakSet`, na hurejesha `true` tu katika hali hiyo.

### Kesi ya matumizi

Thibitisha ingizo la wakati wa utekelezaji (mfano, kutoka API, usanidi, au data iliyotolewa na mtumiaji) ili kuhakikisha
una orodha isiyo tupu ya instansi za `WeakSet` kabla ya kuendelea na mantiki inayotegemea tabia ya `WeakSet`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areWeakSets` kuthibitisha ingizo lisilojulikana kabla ya kulichukulia kama `WeakSet[]`. Hurejesha `false` kwa
> safu tupu na vitu visivyo safu.

### Faida

- Huhakikisha kila kipengele katika safu ya ingizo ni `WeakSet`.
- Hurejesha `false` kwa safu tupu, kuzuia matokeo ya bahati mbaya ya “zote ni halali” wakati data haipo.
- Hushindwa kwa usalama kwa kurejesha `false` wakati ingizo si safu iliyojaa (ikiwemo `null`).
- Ni muhimu kama kinga kabla ya kufanya operesheni zinazohitaji instansi za `WeakSet`.

## Matumizi

### Sintaksia

Kazi:

- `areWeakSets(array)`

Vigezo:

- `array`: Safu itakayokaguliwa kwa vitu vya `WeakSet`.

### Uingizaji wa kazi wa ndani

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a ni safu isiyo tupu ya matukio ya WeakSet
}

console.log(areWeakSets(a)); // kweli
console.log(areWeakSets(b)); // si kweli
console.log(areWeakSets(c)); // si kweli
console.log(areWeakSets(null as unknown)); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areWeakSets(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:11:01 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>