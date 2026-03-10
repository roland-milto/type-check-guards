# areUndefined

## Описание

`areUndefined` проверяет, является ли каждый элемент в предоставленном массиве `undefined`.

### Сценарий использования

Проверьте, что список необязательных результатов не содержит фактических значений (только `undefined`), например после
сопоставления результатов поиска, где отсутствующие записи представлены как `undefined`, и вы хотите подтвердить, что
все поиски завершились неудачей.

> **Примечание для пользователей TypeScript:**
>
> Используйте `areUndefined`, когда нужно утверждать, что `unknown[]` содержит только значения `undefined`; функция
> возвращает `false` для пустых массивов и для не-массивов/некорректных входных данных из-за внутренней проверки
`isFilledArray`.

### Преимущества

- Возвращает `false` для не-массивов и пустых массивов, требуя непустой массив через `isFilledArray`.
- Гарантирует, что каждый элемент равен `undefined`, а не только некоторые, делая намерение явным.
- Полезно как предикат в стиле guard при валидации неизвестных входных коллекций.

## Использование

### Синтаксис

Функция:

- `areUndefined(array)`

Параметры:

- `array`: Массив, который нужно проверить на элементы `undefined`.

### Локальный импорт функции

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Примечание: возвращает false для пустых массивов
const r4 = areUndefined([]); // false

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.areUndefined(array)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 13:57:42 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>