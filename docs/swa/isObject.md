# isObject

## Maelezo

Hubaini kama `value` iliyotolewa ni `object` (isipokuwa `null`).

### Kesi ya matumizi

Tumia `isObject` kuthibitisha ingizo lisilojulikana (mf., JSON iliyochanganuliwa, majibu ya API, payload za matukio)
kabla ya kufikia properties, kuhakikisha thamani ni object na si `null`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isObject` ni guard ya wakati wa utekelezaji inayorejesha boolean; haipunguzi hadi umbo mahususi la object. Iunganishe
> na ukaguzi wa ziada (mf., uwepo wa property) unapohitaji typing iliyo imara zaidi.

### Faida

- Hurejesha `true` tu kwa thamani zisizo `null` ambazo `typeof` yake ni `"object"`.
- Huzuia mtego wa kawaida wa JavaScript ambapo `null` vinginevyo ingetambuliwa kama object.
- Hufanya kazi kwa objects za kawaida na matukio ya objects zilizojengwa ndani (mf., `Date`, `RegExp`).
- Ukaguzi rahisi na wa haraka wa wakati wa utekelezaji unaofaa kwa programu za kujilinda na uthibitishaji wa ingizo.

## Matumizi

### Sintaksia

Kazi:

- `isObject(value)`

Vigezo:

- `value`: Thamani inayopaswa kukaguliwa ili kuona kama ni `object`.

### Uingizaji wa kazi wa ndani

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input ni kitu kisicho null cha aina ya object wakati wa utekelezaji
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isObject(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isObject](../_analysis/isObject.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 00:20:25 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>