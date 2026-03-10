# areStrings

## Опис

`areStrings` перевіряє, чи масив є непорожнім і чи всі його елементи є рядками, повертаючи `true` лише в цьому випадку.

### Випадок використання

Валідувати зовнішні або надані користувачем дані (наприклад, параметри запиту, JSON-пейлоади, поля CSV), щоб
переконатися, що перед обробкою у вас є непорожній список рядків.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areStrings`, щоб валідувати невідомі масиви перед застосуванням логіки лише для рядків; вона повертає
`false` для порожніх масивів.

### Переваги

- Гарантує, що кожен елемент є рядком, і відхиляє масиви зі змішаними типами, повертаючи `false`.
- Відхиляє порожні масиви, тож `true` означає лише непорожній список рядків.
- Корисно як швидка перевірка під час виконання перед застосуванням операцій лише для рядків (наприклад, `trim`,
  `toLowerCase`).

## Використання

### Синтаксис

Функція:

- `areStrings(value)`

Параметри:

- `value`: Expected type `string[]`.

### Локальний імпорт функції

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input є непорожнім string[] під час виконання
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areStrings(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 13:20:55 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>