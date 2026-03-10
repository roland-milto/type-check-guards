# isNullOrUndefined

## Maelezo

Hukagua ikiwa thamani iliyotolewa ni `null` au `undefined`.

### Kesi ya matumizi

Tumia `isNullOrUndefined` unapohitaji kuchukulia `null` na `undefined` zote kama “hakuna thamani”, kama vile
kuthibitisha ingizo za hiari, kusawazisha payload za API, au kulinda njia za msimbo kabla ya kurejelea thamani inayoweza
kuwa haipo.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isNullOrUndefined` kujilinda dhidi ya thamani zinazokosekana kabla ya kufikia sifa au kuita mbinu; hurejesha
`true` tu kwa `null` na `undefined`.

### Faida

- Hutoa ulinzi ulio wazi na unaoweza kutumika tena kwa kugundua `null` na `undefined` mahali pamoja.
- Hurejesha boolean rahisi (`true`/`false`) ambayo ni rahisi kuunganisha katika masharti na uthibitishaji.
- Husaidia kuepuka makosa ya kawaida ya wakati wa utekelezaji kwa kukagua thamani zinazokosekana kabla ya kufikia sifa
  au kuita mbinu.

## Matumizi

### Sintaksia

Kazi:

- `isNullOrUndefined(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa ikiwa ni `null` au `undefined`.

### Uingizaji wa kazi wa ndani

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // shughulikia thamani inayokosekana
}

console.log(isNullOrUndefined(b)); // kweli
console.log(isNullOrUndefined(c)); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isNullOrUndefined(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 00:35:21 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>