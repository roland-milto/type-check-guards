# areErrors

## Maelezo

Hukagua kama safu si tupu na ina vitu vya `Error` pekee, ikirejesha `true` au `false`.

### Kesi ya matumizi

Thibitisha kwamba `unknown[]` iliyotolewa wakati wa utekelezaji (mf., makosa yaliyokusanywa, matokeo ya uthibitishaji,
au data iliyotolewa kutoka ufuatiliaji) ni orodha isiyo tupu ya vitu vya `Error` kabla ya kuipitia, kuandika kumbukumbu,
au kuitupa tena.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `areErrors` hurejesha `true` tu kwa safu iliyojaa ambapo kila kipengee ni `Error`; hurejesha `false` kwa safu tupu au
> ikiwa kipengele chochote si `Error`.

### Faida

- Hakikisha kila kipengele ni mfano wa `Error`, kuwezesha ushughulikiaji na uandishi wa kumbukumbu wa makosa kwa
  usalama.
- Hukataa safu tupu, kuzuia hali za “hakuna makosa” zisichukuliwe kimakosa kama orodha halali ya makosa.
- Hufanya kazi vizuri kama kinga ya wakati wa utekelezaji unaposhughulika na ingizo la `unknown[]` (mf., kutoka kwa API
  au vizuizi vya `catch`).

## Matumizi

### Sintaksia

Kazi:

- `areErrors(array)`

Vigezo:

- `array`: Safu ya kukagua kwa vitu vya `Error`.

### Uingizaji wa kazi wa ndani

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value ni safu isiyo tupu ya vitu vya Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areErrors(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 12:35:40 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>