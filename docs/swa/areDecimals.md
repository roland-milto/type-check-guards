# areDecimals

## Maelezo

Hukagua kama vipengele vyote kwenye safu ni nambari za desimali na safu imejaa, ikirejesha `true` au `false`.

### Kesi ya matumizi

Thibitisha orodha zinazotolewa na mtumiaji (mf., safu wima za CSV au ingizo za fomu) ili kuhakikisha safu si tupu na
kila ingizo ni thamani ya desimali kabla ya uchanganuzi au mahesabu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areDecimals` unapohitaji ukaguzi wa haraka wa boolean kwamba `unknown[]` si tupu na kila kipengele ni
> uwakilishi wa desimali.

### Faida

- Huhakikisha ingizo ni safu iliyojaa kabla ya kuthibitisha vipengele, hivyo kuzuia kukubali kimakosa orodha tupu.
- Huthibitisha kila kipengele kwa `isDecimal`, hivyo thamani zilizochanganyika au zisizo halali husababisha matokeo ya
  papo hapo ya `false`.
- Hutoa matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi na mtiririko wa uthibitishaji wa kurudi mapema.

## Matumizi

### Sintaksia

Kazi:

- `areDecimals(array)`

Vigezo:

- `array`: Safu ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // kweli
console.log(areDecimals(b)); // si kweli
console.log(areDecimals(c)); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areDecimals(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 15:59:10 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>