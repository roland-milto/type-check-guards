# isPlainObject

## Опис

Перевіряє, чи є задане `value` звичайним об’єктом, і повертає `true`, якщо так, інакше `false`.

### Випадок використання

Перевірити, що вхідні дані типу `unknown` (наприклад, розпарсений JSON, зовнішні дані або аргументи функції) є звичайним
об’єктом, перш ніж читати ключі або перетворювати їх на типізований об’єкт конфігурації.

> **Примітка для користувачів TypeScript:**
>
> `isPlainObject` корисний для звуження `unknown` перед тим, як трактувати його як об’єкт на кшталт запису (record); він
> повертає `true` лише для значень, внутрішній тег яких дорівнює `[object Object]`.

### Переваги

- Надає просту й надійну перевірку того, чи є значення звичайним об’єктом (тобто `Object` / `{}`), повертаючи `true` або
  `false`.
- Допомагає відрізняти звичайні об’єкти від масивів, функцій, `null` та інших типів, що не є звичайними об’єктами.
- Корисно як захисник типів (type guard) у TypeScript для звуження значень типу `unknown` перед доступом до властивостей
  об’єкта.

## Використання

### Синтаксис

Функція:

- `isPlainObject(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити на статус звичайного об’єкта.

### Локальний імпорт функції

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // тут input є простим об’єктом
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isPlainObject(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Файл було згенеровано 6 February 2026 at 12:20:23 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>