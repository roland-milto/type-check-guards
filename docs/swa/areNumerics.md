# areNumerics

## Maelezo

`areNumerics` hukagua kama thamani ni safu isiyo tupu ambapo vipengele vyote ni vya nambari.

### Kesi ya matumizi

Tumia `areNumerics` kuthibitisha data ya nje au isiyo na aina (mf., mizigo ya JSON, vigezo vya hoja, ingizo la fomu)
kabla ya kukokotoa jumla, wastani, au operesheni nyingine za nambari, kuhakikisha ingizo ni safu ya nambari isiyo tupu
na kurejesha `false` vinginevyo.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areNumerics` kulinda ingizo la `unknown` kabla ya kulichukulia kama safu ya nambari; hurejesha `false` kwa
> visivyo safu na kwa safu tupu.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa safu isiyo tupu na kila kipengele ni cha nambari.
- Hushindwa haraka: huacha kukagua mara tu kipengele kisicho cha nambari kinapopatikana, na kurejesha `false`.
- Husaidia kuthibitisha ingizo lisilojulikana kwa usalama kabla ya kufanya operesheni za nambari.

## Matumizi

### Sintaksia

Kazi:

- `areNumerics(array)`

Vigezo:

- `array`: Safu ya kukaguliwa ili kuona kama ina vipengele vya nambari.

### Uingizaji wa kazi wa ndani

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // kweli
console.log(areNumerics(b)); // kweli
console.log(areNumerics(c)); // si kweli
console.log(areNumerics(d)); // si kweli
console.log(areNumerics(e)); // si kweli

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areNumerics(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 16:07:33 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>