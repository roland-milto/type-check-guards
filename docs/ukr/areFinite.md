# areFinite

## Опис

`areFinite` перевіряє, чи є значення непорожнім масивом, елементи якого всі є скінченними числами, повертаючи `true` у
такому разі та `false` в іншому.

### Випадок використання

Валідуйте масиви числових вхідних даних (наприклад, ряди для графіків, списки координат, зразки вимірювань) перед
виконанням обчислень, забезпечуючи, що результат буде `true` лише тоді, коли всі значення є скінченними числами.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areFinite`, коли потрібно переконатися, що масив є непорожнім і містить лише скінченні числа; він
> повертає `false` для порожніх масивів і для масивів, що містять `NaN` або нескінченності.

### Переваги

- Повертає `true` лише тоді, коли вхідне значення є непорожнім масивом і кожен елемент є скінченним числом.
- Відхиляє `Infinity`, `-Infinity` та `NaN`, покладаючись на перевірки `isFinite` для кожного елемента.
- Надає простий булевий результат (`true`/`false`), придатний для гардiв і потоків валідації.

## Використання

### Синтаксис

Функція:

- `areFinite(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на скінченність усіх його елементів.

### Локальний імпорт функції

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

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areFinite(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 16:37:51 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>