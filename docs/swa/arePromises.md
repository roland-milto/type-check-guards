# arePromises

## Maelezo

`arePromises` huamua kama vipengele vyote kwenye safu ni matukio ya `Promise`.

### Kesi ya matumizi

Thibitisha kwamba orodha iliyojengwa kwa njia ya nguvu au iliyotolewa kutoka nje ina promises pekee kabla ya kuzikusanya
pamoja (kwa mfano, kwa `Promise.all`).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `arePromises` kuthibitisha `unknown[]` kabla ya kuita `Promise.all` au operesheni nyingine zinazohusu promise
> pekee; hurejesha `false` kwa safu tupu.

### Faida

- Huhakikisha kila kipengele ni `Promise` kabla ya kuendelea na mantiki maalum ya promise.
- Hurejesha `false` kwa safu zisizojazwa, kuzuia matokeo yenye utata kwa ingizo tupu.
- Ni muhimu kama ulinzi wa wakati wa utekelezaji unapofanya kazi na `unknown[]` kutoka vyanzo vya nje.

## Matumizi

### Sintaksia

Kazi:

- `arePromises(array)`

Vigezo:

- `array`: Safu ya kukagua ili kubaini matukio ya Promise.

### Uingizaji wa kazi wa ndani

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values ni safu ya matukio ya Promise wakati wa utekelezaji
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.arePromises(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:50:00 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>