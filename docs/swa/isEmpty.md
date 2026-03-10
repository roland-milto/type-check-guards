# isEmpty

## Maelezo

Hubaini kama thamani fulani ni tupu, ikirejesha `true` kwa `null`, `undefined`, tungo tupu/zenye nafasi tupu, arrays
tupu, `Map`/`Set` tupu, au vitu visivyo na sifa zozote zinazohesabika zinazomilikiwa.

### Kesi ya matumizi

Tumia `isEmpty` kuthibitisha ingizo na kugundua thamani zinazokosekana/tupu katika aina nyingi za data (mf. sehemu za
fomu, payload za API, vitu vya usanidi) ambapo `null`, `undefined`, tungo zenye nafasi tupu, mikusanyiko tupu, na vitu
visivyo na sifa zinapaswa kuchukuliwa kuwa tupu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isEmpty` ni zana inayorejesha boolean (si TypeScript type predicate), kwa hivyo haipunguzi aina (types) yenyewe;
> itumie kwa uthibitishaji/utawanyaji wa matawi (branching) badala ya kupunguza aina wakati wa uundaji (compile-time).

### Faida

- Huchukulia `null` na `undefined` kama `true` kwa ukaguzi wa utupu.
- Huchukulia tungo zenye nafasi tupu pekee kuwa tupu kwa kukata nafasi (trim) kabla ya kukagua urefu.
- Husaidia aina za kawaida za vihifadhi (mikusanyiko) (arrays, `Map`, `Set`) na vitu vya kawaida visivyo na sifa zozote
  zinazohesabika (enumerable) zinazomilikiwa.
- Huepuka kuhesabu sifa zilizorithiwa kwa kutumia ukaguzi wa `hasOwnProperty`.
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi (guards) na uthibitishaji.

## Matumizi

### Sintaksia

Kazi:

- `isEmpty(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa ili kubaini kama ni tupu.

### Uingizaji wa kazi wa ndani

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isEmpty(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 16:20:56 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>