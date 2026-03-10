# areNumerics

## Опис

`areNumerics` перевіряє, чи є значення непорожнім масивом, у якому всі елементи є числовими.

### Випадок використання

Використовуйте `areNumerics` для валідації зовнішніх або нетипізованих даних (наприклад, JSON-повідомлень, параметрів
запиту, введення у формах) перед обчисленням сум, середніх значень чи інших числових операцій, гарантуючи, що вхідні
дані є непорожнім числовим масивом, і повертаючи `false` в іншому разі.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areNumerics` як захисну перевірку для вхідних даних типу `unknown` перед тим, як трактувати їх як
> числовий масив; вона повертає `false` для значень, що не є масивами, а також для порожніх масивів.

### Переваги

- Повертає `true` лише тоді, коли вхідне значення є непорожнім масивом і кожен елемент є числовим.
- Швидко завершує перевірку: припиняє перевіряти, щойно знаходить нечисловий елемент, повертаючи `false`.
- Допомагає безпечно валідувати невідоме вхідне значення перед виконанням числових операцій.

## Використання

### Синтаксис

Функція:

- `areNumerics(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність числових елементів.

### Локальний імпорт функції

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // істина
console.log(areNumerics(b)); // істина
console.log(areNumerics(c)); // хибність
console.log(areNumerics(d)); // хибність
console.log(areNumerics(e)); // хибність

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areNumerics(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Файл було згенеровано 6 February 2026 at 16:08:05 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>