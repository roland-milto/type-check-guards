# isNull

## Maelezo

Hubaini kama `value` iliyotolewa ni `null`.

### Kesi ya matumizi

Tumia `isNull` kuthibitisha ingizo au sehemu za mzigo wa API ambapo `null` ni thamani ya alama (sentinel) yenye maana na
lazima ishughulikiwe tofauti na `undefined` au thamani nyingine.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isNull` unapohitaji kutofautisha `null` na `undefined` na thamani nyingine za uongo; hurudisha `true` kwa
`null` pekee.

### Faida

- Hutoa ukaguzi sahihi wa `null` bila kuichanganya na `undefined`.
- Hufanya kazi kwa uaminifu kwa aina yoyote ya ingizo kwa sababu inakubali `unknown`.
- Rahisi, ya haraka, na haina athari za pembeni; hurudisha tu `true` au `false`.

## Matumizi

### Sintaksia

Kazi:

- `isNull(value)`

Vigezo:

- `value`: Thamani ya kukagua kama ni `null`.

### Uingizaji wa kazi wa ndani

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // kweli
console.log(isNull(b)); // si kweli

if (isNull(a)) {
  // a ni null hapa
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isNull(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isNull](../_analysis/isNull.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 15:40:53 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>