# isBigInt

## Maelezo

`isBigInt` hukagua kama thamani iliyotolewa ni ya aina `bigint`, ikirudisha `true` kwa BigInt za msingi na `false`
vinginevyo.

### Kesi ya matumizi

Thibitisha na ubane thamani zinazotoka kwenye vyanzo visivyo na aina (mf., uchanganuzi wa JSON, ingizo la mtumiaji, API
za nje) kabla ya kufanya mahesabu mahususi ya BigInt au kuzihifadhi kwenye sehemu zinazokubali BigInt pekee.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isBigInt` kubana `unknown` hadi `bigint` kabla ya kufanya hesabu za BigInt (mf., `+`, `*`) ambazo zinahitaji
> viendeshwa vya BigInt.

### Faida

- Hutoa ukaguzi rahisi na wa kuaminika wa wakati wa utekelezaji kwa aina ya msingi `bigint`.
- Husaidia kubana (narrow) thamani za `unknown` kabla ya kufanya operesheni zinazohusu BigInt pekee.
- Huepuka matokeo chanya ya uongo: nambari za kawaida, tungo, na aina nyingine hurudisha `false`.

## Matumizi

### Sintaksia

Kazi:

- `isBigInt(value)`

Vigezo:

- `value`: Thamani ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // kweli
console.log(isBigInt(10));  // si kweli
console.log(isBigInt("10")); // si kweli
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isBigInt(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:33:24 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>