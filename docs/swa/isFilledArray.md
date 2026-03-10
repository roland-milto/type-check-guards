# isFilledArray

## Maelezo

Hukagua kama `value` ni safu (array) yenye angalau kipengele kimoja, na hurudisha `true` au `false`.

### Kesi ya matumizi

Tumia `isFilledArray` kuthibitisha data inayoingia (mf., API payloads, thamani za fomu, usanidi) kabla ya kuizunguka (
iterate), kufikia kipengele cha kwanza, au kutumia mantiki inayohitaji angalau kipengee kimoja.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isFilledArray` ni guard ya wakati wa utekelezaji (runtime) inayorudisha boolean; haipunguzi aina za vipengele zaidi
> ya kuthibitisha kuwa safu si tupu.

### Faida

- Ukaguzi rahisi na wa haraka wa safu (array) isiyo tupu kwa kutumia `Array.isArray` na ukaguzi wa urefu (length).
- Husaidia kuepuka makosa ya wakati wa utekelezaji (runtime) wakati msimbo unadhania kuwa safu ina angalau kipengele
  kimoja.
- Matokeo ya boolean yaliyo wazi: hurudisha `true` kwa safu zisizo tupu na `false` vinginevyo.

## Matumizi

### Sintaksia

Kazi:

- `isFilledArray(value)`

Vigezo:

- `value`: Thamani ya kukagua ikiwa ni safu (array) isiyo tupu.

### Uingizaji wa kazi wa ndani

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input ni safu isiyo tupu wakati wa utekelezaji
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isFilledArray(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 11:48:55 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>