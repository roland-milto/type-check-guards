# arePrimitives

## Опис

`arePrimitives` процењује да ли су сви елементи у достављеном, непразном низу примитивни типови.

### Случај употребе

Потврдите да долазни подаци (нпр. параметри упита, вредности реда у CSV-у или листа ID-јева/ознака) садрже само
примитивне вредности пре серијализације, хеширања, логовања или прослеђивања API-јима који не смеју да примају објекте.

> **Напомена за TypeScript кориснике:**
>
> Користите `arePrimitives` када треба да обезбедите да `unknown[]` садржи само примитивне вредности (string, number,
> bigint, boolean, symbol, undefined или null) пре даље обраде.

### Предности

- Враћа `true` само када је сваки елемент примитивна вредност, што га чини строгом заштитом за низове „без
  објеката/функција“.
- Брзо прекида: враћа `false` чим се пронађе непримитиван елемент.
- Такође враћа `false` за вредности које нису низови и за празне низове (путем провере да је низ попуњен), спречавајући
  случајно прихватање неважећег улаза.

## Употреба

### Синтакса

Функција:

- `arePrimitives(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи елементе примитивног типа.

### Локални увоз функције

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // tačno
const r2 = arePrimitives(b); // tačno
const r3 = arePrimitives(c); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.arePrimitives(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 00:06:40 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>