# isSet

## Maelezo

Huamua kama thamani iliyotolewa ni `Set`.

### Kesi ya matumizi

Thibitisha ingizo kutoka vyanzo vya nje (mf., uchanganuzi wa JSON, ingizo la mtumiaji, au API za wahusika wengine) ili
kuhakikisha thamani ni `Set` kabla ya kufanya operesheni za `Set`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isSet` kupunguza thamani za `unknown` kabla ya kuita API mahususi za `Set` kama `.add`, `.has`, au `.size`.

### Faida

- Hutoa ukaguzi rahisi wa wakati wa utekelezaji ili kuthibitisha kama thamani ni `Set`.
- Husaidia kuzuia makosa ya aina kwa kuruhusu kutenganisha mapema wakati thamani si `Set`.
- Hufanya kazi na maudhui yoyote ya `Set` (tupu au yenye vipengee) na hurejesha `true`/`false` kwa uthabiti.

## Matumizi

### Sintaksia

Kazi:

- `isSet(value)`

Vigezo:

- `value`: Thamani ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a ni Set wakati wa utekelezaji
  console.log(a.size);
}

console.log(isSet(b)); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isSet(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isSet](../_analysis/isSet.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:11:16 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>