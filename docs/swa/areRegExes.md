# areRegExes

## Maelezo

`areRegExes` hukagua kama thamani ni safu iliyojaa inayojumuisha tu vitu vya `RegExp`.

### Kesi ya matumizi

Thibitisha kuwa chaguo la usanidi (mf., orodha ya miundo ya kuruhusu/kukataa) ni safu isiyo tupu ya usemi wa kawaida
kabla ya kuitumia kwa ulinganishaji.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areRegExes` kupunguza `unknown` kuwa `RegExp[]` kabla ya kuorodhesha au kuunganisha miundo.

### Faida

- Huhakikisha thamani ni safu isiyo tupu ambapo kila kipengele ni mfano wa `RegExp`.
- Hutoa ulinzi rahisi wa boolean (`true`/`false`) kwa kuthibitisha ingizo la mtumiaji au usanidi.
- Husaidia kuzuia makosa ya wakati wa utekelezaji wakati msimbo wa baadaye unadhania kuwa vipengele vyote vinaunga mkono
  uendeshaji wa usemi wa kawaida.

## Matumizi

### Sintaksia

Kazi:

- `areRegExes(array)`

Vigezo:

- `array`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns ni safu ya RegExp hapa
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areRegExes(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:21:49 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>