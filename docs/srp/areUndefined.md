# areUndefined

## Опис

`areUndefined` проверава да ли је сваки елемент у датом низу `undefined`.

### Случај употребе

Валидирајте да листа опционих резултата не садржи стварне вредности (само `undefined`), нпр. након мапирања претрага где
су недостајући уноси представљени као `undefined`, и желите да потврдите да су све претраге биле неуспешне.

> **Напомена за TypeScript кориснике:**
>
> Користите `areUndefined` када треба да потврдите да `unknown[]` садржи само `undefined` вредности; враћа `false` за
> празне низове и за улазе који нису низ/су неважећи због интерне провере `isFilledArray`.

### Предности

- Враћа `false` за не-низове и празне низове тако што захтева попуњен низ преко `isFilledArray`.
- Осигурава да је сваки елемент `undefined`, а не само неки, чиме се намера експлицитно исказује.
- Корисно као предикат у стилу гарда при валидацији непознатих улазних колекција.

## Употреба

### Синтакса

Функција:

- `areUndefined(array)`

Параметри:

- `array`: Низ који треба проверити на елементе `undefined`.

### Локални увоз функције

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // tačno
const r2 = areUndefined(b); // netačno
const r3 = areUndefined(c); // netačno

// Napomena: vraća netačno za prazne nizove
const r4 = areUndefined([]); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areUndefined(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 13:58:04 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>