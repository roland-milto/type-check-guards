# areMaps

## Maelezo

`areMaps` huamua kama safu iliyotolewa si tupu na vipengele vyake vyote ni mifano ya `Map`.

### Kesi ya matumizi

Thibitisha ingizo lisilojulikana (mf., kutoka uchanganuzi wa JSON, API za nje, au vyanzo vinavyobadilika) kabla ya
kulichukulia kama orodha isiyo tupu ya vitu vya `Map`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Hurejesha `false` kwa safu tupu; hurejesha `true` tu wakati safu imejaa na kila kipengele ni `Map`.

### Faida

- Hakikisha kila kipengele ni mfano wa `Map`, ikirejesha `true` tu wakati safu nzima inapita ukaguzi.
- Hukataa safu tupu kwa muundo, ikizuia kukubali kimakosa “hakuna data” kama ingizo halali.
- Ni muhimu kama ulinzi kabla ya kufanya operesheni mahususi za `Map` (mf., `.get()`, `.set()`, utembezi) kwenye
  mkusanyiko.

## Matumizi

### Sintaksia

Kazi:

- `areMaps(array)`

Vigezo:

- `array`: Safu ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items inahakikishwa kuwa ni safu isiyo tupu ya matukio ya Map wakati wa utekelezaji
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // si kweli kwa: safu tupu, au safu zenye thamani yoyote isiyo ya Map
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areMaps(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 16:14:46 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>