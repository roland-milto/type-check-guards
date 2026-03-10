# isNumber

## Опис

`isNumber` перевіряє, чи є значення скінченним числом, відмінним від `NaN`.

### Випадок використання

Валідовуйте числовий ввід із ненадійних джерел (форми, query params, JSON payloads) перед обчисленнями, збереженням або
перевірками діапазону, гарантуючи, що проходять (`true`) лише скінченні числа, а все інше повертає `false`.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isNumber`, щоб валідовувати значення типу `unknown` перед виконанням арифметики; він відхиляє `NaN`,
`Infinity` та `-Infinity`.

### Переваги

- Повертає `true` лише для справжніх чисел JavaScript (перевірка типу плюс відхилення `NaN` та нескінченності).
- Запобігає поширеним помилкам валідації, коли `NaN`, `Infinity` або `-Infinity` випадково проходять як числа.
- Добре працює як runtime-запобіжник для невідомого вводу (наприклад, JSON, введення користувача, зовнішні API).
- Простий, швидкий і без побічних ефектів.

## Використання

### Синтаксис

Функція:

- `isNumber(value)`

Параметри:

- `value`: Значення для перевірки.

### Локальний імпорт функції

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input є дійсним скінченним числом
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isNumber(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 13:11:38 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>