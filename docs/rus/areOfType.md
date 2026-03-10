# areOfType

## Описание

Проверяет, что все элементы в заданном `array` имеют указанный `type`.

### Сценарий использования

Используйте `areOfType`, чтобы валидировать неизвестный ввод (например, распарсенный JSON, payload API, пользовательский
ввод) перед выполнением операций, зависящих от типа, над каждым элементом массива.

> **Примечание для пользователей TypeScript:**
>
> Поскольку `areOfType` является защитником типов, TypeScript сужает тип массива внутри блока `if (areOfType(...)) {}`
> до `Array<DataTypeOf<T>>`.

### Преимущества

- Предоставляет защитник типов TypeScript: когда функция возвращает `true`, входное значение сужается до
  `Array<DataTypeOf<T>>`.
- Проверяет каждый элемент на соответствие запрошенному runtime-типу, не позволяя массивам со смешанными типами пройти
  проверку.
- Быстро завершает проверку: возвращает `false`, как только найден несовпадающий элемент.
- По замыслу отклоняет не-массивы и пустые массивы (зависит от `isFilledArray`).

## Использование

### Синтаксис

Функция:

- `areOfType(array, type)`

Параметры:

- `array`: Массив для проверки.
- `type`: Тип, с которым нужно сравнить каждый элемент массива.

### Локальный импорт функции

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values теперь number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.areOfType(array, type)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 17:11:10 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>