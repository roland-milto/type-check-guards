# areNullOrUndefined

## Описание

Проверяет, что все элементы в заданном массиве равны `null` или `undefined`.

### Сценарий использования

Проверить, что список необязательных полей не содержит реальных значений (только `null`/`undefined`), прежде чем решить
пропустить обработку или показать состояние «значения не предоставлены».

> **Примечание для пользователей TypeScript:**
>
> Используйте `areNullOrUndefined`, когда нужно убедиться, что массив содержит только отсутствующие значения (`null`/
`undefined`). Обратите внимание, что для пустого массива функция возвращает `false`.

### Преимущества

- Возвращает `true` только тогда, когда каждый элемент равен `null` или `undefined`.
- Возвращает `false` для пустых массивов, помогая отличать «нет данных» от «все значения отсутствуют».
- Работает с `unknown[]`, что делает использование безопасным до сужения типов.

## Использование

### Синтаксис

Функция:

- `areNullOrUndefined(array)`

Параметры:

- `array`: Массив для проверки.

### Локальный импорт функции

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.areNullOrUndefined(array)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Файл был сгенерирован 31 января 2026 г. в 00:31:19 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>