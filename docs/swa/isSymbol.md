# isSymbol

## Maelezo

`isSymbol` huamua kama thamani iliyotolewa ni ya aina `symbol`, ikirudisha `true` kwa symbols na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha kuwa thamani ya `unknown` ni `symbol` kabla ya kuitumia kama kitambulisho cha kipekee, ufunguo wa usajili (
registry key), au ufunguo wa sifa uliokokotolewa (computed) katika objects na maps.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isSymbol` kubana `unknown` kuwa `symbol` kabla ya kuita kazi zinazohusiana na symbol au kuitumia kama ufunguo
> wa sifa (property) uliokokotolewa (computed).

### Faida

- Hutoa ukaguzi rahisi na wa kuaminika wa wakati wa utekelezaji (runtime) kwa aina ya msingi (primitive) ya JavaScript
  `symbol`.
- Husaidia kubana (narrow) thamani za `unknown` kabla ya kutumia API maalum za symbol au kuzihifadhi kama funguo.
- Huepuka matokeo chanya ya uongo kwa kutumia `typeof`, ambayo ndiyo njia ya kawaida (canonical) ya kutambua thamani za
  `symbol`.

## Matumizi

### Sintaksia

Kazi:

- `isSymbol(value)`

Vigezo:

- `value`: Thamani inayopaswa kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input ni alama hapa
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isSymbol(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:28:47 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>