# areOfType

## Опис

Перевіряє, чи всі елементи в заданому `array` мають вказаний `type`.

### Випадок використання

Використовуйте `areOfType`, щоб валідувати невідомий ввід (наприклад, розпарсений JSON, payload-и API, користувацький
ввід) перед виконанням операцій, специфічних для типу, над кожним елементом масиву.

> **Примітка для користувачів TypeScript:**
>
> Оскільки `areOfType` є type guard, TypeScript звужує тип масиву всередині блоку `if (areOfType(...)) {}` до
`Array<DataTypeOf<T>>`.

### Переваги

- Надає TypeScript type guard: коли повертає `true`, вхідне значення звужується до `Array<DataTypeOf<T>>`.
- Перевіряє кожен елемент на відповідність запитаному runtime-типу, запобігаючи проходженню масивів зі змішаними типами.
- Швидко завершується: повертає `false`, щойно знаходить елемент, що не відповідає типу.
- За задумом відхиляє не-масиви та порожні масиви (залежить від `isFilledArray`).

## Використання

### Синтаксис

Функція:

- `areOfType(array, type)`

Параметри:

- `array`: Масив для перевірки.
- `type`: Тип, з яким потрібно звіряти кожен елемент у масиві.

### Локальний імпорт функції

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values тепер є number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areOfType(array, type)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 17:11:51 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>