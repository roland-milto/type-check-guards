# areOctals

## Maelezo

`areOctals` huamua kama thamani iliyotolewa ni safu isiyo tupu ya kamba halali za oktali.

### Kesi ya matumizi

Tumia `areOctals` unapothibitisha ingizo la mtumiaji, thamani za usanidi, au mzigo wa API ambao lazima uwe na literali
za oktali (kwa mfano, modi za ruhusa za faili kama `0o755`) na unataka kukataa safu tupu au ingizo lolote lisilo halali
kwa kurejesha `false`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areOctals` kuhakikisha una `unknown[]` isiyo tupu ambapo kila ingizo ni kamba halali ya oktali kabla ya
> kubadilisha (kwa mfano, kupitia `Number(...)` au uchanganuzi maalum).

### Faida

- Huthibitisha kuwa thamani ni safu isiyo tupu ambapo kila kipengele ni kamba ya oktali, ikirejesha `true` tu wakati
  vipengee vyote vinapita.
- Hushindwa haraka: hurejesha `false` mara tu kipengele kisicho cha oktali kinapopatikana.
- Ni muhimu kama kinga kabla ya kuchanganua au kubadilisha kamba za oktali ili kuepuka makosa ya wakati wa utekelezaji
  na ushughulikiaji usio thabiti wa ingizo.

## Matumizi

### Sintaksia

Kazi:

- `areOctals(array)`

Vigezo:

- `array`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value ni safu isiyo tupu ya tungo za oktali
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areOctals(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:58:26 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>