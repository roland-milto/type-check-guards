# isIndexFound

## Maelezo

`isIndexFound` huamua kama thamani iliyotolewa ni nambari kamili isiyo hasi, ikionyesha kuwa indeks imepatikana.

### Kesi ya matumizi

Thibitisha kuwa matokeo ya utafutaji yanawakilisha indeks inayoweza kutumika (nambari kamili `>= 0`) kabla ya kuindeksi
kwenye safu au kamba, ili kuzuia matumizi ya bahati mbaya ya `-1` au thamani zisizo za nambari.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isIndexFound` baada ya operesheni kama `indexOf`, `findIndex`, au utafutaji maalum ambapo `-1` (au thamani
> nyingine zisizo halali) zinaweza kuonyesha “haijapatikana”. Inaporejesha `true`, thamani ni nambari na ni salama
> kutumika kama indeks ya safu/kamba.

### Faida

- Hutoa ulinzi rahisi wa aina (type guard) ili kugundua kama indeks imepatikana kwa kukagua nambari kamili isiyo hasi.
- Hurejesha `true` tu kwa thamani halali zinazofanana na indeks (nambari kamili `>= 0`), ikikataa hasi, zisizo nambari
  kamili, na zisizo nambari.
- Husaidia kuepuka makosa ya off-by-one na ya thamani ya alama (sentinel value) unapofanya kazi na API zinazorejesha
  `-1` kwa “haijapatikana”.

## Matumizi

### Sintaksia

Kazi:

- `isIndexFound(value)`

Vigezo:

- `value`: Thamani ya kukagua kama ni nambari kamili isiyo hasi.

### Uingizaji wa kazi wa ndani

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx ni nambari hapa na ni >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Matumizi ya kawaida na indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isIndexFound(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 00:47:58 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>