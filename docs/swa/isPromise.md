# isPromise

## Maelezo

Hubaini kama thamani iliyotolewa ni `Promise`.

### Kesi ya matumizi

Tumia `isPromise` kuthibitisha ingizo lisilojulikana kabla ya kulichukulia kama `Promise`, kama vile unaposhughulikia
thamani zinazorejeshwa kutoka kwa plugins, dynamic imports, au API zenye aina zisizo thabiti.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isPromise` hukagua kupitia `instanceof Promise`, hivyo hurudisha `true` tu kwa mifano halisi ya `Promise` (si
> thenable za jumla).

### Faida

- Hutoa ukaguzi rahisi wa wakati wa utekelezaji ili kubaini kama thamani ni `Promise`.
- Husaidia kulinda njia za msimbo zinazohitaji mfano halisi wa `Promise`, ikirudisha `true` au `false` kwa njia
  inayotabirika.
- Huepuka matokeo chanya ya uongo kutoka kwa vitu vya “thenable” (mfano, `{ then() {} }`) kwa kuhitaji mfano halisi wa
  `Promise`.

## Matumizi

### Sintaksia

Kazi:

- `isPromise(value)`

Vigezo:

- `value`: Thamani inayopaswa kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // kweli
console.log(isPromise(b)); // si kweli
console.log(isPromise(123)); // si kweli
console.log(isPromise(null)); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isPromise(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:54:21 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>