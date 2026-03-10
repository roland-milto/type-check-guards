# isFinite

## Опис

Визначає, чи є задане `value` скінченним `number`.

### Випадок використання

Використовуйте `isFinite`, щоб валідовувати невідоме вхідне значення (наприклад, із JSON, форм або API) перед виконанням
числових обчислень, гарантуючи, що значення є реальним скінченним числом.

> **Примітка для користувачів TypeScript:**
>
> `isFinite` повертає `true` лише для скінченних чисел; воно повертає `false` для `NaN`, `Infinity` та будь-якого
> значення, що не є числом.

### Переваги

- Використовує вбудований `Number.isFinite` для надійної перевірки на скінченність.
- Повертає `true` лише для скінченних чисел; повертає `false` для `NaN`, `Infinity` та вхідних значень, що не є числами.
- Простий предикат без побічних ефектів, придатний для валідації та захисної логіки.

## Використання

### Синтаксис

Функція:

- `isFinite(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити на скінченність.

### Локальний імпорт функції

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value тут є скінченним числом
  const doubled = value * 2;
  console.log(doubled);
}
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isFinite(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 16:32:09 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>