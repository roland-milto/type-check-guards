# areOfType

## Maelezo

Hukagua kama vipengele vyote katika `array` iliyotolewa ni vya `type` iliyoainishwa.

### Kesi ya matumizi

Tumia `areOfType` kuthibitisha ingizo lisilojulikana (mf., JSON iliyochanganuliwa, payload za API, ingizo la mtumiaji)
kabla ya kufanya operesheni mahususi za aina kwenye kila kipengele cha safu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Kwa kuwa `areOfType` ni type guard, TypeScript hupunguza safu ndani ya kizuizi cha `if (areOfType(...)) {}` hadi
`Array<DataTypeOf<T>>`.

### Faida

- Hutoa type guard ya TypeScript: inapotoa `true`, ingizo hupunguzwa hadi `Array<DataTypeOf<T>>`.
- Huthibitisha kila kipengele dhidi ya aina ya runtime iliyoombwa, kuzuia safu zenye aina mchanganyiko kupita.
- Hushindwa haraka: hurejesha `false` mara tu kipengele kisicholingana kinapopatikana.
- Hukataa visivyo-safu na safu tupu kwa muundo (hutegemea `isFilledArray`).

## Matumizi

### Sintaksia

Kazi:

- `areOfType(array, type)`

Vigezo:

- `array`: Safu ya kukagua.
- `type`: Aina ya kukagua dhidi ya kila kipengele kwenye safu.

### Uingizaji wa kazi wa ndani

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values sasa ni number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areOfType(array, type)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 17:11:28 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>