# areNumerics

## Описание

`areNumerics` проверяет, является ли значение непустым массивом, в котором все элементы — числа.

### Сценарий использования

Используйте `areNumerics` для валидации внешних или нетипизированных данных (например, JSON-полезной нагрузки,
параметров запроса, ввода формы) перед вычислением сумм, средних значений или выполнением других числовых операций,
гарантируя, что входные данные — непустой числовой массив, и возвращая `false` в противном случае.

> **Примечание для пользователей TypeScript:**
>
> Используйте `areNumerics`, чтобы защитить ввод типа `unknown` перед тем, как трактовать его как числовой массив;
> функция возвращает `false` для не-массивов и пустых массивов.

### Преимущества

- Возвращает `true` только тогда, когда входное значение — непустой массив и каждый элемент является числом.
- Быстро завершает проверку: прекращает проверять, как только найден нечисловой элемент, возвращая `false`.
- Помогает безопасно валидировать неизвестный ввод перед выполнением числовых операций.

## Использование

### Синтаксис

Функция:

- `areNumerics(array)`

Параметры:

- `array`: Массив, который нужно проверить на наличие числовых элементов.

### Локальный импорт функции

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // true
console.log(areNumerics(b)); // true
console.log(areNumerics(c)); // false
console.log(areNumerics(d)); // false
console.log(areNumerics(e)); // false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.areNumerics(array)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Файл был сгенерирован 6 февраля 2026 г. в 16:07:09 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>