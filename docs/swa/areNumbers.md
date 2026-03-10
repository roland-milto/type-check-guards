# areNumbers

## Maelezo

`areNumbers` hukagua kama thamani ni safu isiyo tupu ambapo vipengele vyote ni nambari.

### Kesi ya matumizi

Thibitisha data iliyotolewa na mtumiaji au API ili kuhakikisha ni safu isiyo tupu ya nambari kabla ya kukokotoa jumla,
wastani, au mkusanyiko mwingine wa nambari.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areNumbers` kuthibitisha safu zisizojulikana kabla ya kufanya hesabu za nambari; hurejesha `false` kwa safu
> tupu na kwa safu zenye thamani yoyote isiyo nambari.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa safu isiyo tupu na kila kipengele ni nambari.
- Huzuia matokeo chanya ya uongo kwa kukataa safu tupu na ingizo zisizo safu.
- Ni muhimu kama kinga kabla ya operesheni za nambari (mf., kujumlisha, kupata wastani) ili kuepuka makosa ya wakati wa
  utekelezaji.

## Matumizi

### Sintaksia

Kazi:

- `areNumbers(array)`

Vigezo:

- `array`: Safu inayopaswa kukaguliwa ili kubaini vipengele vya nambari.

### Uingizaji wa kazi wa ndani

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areNumbers(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:06:00 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>