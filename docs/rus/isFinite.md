# isFinite

## Описание

Определяет, является ли заданное `value` конечным `number`.

### Сценарий использования

Используйте `isFinite`, чтобы валидировать неизвестный ввод (например, из JSON, форм или API) перед выполнением числовых
вычислений, гарантируя, что значение — это реальное конечное число.

> **Примечание для пользователей TypeScript:**
>
> `isFinite` возвращает `true` только для конечных чисел; возвращает `false` для `NaN`, `Infinity` и любого значения, не
> являющегося числом.

### Преимущества

- Использует встроенную `Number.isFinite` для надёжной проверки на конечность.
- Возвращает `true` только для конечных чисел; возвращает `false` для `NaN`, `Infinity` и входных значений, не
  являющихся числами.
- Простой предикат без побочных эффектов, подходящий для валидации и защитной логики.

## Использование

### Синтаксис

Функция:

- `isFinite(value)`

Параметры:

- `value`: Значение, которое нужно проверить на конечность.

### Локальный импорт функции

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // здесь value — конечное число
  const doubled = value * 2;
  console.log(doubled);
}
```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isFinite(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 16:31:28 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>