# areFloats

## Maelezo

`areFloats` hukagua kama safu iliyotolewa imejazwa na vipengele vyake vyote ni float.

### Kesi ya matumizi

Tumia `areFloats` unapopokea `unknown[]` (kwa mfano, kutoka JSON, vigezo vya query, au API za nje) na unahitaji
kuhakikisha ni safu iliyojaa ambapo kila kipengee ni float kabla ya kuendesha mantiki ya namba kama wastani, uingilizi (
interpolation), au hesabu za takwimu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areFloats` kulinda `unknown[]` kabla ya kuichukulia kama `number[]` yenye float pekee; hurejesha `false` kwa
> safu tupu na kwa kipengele chochote kisicho float.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa safu isiyo tupu na kila kipengele ni float.
- Hushindwa haraka: hurejesha `false` mara tu kipengele kisicho float kinapopatikana.
- Husaidia kuthibitisha ingizo lisilojulikana kabla ya kufanya hesabu maalum za float.

## Matumizi

### Sintaksia

Kazi:

- `areFloats(array)`

Vigezo:

- `array`: Safu ya kukaguliwa ili kuona kama ina vipengele vya float.

### Uingizaji wa kazi wa ndani

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // kweli
console.log(areFloats(b)); // si kweli
console.log(areFloats(c)); // si kweli

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areFloats(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 15:59:45 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>