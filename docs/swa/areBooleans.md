# areBooleans

## Maelezo

`areBooleans` hukagua kama safu fulani isiyo tupu ina thamani za boolean pekee, ikirejesha `true` ikiwa ndivyo na
`false` vinginevyo.

### Kesi ya matumizi

Thibitisha data iliyotolewa na mtumiaji au ya nje (mf., mizigo ya JSON, vigezo vya utafutaji, safu za usanidi) ili
kuhakikisha orodha isiyo tupu ina booleans pekee kabla ya kutumia mantiki ya boolean au kuipitisha kwa API zinazotarajia
`boolean[]`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areBooleans` kuthibitisha `unknown[]` kabla ya kuichukulia kama `boolean[]`; hurejesha `false` kwa safu tupu,
> hivyo shughulikia hali hiyo moja kwa moja ikiwa orodha tupu inapaswa kuruhusiwa.

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni boolean na ingizo ni safu isiyo tupu.
- Huzuia matokeo chanya ya uongo kwa kukataa safu tupu (hurejesha `false`).
- Hufanya kazi vizuri kama ulinzi wa wakati wa utekelezaji kabla ya operesheni za boolean pekee (mf., `every`, `some`,
  upunguzaji wa kimantiki).

## Matumizi

### Sintaksia

Kazi:

- `areBooleans(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kubaini vipengele vya boolean.

### Uingizaji wa kazi wa ndani

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areBooleans(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:42:31 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>