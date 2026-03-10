# isDate

## Maelezo

`isDate` huamua kama thamani iliyotolewa ni `Date`, ikirudisha `true` kwa matukio ya `Date` na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha na punguza thamani zisizojulikana (mf., data ya ombi, thamani za usanidi, au JSON iliyochanganuliwa) kabla ya
kufanya shughuli za `Date` kama uundaji wa muundo, ulinganisho, au kuita `toISOString()`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isDate` kupunguza `unknown` hadi `Date` wakati wa utekelezaji; hurudisha `true` tu kwa matukio halisi ya
`Date` (si tungo za tarehe).

### Faida

- Inatoa ulinzi rahisi wa wakati wa utekelezaji ili kuthibitisha kama thamani ni `Date`.
- Husaidia kuzuia makosa ya aina kwa kuhakikisha ni matukio ya `Date` pekee yanayopita uthibitishaji.
- Ni muhimu kwa kuthibitisha ingizo lisilojulikana (mf., mizigo ya API) kabla ya kutumia mbinu maalum za tarehe.

## Matumizi

### Sintaksia

Kazi:

- `isDate(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa ili kubaini aina ya `Date`.

### Uingizaji wa kazi wa ndani

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input ni Date hapa
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isDate(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isDate](../_analysis/isDate.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 15:47:50 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>