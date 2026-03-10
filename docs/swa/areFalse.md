# areFalse

## Maelezo

`areFalse` hukagua kama vipengele vyote katika array iliyotolewa ni boolean `false` kabisa.

### Kesi ya matumizi

Thibitisha kwamba orodha ya feature flags, ukaguzi, au matokeo ya guard yote ni `false` kabla ya kuendelea (kwa mfano,
hakikisha kwamba hakuna masharti yanayozuia yaliyopo).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areFalse` unapohitaji uthibitishaji mkali kwamba array si tupu na ina thamani ya boolean `false` pekee.

### Faida

- Huhakikisha kila kipengele ni `false` kabisa (hakuna uongofu wa truthy/falsey).
- Hurejesha `false` kwa visivyo-array au array tupu kwa kuhitaji array iliyojaa kupitia `isFilledArray`.
- Husimama mapema kwenye kipengele cha kwanza ambacho si `false` kwa ufanisi.

## Matumizi

### Sintaksia

Kazi:

- `areFalse(array)`

Vigezo:

- `array`: Array ya kukagua, yenye vipengele vya aina yoyote.

### Uingizaji wa kazi wa ndani

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // kweli
const b = areFalse([false, true, false]);  // si kweli
const c = areFalse([false, "false", false]); // si kweli
const d = areFalse([]); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areFalse(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 16:18:39 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>