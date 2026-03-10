# getTypeOf

## Описание

`getTypeOf` връща подробен, четим за хора етикет за тип за дадена стойност, включително прецизирани числови типове и
конкретни видове обекти.

### Случай на употреба

Използвайте `getTypeOf`, за да нормализирате откриването на типове при валидация на входни данни и диагностика —
например, за да отхвърляте `nan`, да приемате само `integer` идентификатори, да третирате числови низове като `decimal`
по различен начин от обикновен `string`, или да логвате точни видове обекти като `date` и `regexp`.

> **Бележка за потребителите на TypeScript:**
>
> Типът на връщаната стойност е `DataTypeAsString | string`. Третирайте го като описателен етикет; сравнявайте с познати
> литерали като `integer`, `float`, `nan`, `array`, `null` и `undefined`, когато разклонявате логиката.

### Предимства

- Връща по-гранулиран низ за тип от JavaScript `typeof`, включително числови подтипове като `integer`, `float` и `nan`.
- Разграничава `null` и `undefined` изрично като `null` и `undefined`.
- Открива често срещани формати на числови низове и ги отчита като `binary`, `octal`, `decimal` или `hexadecimal` вместо
  просто `string`.
- Идентифицира масивите като `array` и използва `Object.prototype.toString`, за да предостави конкретни имена на типове
  обекти (напр. `date`, `regexp`, `map`, `set`).
- Полезно за валидация, логване и дебъгване, когато са нужни последователни, четими за хора етикети за типове.

## Използване

### Синтаксис

Функция:

- `getTypeOf(value)`

Параметри:

- `value`: Стойността, за която да се определи типът данни.

### Локален импорт на функция

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

// Примерни проверки
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.getTypeOf(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Файлът беше генериран на 6 February 2026 at 13:05:26 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>