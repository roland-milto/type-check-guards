# areUndefined

## Опис

`areUndefined` перевіряє, чи кожен елемент у наданому масиві є `undefined`.

### Випадок використання

Перевірити, що список необов’язкових результатів не містить жодних фактичних значень (лише `undefined`), наприклад,
після мапінгу пошуків, де відсутні записи представлені як `undefined`, і ви хочете підтвердити, що всі пошуки
завершилися невдачею.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areUndefined`, коли потрібно стверджувати, що `unknown[]` містить лише значення `undefined`; вона
> повертає `false` для порожніх масивів і для не-масивів/некоректних вхідних даних через внутрішню перевірку
`isFilledArray`.

### Переваги

- Повертає `false` для не-масивів і порожніх масивів, вимагаючи заповнений масив через `isFilledArray`.
- Гарантує, що кожен елемент є `undefined`, а не лише деякі, роблячи намір явним.
- Корисно як предикат у стилі guard під час валідації невідомих вхідних колекцій.

## Використання

### Синтаксис

Функція:

- `areUndefined(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на елементи `undefined`.

### Локальний імпорт функції

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Примітка: повертає false для порожніх масивів
const r4 = areUndefined([]); // false

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areUndefined(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 13:58:37 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>