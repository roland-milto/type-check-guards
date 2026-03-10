# areBigInts

## Maelezo

`areBigInts` huamua kama thamani ni safu isiyo tupu iliyo na thamani za `bigint` pekee.

### Kesi ya matumizi

Thibitisha ingizo lisilojulikana (mf., data inayofanana na JSON iliyochanganuliwa, mizigo ya API, au vigezo vya kazi
vilivyoandikwa kama `unknown`) ili kuhakikisha ni safu isiyo tupu ya thamani za `bigint` kabla ya kuchakata; hurejesha
`true` tu wakati vipengele vyote ni `bigint`, vinginevyo `false`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areBigInts` kama kinga ya wakati wa utekelezaji kabla ya kufanya operesheni za `bigint` pekee (mf., hesabu,
> ulinganisho) kwenye ingizo lisilojulikana.

### Faida

- Hakikisha kila kipengele ni `bigint`, ikirejesha `true` tu wakati safu nzima inalingana.
- Hukataa visivyo safu na safu tupu kwa muundo (kupitia `isFilledArray`), kuzuia kukubali kimakosa ingizo batili.
- Kushindwa haraka: hurejesha `false` mara tu kipengele kisicho `bigint` kinapopatikana.

## Matumizi

### Sintaksia

Kazi:

- `areBigInts(array)`

Vigezo:

- `array`: Thamani ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // kweli
console.log(areBigInts(b)); // si kweli
console.log(areBigInts(c)); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areBigInts(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:27:29 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>