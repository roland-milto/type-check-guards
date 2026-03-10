# areBigInts

## Опис

`areBigInts` визначає, чи є значення непорожнім масивом, що містить лише значення `bigint`.

### Випадок використання

Валідуйте невідомі вхідні дані (наприклад, розпарсені JSON-подібні дані, payload-и API або параметри функцій, типізовані
як `unknown`), щоб переконатися, що це непорожній масив значень `bigint` перед обробкою; повертає `true` лише тоді, коли
всі елементи є `bigint`, інакше `false`.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areBigInts` як runtime-guard перед виконанням операцій лише для `bigint` (наприклад, арифметики,
> порівнянь) над невідомими вхідними даними.

### Переваги

- Гарантує, що кожен елемент є `bigint`, повертаючи `true` лише тоді, коли весь масив відповідає умові.
- За задумом відхиляє не-масиви та порожні масиви (через `isFilledArray`), запобігаючи випадковому прийняттю некоректних
  вхідних даних.
- Швидке завершення: повертає `false`, щойно знаходить елемент, який не є `bigint`.

## Використання

### Синтаксис

Функція:

- `areBigInts(array)`

Параметри:

- `array`: Значення для перевірки.

### Локальний імпорт функції

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // істина
console.log(areBigInts(b)); // хибність
console.log(areBigInts(c)); // хибність
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areBigInts(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 23:27:46 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>