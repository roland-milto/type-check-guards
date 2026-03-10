# isMap

## Maelezo

Hukagua kama `value` iliyotolewa ni `Map`, ikirudisha `true` ikiwa ni hivyo na `false` vinginevyo.

### Kesi ya matumizi

Tumia `isMap` unapopokea thamani ya `unknown` (k.m., kutoka uchanganuzi wa JSON, API za nje, au ingizo la mtumiaji) na
unahitaji kuhakikisha ni `Map` kabla ya kufanya shughuli za `Map`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isMap` ni kinga ya wakati wa utekelezaji inayorudisha `true` wakati thamani ni `Map` na `false` vinginevyo; itumie
> kupunguza `unknown` kabla ya kuita API za `Map`.

### Faida

- Hutoa ukaguzi wa haraka wa wakati wa utekelezaji ili kubaini kama thamani ni `Map`.
- Husaidia kuzuia makosa ya aina kwa kulinda njia za msimbo zinazohitaji mbinu za `Map` kama `get`, `set`, na `has`.
- Hufanya kazi vizuri kama hatua nyepesi ya uthibitishaji wakati wa kushughulikia ingizo la `unknown`.

## Matumizi

### Sintaksia

Kazi:

- `isMap(value)`

Vigezo:

- `value`: Thamani ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isMap(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isMap](../_analysis/isMap.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 16:29:50 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>