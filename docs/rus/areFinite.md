# areFinite

## Описание

`areFinite` проверяет, является ли значение непустым массивом, элементы которого все являются конечными числами,
возвращая `true` в этом случае и `false` в противном.

### Сценарий использования

Валидируйте массивы числового ввода (например, серии для графиков, списки координат, выборки измерений) перед
выполнением вычислений, гарантируя, что результат будет `true` только когда все значения являются конечными числами.

> **Примечание для пользователей TypeScript:**
>
> Используйте `areFinite`, когда нужно убедиться, что массив непустой и содержит только конечные числа; он возвращает
`false` для пустых массивов и для массивов, содержащих `NaN` или бесконечности.

### Преимущества

- Возвращает `true` только тогда, когда входное значение — непустой массив и каждый элемент является конечным числом.
- Отклоняет `Infinity`, `-Infinity` и `NaN`, полагаясь на проверки `isFinite` для каждого элемента.
- Предоставляет простой булев результат (`true`/`false`), подходящий для гардов и потоков валидации.

## Использование

### Синтаксис

Функция:

- `areFinite(array)`

Параметры:

- `array`: Массив, который нужно проверить на конечность всех его элементов.

### Локальный импорт функции

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.areFinite(array)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 16:36:52 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>