# isPrimitive

## Описание

`isPrimitive` определяет, является ли заданное значение примитивом (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Сценарий использования

Проверяйте входные данные во время выполнения (например, поля полезной нагрузки API, значения конфигурации или данные,
предоставленные пользователем), чтобы убедиться, что значение является примитивом, прежде чем сериализовать, логировать
или применять операции, допустимые только для примитивов.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isPrimitive` для защиты входных данных типа `unknown` перед тем, как трактовать их как объекты или
> функции; он возвращает `true` для примитивов и `false` для объектов и функций.

### Преимущества

- Быстрая проверка без выделения памяти, является ли значение примитивом JavaScript.
- Корректно считает `null` примитивом (хотя `typeof null` — это `"object"`).
- Помогает сузить значения типа `unknown` перед выполнением операций, применимых только к объектам.

## Использование

### Синтаксис

Функция:

- `isPrimitive(value)`

Параметры:

- `value`: Значение, которое нужно проверить на примитивный тип.

### Локальный импорт функции

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

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isPrimitive(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 23:57:33 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>