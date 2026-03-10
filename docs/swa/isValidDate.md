# isValidDate

## Maelezo

`isValidDate` hukagua kama thamani iliyotolewa ni kitu halali cha `Date` na hurudisha `true` tu kwa tarehe halisi zisizo
batili.

### Kesi ya matumizi

Thibitisha ingizo la mtumiaji au data ya API inayoweza kuwa na tarehe, ukihakikisha thamani ni mfano halisi wa `Date` na
si tarehe batili kabla ya kufanya hesabu za tarehe, uundaji wa muundo, au ulinganisho.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isValidDate` kabla ya kuitisha mbinu za `Date` (mf., `toISOString`, `getTime`) kwenye thamani zilizoandikwa
> kama `unknown` ili kuhakikisha ni vitu halali vya `Date`.

### Faida

- Hakikisha kuwa thamani ni mfano wa `Date` na si tu kamba au nambari inayofanana na tarehe.
- Hukataa tarehe batili (mf., `new Date("invalid")`) kwa kukagua thamani za muda za `NaN`.
- Kinga rahisi ya boolean ambayo ni rahisi kutumia kwenye masharti na mirija ya uthibitishaji.
- Husaidia kuzuia makosa ya wakati wa utekelezaji unapoitisha mbinu za tarehe kwa kuthibitisha ingizo kwanza.

## Matumizi

### Sintaksia

Kazi:

- `isValidDate(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ni mfano halali wa Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // si kweli
console.log(isValidDate("2025-12-22")); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isValidDate(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 16:53:02 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>