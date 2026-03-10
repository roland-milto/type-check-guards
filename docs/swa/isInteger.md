# isInteger

## Maelezo

Huamua kama `value` iliyotolewa ni namba ya integer salama.

### Kesi ya matumizi

Thibitisha ingizo lisiloaminika (mf., vigezo vya query, payload za JSON, vigeu vya mazingira) kabla ya kulitumia kama
integer kwa faharasa za array, upangaji wa kurasa (pagination), vihesabu, au vitambulisho vya hifadhidata (database
IDs).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isInteger` kuthibitisha ingizo lisilojulikana kabla ya kulitumia kama integer ya namba; hurudisha `true` tu kwa
> thamani ambazo `typeof value === "number"` na `Number.isSafeInteger(value)`.

### Faida

- Hukagua usalama wa aina na wa namba: hurudisha `true` tu pale ingizo linapokuwa ni namba na ni integer salama.
- Huzuia makosa ya kawaida ya kubadilisha aina ya namba: tungo kama "5" hurudisha `false` kwa usahihi.
- Hukataa zisizo-integer na integer zisizo salama, hivyo inafaa kwa vitambulisho (IDs), vihesabu, na uorodheshaji wa
  safu (array indexing).

## Matumizi

### Sintaksia

Kazi:

- `isInteger(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa ili kubaini kama ni integer.

### Uingizaji wa kazi wa ndani

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // kweli
const b = isInteger(-100);   // kweli
const c = isInteger("5");    // si kweli
const d = isInteger(5.5);    // si kweli
const e = isInteger(null);   // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isInteger(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 00:51:30 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>