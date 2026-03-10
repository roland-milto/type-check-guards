# isFalse

## Maelezo

`isFalse` hukagua kama thamani iliyotolewa ni sawa kabisa (strictly equal) na literal ya boolean `false`.

### Kesi ya matumizi

Thibitisha data isiyojulikana (mf., kutoka JSON, query params, au ingizo la mtumiaji) ambapo ni thamani ya boolean iliyo
wazi `false` pekee inayopaswa kuchukuliwa kama bendera halali, na kila kitu kingine kikatalike.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isFalse` unapohitaji kukubali tu literal `false` na kukataa thamani nyingine zote za uongo (falsy); hurudisha
`true` tu kwa `value === false`.

### Faida

- Hutoa ukaguzi mkali wa literal ya boolean `false` bila uongofu (coercion).
- Husaidia kutofautisha `false` na thamani nyingine za uongo (falsy) kama `0`, `""`, `null`, na `undefined`.
- Huboresha usomekaji kwa kufanya nia iwe wazi wakati wa kuthibitisha ingizo lisilojulikana.

## Matumizi

### Sintaksia

Kazi:

- `isFalse(value)`

Vigezo:

- `value`: Thamani inayopaswa kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input ni false hasa hapa
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isFalse(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 16:44:32 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>