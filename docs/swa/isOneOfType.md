# isOneOfType

## Maelezo

`isOneOfType` huamua kama `value` iliyotolewa inalingana na angalau moja ya tungo za aina zilizotolewa, ikirudisha
`true` ikiwa ulinganifu wowote unapatikana na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha data yenye aina zisizo thabiti au ya nje (mf., JSON iliyochanganuliwa, vigezo vya hoja) kwa kuruhusu aina
nyingi zinazokubalika wakati wa utekelezaji (kama `number` au `string`) kabla ya kuendelea na mantiki zaidi.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isOneOfType` unapotaka ukaguzi wa wakati wa utekelezaji kwamba thamani inalingana na yoyote kati ya aina kadhaa
> zinazoruhusiwa; hurudisha `true` ikiwa angalau aina moja inalingana, vinginevyo `false`.

### Faida

- Hukagua thamani dhidi ya aina nyingi zinazoruhusiwa kwa mwito mmoja, ikirudisha `true` kwenye ulinganifu wa kwanza.
- Hufanya kazi na ingizo la `unknown`, hivyo kuifanya iwe muhimu kwenye mipaka ya wakati wa utekelezaji (mf., data ya
  nje, ingizo la mtumiaji).
- Hutoa matokeo rahisi ya boolean (`true`/`false`) yanayounganishika vizuri na mantiki ya masharti na kurudi mapema.

## Matumizi

### Sintaksia

Kazi:

- `isOneOfType(value, types)`

Vigezo:

- `value`: Thamani ya kukaguliwa dhidi ya aina zilizobainishwa.
- `types`: Safu ya tungo za aina inayowakilisha aina zinazowezekana za thamani.

### Uingizaji wa kazi wa ndani

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input ni kitu katika wakati wa utekelezaji
}

console.log(isOneOfType(3, ["number", "string"])); // kweli
console.log(isOneOfType("hello", ["number", "boolean"])); // si kweli

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isOneOfType(value, types)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 13:54:26 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>