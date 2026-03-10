# isBinary

## Maelezo

`isBinary` huamua kama thamani ni tungo ya binari (kwa hiari ikiwa na kiambishi awali `0b`/`0B`) na hurejesha `true` au
`false`.

### Kesi ya matumizi

Thibitisha tungo zinazotolewa na mtumiaji (mf., sehemu za fomu, hoja za CLI, thamani za usanidi) ili kuhakikisha
zinawakilisha tarakimu za binari pekee, kwa hiari zikiwa na kiambishi awali `0b`/`0B`, kabla ya uchakataji zaidi.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isBinary` kama type guard kabla ya kuchanganua au kubadilisha tungo kuwa `BigInt`/`Number` ili kuepuka ingizo
> batili.

### Faida

- Inakubali tungo za binari zenye au zisizo na kiambishi awali `0b`/`0B`.
- Inakataa tungo tupu na tungo zenye nafasi nyeupe mwanzoni/mwisho (ASCII ≤ 32).
- Hurejesha `true`/`false` bila kutupa hitilafu, hivyo ni salama kwa ingizo lisilojulikana.

## Matumizi

### Sintaksia

Kazi:

- `isBinary(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // kweli
const b = isBinary("1010");   // kweli
const c = isBinary("0b1020"); // si kweli
const d = isBinary(0b1010);     // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isBinary(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:11:23 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>