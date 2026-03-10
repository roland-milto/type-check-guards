# getTypeOf

## Опис

`getTypeOf` враќа детална, човечки читлива ознака за тип за дадена вредност, вклучувајќи прецизирани нумерички типови и
специфични видови објекти.

### Случај на употреба

Користете `getTypeOf` за нормализирање на детекцијата на типови при валидација на влез и дијагностика—на пример, да се
отфрли `nan`, да се прифатат само `integer` ID-а, да се третираат нумеричките низи како `decimal` поинаку од обичен
`string`, или да се логираат прецизни видови објекти како `date` и `regexp`.

> **Белешка за корисници на TypeScript:**
>
> Повратниот тип е `DataTypeAsString | string`. Третирајте го како описна ознака; споредувајте со познати литерали како
`integer`, `float`, `nan`, `array`, `null` и `undefined` при гранкање.

### Предности

- Враќа пофино гранулирана низа за тип од JavaScript-овиот `typeof`, вклучувајќи нумерички подтипови како `integer`,
  `float` и `nan`.
- Експлицитно ги разликува `null` и `undefined` како `null` и `undefined`.
- Детектира вообичаени формати на нумерички низи и ги пријавува како `binary`, `octal`, `decimal` или `hexadecimal`
  наместо како обичен `string`.
- Исто така ги идентификува низите како `array` и користи `Object.prototype.toString` за да обезбеди специфични имиња на
  типови на објекти (на пр., `date`, `regexp`, `map`, `set`).
- Многу е корисно за валидација, логирање и дебагирање кога се потребни конзистентни, човечки читливи ознаки за типови.

## Употреба

### Синтакса

Функција:

- `getTypeOf(value)`

Параметри:

- `value`: Вредноста за која треба да се одреди типот на податоци.

### Локален импорт на функција

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

// Пример проверки
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.getTypeOf(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 13:13:19 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>