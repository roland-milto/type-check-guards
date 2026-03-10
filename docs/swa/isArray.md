# isArray

## Maelezo

`isArray` hukagua kama thamani iliyotolewa ni safu (array) na hurejesha `true` ikiwa ni hivyo, vinginevyo `false`.

### Kesi ya matumizi

Thibitisha data isiyojulikana (mf., JSON iliyochanganuliwa au majibu ya API) ili kuhakikisha thamani ni safu (array)
kabla ya kuizunguka (iterate), kuifanyia indexing, au kufikia `.length`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isArray` unapohitaji ukaguzi wa wakati wa utekelezaji (runtime) kwa safu (arrays); hurejesha boolean na ni
> salama kuitumia na thamani za `unknown`.

### Faida

- Hutumia `Array.isArray` iliyojengwa ndani kwa utambuzi wa kuaminika wa safu (array) katika mazingira tofauti (mf.,
  iframes).
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi (guards) na mantiki ya matawi (branching).
- Hufanya kazi na aina yoyote ya ingizo kwa sababu parameta ni `unknown`.

## Matumizi

### Sintaksia

Kazi:

- `isArray(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input ni safu wakati wa utekelezaji
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isArray(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isArray](../_analysis/isArray.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 11:32:08 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>