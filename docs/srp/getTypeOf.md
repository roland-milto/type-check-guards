# getTypeOf

## Опис

`getTypeOf` враћа детаљну, људима читљиву ознаку типа за дату вредност, укључујући прецизније нумеричке типове и
специфичне врсте објеката.

### Случај употребе

Користите `getTypeOf` да нормализујете детекцију типова у валидацији улаза и дијагностици—на пример, да одбаците `nan`,
прихватите само `integer` ID-еве, третирате нумеричке ниске као `decimal` другачије од обичног `string`, или да логовате
прецизне врсте објеката као што су `date` и `regexp`.

> **Напомена за TypeScript кориснике:**
>
> Повратни тип је `DataTypeAsString | string`. Третирајте га као описну ознаку; поредите са познатим литералима као што
> су `integer`, `float`, `nan`, `array`, `null` и `undefined` приликом гранања.

### Предности

- Враћа детаљнију ниску типа него JavaScript-ов `typeof`, укључујући нумеричке подтипове као што су `integer`, `float` и
  `nan`.
- Експлицитно разликује `null` и `undefined` као `null` и `undefined`.
- Препознаје уобичајене формате нумеричких ниски и пријављује их као `binary`, `octal`, `decimal` или `hexadecimal`
  уместо као обичан `string`.
- Такође препознаје низове као `array` и користи `Object.prototype.toString` да обезбеди специфична имена типова
  објеката (нпр. `date`, `regexp`, `map`, `set`).
- Веома је корисно за валидацију, логовање и дебаговање када су потребне доследне, људима читљиве ознаке типова.

## Употреба

### Синтакса

Функција:

- `getTypeOf(value)`

Параметри:

- `value`: Вредност за коју треба одредити тип података.

### Локални увоз функције

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Пример провера
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.getTypeOf(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 13:14:45 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>