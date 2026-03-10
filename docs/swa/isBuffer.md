# isBuffer

## Maelezo

Hukagua kama thamani ni `Buffer` ya Node.js na kurejesha `true` au `false`.

### Kesi ya matumizi

Thibitisha ingizo wakati wa utekelezaji (mf., mizigo ya API, data ya faili, au bafa za ujumbe) ili kuhakikisha thamani
ni `Buffer` kabla ya kuichakata, na upate `false` kwa uhakika unapoendesha nje ya Node.js ambapo `Buffer` huenda
isiwepo.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isBuffer` kubana thamani za `unknown` ziwe `Buffer` kabla ya kuita mbinu mahususi za Buffer.

### Faida

- Hugundua kwa usalama instansi za Node.js `Buffer` kwa kutumia `Buffer.isBuffer`.
- Hurejesha `false` katika mazingira ambapo `Buffer` haipatikani, hivyo kuepuka makosa ya wakati wa utekelezaji.
- Hufanya kazi na ingizo la `unknown`, hivyo linafaa kwa uthibitishaji wa wakati wa utekelezaji na kubana aina (type
  narrowing).

## Matumizi

### Sintaksia

Kazi:

- `isBuffer(value)`

Vigezo:

- `value`: Thamani ya kupimwa.

### Uingizaji wa kazi wa ndani

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // kweli
console.log(isBuffer(b)); // si kweli

if (isBuffer(a)) {
  // a ni Buffer hapa
  console.log(a.toString("utf8"));
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isBuffer(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 16:33:24 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>