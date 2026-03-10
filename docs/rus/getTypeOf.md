# getTypeOf

## Описание

`getTypeOf` возвращает подробную, человекочитаемую метку типа для заданного значения, включая уточнённые числовые типы и
конкретные виды объектов.

### Сценарий использования

Используйте `getTypeOf` для нормализации определения типов при валидации входных данных и диагностике — например, чтобы
отклонять `nan`, принимать только `integer`-идентификаторы, обрабатывать числовые строки типа `decimal` иначе, чем
обычный `string`, или логировать точные виды объектов, такие как `date` и `regexp`.

> **Примечание для пользователей TypeScript:**
>
> Возвращаемый тип — `DataTypeAsString | string`. Рассматривайте его как описательную метку; при ветвлении сравнивайте с
> известными литералами, такими как `integer`, `float`, `nan`, `array`, `null` и `undefined`.

### Преимущества

- Возвращает более детализированную строку типа, чем JavaScript `typeof`, включая числовые подтипы, такие как `integer`,
  `float` и `nan`.
- Явно различает `null` и `undefined`, возвращая `null` и `undefined`.
- Определяет распространённые форматы числовых строк и сообщает о них как `binary`, `octal`, `decimal` или `hexadecimal`
  вместо обычного `string`.
- Также распознаёт массивы как `array` и использует `Object.prototype.toString`, чтобы предоставлять конкретные имена
  типов объектов (например, `date`, `regexp`, `map`, `set`).
- Очень полезно для валидации, логирования и отладки, когда нужны согласованные, человекочитаемые метки типов.

## Использование

### Синтаксис

Функция:

- `getTypeOf(value)`

Параметры:

- `value`: Значение, для которого нужно определить тип данных.

### Локальный импорт функции

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

// Примеры проверок
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.getTypeOf(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Файл был сгенерирован 6 февраля 2026 г. в 13:14:22 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>