# areValidDates

## Maelezo

Hubaini kama safu si tupu na ina vitu vya `Date` halali pekee.

### Kesi ya matumizi

Tumia `areValidDates` kuthibitisha safu zinazotolewa na mtumiaji au API kabla ya kufanya shughuli zinazohusiana na
tarehe (kupanga, ukaguzi wa masafa, uumbizaji), kuhakikisha kuwa kila ingizo ni kitu halisi, halali cha `Date` na kwamba
orodha si tupu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `areValidDates` hurejesha `false` kwa safu tupu; hakikisha safu imekusudiwa kuwa si tupu kabla ya kuitegemea kama
> hatua ya uthibitishaji.

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni mfano halali wa `Date` (hakuna tarehe batili kama
  `new Date('invalid')`).
- Hukataa ingizo tupu kwa kurejesha `false`, kuhakikisha unakubali tu orodha za tarehe zenye maana na zisizo tupu.
- Hutoa ukaguzi rahisi wa boolean wa mtindo wa guard ambao ni rahisi kuunganisha na uthibitishaji mwingine.

## Matumizi

### Sintaksia

Kazi:

- `areValidDates(array)`

Vigezo:

- `array`: Safu ya kukagua, ambayo huenda ikawa na vitu vya `Date`.

### Uingizaji wa kazi wa ndani

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // kweli
console.log(areValidDates(b)); // si kweli
console.log(areValidDates(c)); // si kweli
console.log(areValidDates(d)); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areValidDates(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:34:02 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>