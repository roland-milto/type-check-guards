# isString

## Maelezo

`isString` huamua kama thamani iliyotolewa ni string.

### Kesi ya matumizi

Thibitisha ingizo la mtumiaji, sehemu za mzigo wa API, au thamani za usanidi wakati wa utekelezaji ili kuhakikisha
thamani ni string kabla ya kutumia operesheni za string (mf., kukata nafasi za pembeni, kugawanya, kubadilisha herufi
kubwa/ndogo).

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isString` kuthibitisha thamani za `unknown` au zenye aina isiyo thabiti kabla ya kuita mbinu za string;
> hurejesha `true` tu wakati `typeof value === "string"`.

### Faida

- Ukaguzi rahisi na wa haraka kwa kutumia `typeof`.
- Hurejesha matokeo ya boolean yanayotabirika: `true` kwa string, vinginevyo `false`.
- Hufanya kazi kwa string tupu na zisizo tupu.
- Ni muhimu kama kinga nyepesi ya wakati wa utekelezaji kabla ya kufanya operesheni maalum za string.

## Matumizi

### Sintaksia

Kazi:

- `isString(value)`

Vigezo:

- `value`: Thamani inayopaswa kujaribiwa ili kubaini kama ni ya aina ya string.

### Uingizaji wa kazi wa ndani

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input ni tungo hapa
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isString(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isString](../_analysis/isString.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:15:41 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>