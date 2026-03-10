# isNullOrUndefined

## Описание

Проверяет, является ли заданное значение `null` или `undefined`.

### Сценарий использования

Используйте `isNullOrUndefined`, когда нужно трактовать и `null`, и `undefined` как «нет значения», например при
валидации необязательных входных данных, нормализации payload API или защите веток кода перед разыменованием
потенциально отсутствующего значения.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isNullOrUndefined`, чтобы защититься от отсутствующих значений перед доступом к свойствам или вызовом
> методов; функция возвращает `true` только для `null` и `undefined`.

### Преимущества

- Предоставляет понятный, повторно используемый гард для обнаружения `null` и `undefined` в одном месте.
- Возвращает простой булевый результат (`true`/`false`), который легко комбинировать в условиях и проверках.
- Помогает избежать распространённых ошибок во время выполнения, проверяя отсутствие значения перед доступом к свойствам
  или вызовом методов.

## Использование

### Синтаксис

Функция:

- `isNullOrUndefined(value)`

Параметры:

- `value`: Значение, которое нужно проверить на `null` или `undefined`.

### Локальный импорт функции

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // обработать отсутствующее значение
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isNullOrUndefined(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Файл был сгенерирован 31 января 2026 г. в 00:35:04 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>