# areBinaries

## Maelezo

Hukagua kama thamani iliyotolewa ni safu isiyo tupu ya kamba halali za binari na hurejesha `true` tu ikiwa vipengele
vyote vinapita uthibitishaji.

### Kesi ya matumizi

Tumia `areBinaries` unapopokea orodha isiyojulikana (mf., kutoka JSON, fomu, au API) na unahitaji kuhakikisha ni safu
isiyo tupu ya kamba za binari kabla ya kuichanganua au kuichakata.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areBinaries` kuthibitisha ingizo lisilojulikana kabla ya kubadilisha kamba za binari kuwa nambari/BigInts;
> huhakikisha safu si tupu na kila kipengele ni kamba halali ya binari.

### Faida

- Huthibitisha kwamba thamani ni safu isiyo tupu ambapo kila kipengele ni kamba halali ya binari.
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi, kurejea mapema, na uthibitishaji wa
  ingizo.
- Huzuia makosa ya uchanganuzi yanayotokea baadaye kwa kukataa safu zinazojumuisha ingizo lolote lisilo la binari.

## Matumizi

### Sintaksia

Kazi:

- `areBinaries(array)`

Vigezo:

- `array`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // kweli
console.log(areBinaries(b)); // si kweli
console.log(areBinaries([])); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areBinaries(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:16:01 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>