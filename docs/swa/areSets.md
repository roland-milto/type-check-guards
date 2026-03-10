# areSets

## Maelezo

Hukagua kama safu fulani isiyo tupu ina mifano ya `Set` pekee, ikirejesha `true` ikiwa ndivyo na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha kwamba thamani (mf., kutoka kwa ingizo la mtumiaji, uchanganuzi wa JSON, au API za nje) ni safu isiyo tupu ya
vitu vya `Set` kabla ya kuchakata kila seti.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areSets` kuthibitisha ingizo lisilojulikana kabla ya kuzunguka (iterate) na kuita API za `Set` (mf., `.size`,
`.has`, `.add`) kwa kila kipengele.

### Faida

- Hurejesha `true` tu pale ingizo linapokuwa ni safu isiyo tupu na kila kipengele ni mfano wa `Set`.
- Huzuia matokeo chanya ya uongo kwa safu tupu kwa kurejesha `false` wakati safu haina vipengele.
- Ni muhimu kama ulinzi wa wakati wa utekelezaji kabla ya kufanya operesheni mahususi za `Set` kwa kila kipengele.

## Matumizi

### Sintaksia

Kazi:

- `areSets(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kuthibitisha mifano ya `Set`.

### Uingizaji wa kazi wa ndani

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a ni safu ya matukio ya Set wakati wa utekelezaji
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // si kweli
console.log(areSets(c)); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areSets(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areSets](../_analysis/areSets.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:15:27 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>