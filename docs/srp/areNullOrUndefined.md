# areNullOrUndefined

## Опис

Проверава да ли су сви елементи у датом низу `null` или `undefined`.

### Случај употребе

Потврдите да листа опционих поља не садржи стварне вредности (само `null`/`undefined`) пре него што одлучите да
прескочите обраду или да прикажете стање „нису наведене вредности“.

> **Напомена за TypeScript кориснике:**
>
> Користите `areNullOrUndefined` када треба да проверите да низ садржи само недостајуће вредности (`null`/`undefined`).
> Имајте на уму да враћа `false` за празан низ.

### Предности

- Враћа `true` само када је сваки елемент `null` или `undefined`.
- Враћа `false` за празне низове, што помаже да се разликује „нема података“ од „све су недостајуће вредности“.
- Ради са `unknown[]`, што га чини безбедним за употребу пре сужења типова.

## Употреба

### Синтакса

Функција:

- `areNullOrUndefined(array)`

Параметри:

- `array`: Низ који треба проверити.

### Локални увоз функције

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === tačno

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === netačno

const empty = areNullOrUndefined([]);
// empty === netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areNullOrUndefined(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 00:31:32 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>