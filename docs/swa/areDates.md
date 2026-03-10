# areDates

## Maelezo

`areDates` huamua kama safu fulani imejazwa na ina vitu vya `Date` pekee, na hurudisha `true` tu wakati vipengele vyote
ni tarehe halali.

### Kesi ya matumizi

Tumia `areDates` kuthibitisha ingizo lisilojulikana (mf., JSON iliyochanganuliwa, data ya fomu, payload za API) kabla ya
kuendesha mantiki maalum ya tarehe kama kupanga kwa muda, kuunda muundo wa tarehe, au kukokotoa masafa.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Hurudisha `true` tu kwa safu zisizo tupu ambapo kila kipengele ni `Date`; safu tupu hutoa `false`.

### Faida

- Huhakikisha kwamba safu (array) si tupu kabla ya kuthibitisha maudhui yake, hivyo kuzuia kurudisha `true` kwa ingizo
  tupu.
- Huthibitisha kwamba kila kipengele ni mfano wa `Date`, na hurudisha `false` mara moja inapopatikana kutolingana kwa
  kwanza.
- Ni muhimu kama ukaguzi wa aina ya guard kabla ya kufanya operesheni maalum za tarehe kwenye vipengele vya safu.

## Matumizi

### Sintaksia

Kazi:

- `areDates(array)`

Vigezo:

- `array`: Safu (array) ya kukaguliwa ili kuona kama ina vitu vya `Date`.

### Uingizaji wa kazi wa ndani

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // kweli
console.log(areDates(b)); // si kweli
console.log(areDates(c)); // si kweli

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areDates(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areDates](../_analysis/areDates.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 15:32:24 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>