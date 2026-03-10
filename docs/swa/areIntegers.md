# areIntegers

## Maelezo

`areIntegers` huamua kama vipengele vyote katika safu fulani ni nambari kamili, ikirejesha `true` ikiwa ndivyo na
`false` vinginevyo.

### Kesi ya matumizi

Tumia `areIntegers` kuthibitisha data iliyotolewa na mtumiaji au kutoka nje (mf., vigezo vya query, payload za JSON,
mistari ya CSV) wakati mantiki yako inahitaji orodha iliyojaa ya thamani za nambari kamili kama vile ID, vihesabu,
offsets za pagination, au faharasa za safu.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areIntegers` kama kinga (guard) ya wakati wa utekelezaji kwa ingizo za `unknown[]` kabla ya kuzichukulia kama
`number[]` zenye nambari kamili pekee. Ikiwa itarejesha `false`, ingizo ama si safu iliyojaa au lina angalau thamani
> moja isiyo nambari kamili.

### Faida

- Hurejesha `true` tu pale ambapo kila kipengele ni nambari kamili; vinginevyo hurejesha `false`.
- Husaidia kuthibitisha ingizo lisilojulikana kabla ya kufanya operesheni zinazohitaji nambari kamili pekee (mf.,
  uorodheshaji, hesabu, vitambulisho/ID).
- Hushindwa haraka: huacha kukagua mara tu kipengele kisicho nambari kamili kinapopatikana.

## Matumizi

### Sintaksia

Kazi:

- `areIntegers(array)`

Vigezo:

- `array`: Safu (array) ya kukaguliwa ili kubaini vipengele vya nambari kamili.

### Uingizaji wa kazi wa ndani

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // kweli
console.log(areIntegers(b)); // kweli
console.log(areIntegers(c)); // si kweli

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areIntegers(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 01:00:33 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>