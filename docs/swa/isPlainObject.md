# isPlainObject

## Maelezo

Hukagua kama `value` iliyotolewa ni plain object na hurudisha `true` ikiwa ni hivyo, vinginevyo `false`.

### Kesi ya matumizi

Thibitisha kuwa ingizo la `unknown` (mfano, JSON iliyoparsiwa, data ya nje, au hoja za function) ni plain object kabla
ya kusoma keys au kuibadilisha (map) kuwa object ya usanidi yenye types.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isPlainObject` ni muhimu kwa kupunguza (narrow) `unknown` kabla ya kuichukulia kama object ya aina ya record;
> hurudisha `true` tu kwa thamani ambazo internal tag yake ni `[object Object]`.

### Faida

- Hutoa ukaguzi rahisi na wa kuaminika wa kama thamani ni plain object (yaani, `Object` / `{}`), ikirudisha `true` au
  `false`.
- Husaidia kutofautisha plain object na arrays, functions, `null`, na aina nyingine zisizo plain object.
- Ni muhimu kama type guard katika TypeScript ili kupunguza (narrow) thamani za `unknown` kabla ya kufikia sifa za
  object.

## Matumizi

### Sintaksia

Kazi:

- `isPlainObject(value)`

Vigezo:

- `value`: Thamani ya kujaribu ili kubaini kama ni plain object.

### Uingizaji wa kazi wa ndani

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input ni kitu cha kawaida cha aina ya object hapa
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // kweli
console.log(isPlainObject([])); // si kweli
console.log(isPlainObject(null)); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isPlainObject(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 12:19:53 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>