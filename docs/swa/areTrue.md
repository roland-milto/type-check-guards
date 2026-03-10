# areTrue

## Maelezo

Hukagua kama safu isiyo tupu ina thamani za boolean `true` pekee.

### Kesi ya matumizi

Tumia `areTrue` kuthibitisha kuwa seti ya masharti ya awali au bendera za vipengele zote zimewezeshwa (thamani zote ni
`true`) kabla ya kuendelea, huku ukichukulia ingizo tupu au lililoharibika kuwa halijakidhiwa (`false`).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `areTrue` hurejesha `false` kwa safu tupu na kwa safu zenye thamani yoyote ambayo si `true` kikamilifu.

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni `true` kikamilifu na safu si tupu.
- Hushindwa haraka: hurejesha `false` mara tu thamani isiyo `true` inapopatikana.
- Hukataa ingizo batili (zisizo safu au safu tupu) kwa kurejesha `false`.

## Matumizi

### Sintaksia

Kazi:

- `areTrue(array)`

Vigezo:

- `array`: Safu ya kukaguliwa ili kuthibitisha kuwa thamani zote ni `true`.

### Uingizaji wa kazi wa ndani

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areTrue(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:52:49 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>