# isNaN

## Maelezo

Hubainisha kama `value` iliyotolewa ni `NaN` ya aina `number` bila kubadilisha tungo.

### Kesi ya matumizi

Thibitisha ingizo lisiloaminika au lenye aina zisizo thabiti (mf. mizigo ya API, thamani za fomu, JSON
iliyochanganuliwa) ili kugundua thamani maalum `NaN` na kuishughulikia wazi, huku ukichukulia ingizo lisilo namba kuwa
si `NaN`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isNaN` unapohitaji kugundua thamani maalum ya namba `NaN` huku ukihakikisha ingizo ni `number` kweli (hakuna
> ubadilishaji kutoka tungo kwenda namba).

### Faida

- Hukagua kama thamani ni `NaN` bila kulazimisha zisizo namba (mf. tungo) kuwa namba.
- Hurejesha `true` tu kwa thamani ambazo ni za aina `number` na pia ni `NaN`.
- Salama kwa ingizo la `unknown` na huepuka matokeo chanya ya uongo yanayotokana na ubadilishaji wa kimyakimya.

## Matumizi

### Sintaksia

Kazi:

- `isNaN(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa kama ni `NaN` ya aina `number`.

### Uingizaji wa kazi wa ndani

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // kweli
console.log(isNaN(b)); // si kweli
console.log(isNaN(c)); // si kweli

if (isNaN(a)) {
  // a ni nambari na hasa ni NaN
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isNaN(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 15:48:07 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>