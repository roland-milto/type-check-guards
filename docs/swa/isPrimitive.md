# isPrimitive

## Maelezo

`isPrimitive` hubaini kama thamani iliyotolewa ni primitive (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Kesi ya matumizi

Thibitisha ingizo wakati wa utekelezaji (mf., sehemu za payload ya API, thamani za usanidi, au data iliyotolewa na
mtumiaji) ili kuhakikisha thamani ni primitive kabla ya kusirialisha, kuandika kwenye log, au kutumia operesheni
zinazofanya kazi kwa primitives pekee.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isPrimitive` kulinda ingizo za `unknown` kabla ya kuzichukulia kama objects au functions; hurudisha `true` kwa
> primitives na `false` kwa objects na functions.

### Faida

- Ukaguzi wa haraka usiohitaji mgao wa kumbukumbu ili kubaini kama thamani ni primitive ya JavaScript.
- Huchukulia `null` kwa usahihi kama primitive (hata ingawa `typeof null` ni `"object"`).
- Husaidia kupunguza (narrow) thamani za `unknown` kabla ya kufanya operesheni zinazohusu vitu (objects) pekee.

## Matumizi

### Sintaksia

Kazi:

- `isPrimitive(value)`

Vigezo:

- `value`: Thamani ya kukagua ili kubaini kama ni aina ya primitive.

### Uingizaji wa kazi wa ndani

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isPrimitive(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:57:49 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>