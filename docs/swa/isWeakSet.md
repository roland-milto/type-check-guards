# isWeakSet

## Maelezo

Hubaini kama `value` iliyotolewa ni `WeakSet` ya vitu (objects).

### Kesi ya matumizi

Tumia `isWeakSet` unapokubali ingizo lisilo na aina (mf., kutoka API za nje, usanidi unaobadilika, au thamani za
`unknown`) na unahitaji kuthibitisha kuwa ni `WeakSet` kabla ya kutumia operesheni maalum za `WeakSet`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isWeakSet` kupunguza (narrow) thamani ya `unknown` kuwa `WeakSet<object>` wakati wa utekelezaji; kumbuka kwamba
`WeakSet` inaweza kuwa na marejeo ya object pekee.

### Faida

- Hutoa ukaguzi rahisi wa wakati wa utekelezaji ili kubaini kama thamani ni `WeakSet`.
- Husaidia kuzuia makosa ya aina kwa kuhakikisha ni matukio ya `WeakSet` pekee yanayotendewa hivyo.
- Hufanya kazi na ingizo lolote la `unknown` na hurudisha matokeo ya boolean yaliyo wazi (`true`/`false`).

## Matumizi

### Sintaksia

Kazi:

- `isWeakSet(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // kweli
console.log(isWeakSet(b)); // si kweli

if (isWeakSet(a)) {
  // a ni WeakSet wakati wa utekelezaji
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isWeakSet(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:19:16 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>