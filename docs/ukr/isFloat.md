# isFloat

## Опис

`isFloat` визначає, чи є задане `value` скінченним числом з плаваючою комою (тобто `number`, який не є цілим числом).

### Випадок використання

Валідувати числове введення від користувача, де потрібні дробові значення (наприклад, ціни, вимірювання, ставки), і
відхиляти цілі числа, `NaN` та нескінченності.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isFloat`, коли потрібно приймати лише скінченні нецілі числові значення; він відхиляє цілі числа та
> нескінченні значення.

### Переваги

- Повертає `true` лише для скінченних, нецілих чисел (виключає цілі числа, `NaN`, `Infinity` та `-Infinity`).
- Працює з будь-яким типом вхідних даних (`unknown`) і безпечно звужує тип, перевіряючи `typeof value === "number"`.
- Використовує вбудовані числові перевірки (`Number.isInteger`, `Number.isFinite`) для передбачуваної поведінки.

## Використання

### Синтаксис

Функція:

- `isFloat(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити, чи є воно числом з плаваючою комою.

### Локальний імпорт функції

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // значення є числом під час виконання; воно є скінченним і не є цілим числом
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isFloat(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 16:10:19 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>