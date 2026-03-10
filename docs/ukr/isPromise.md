# isPromise

## Опис

Визначає, чи є задане значення `Promise`.

### Випадок використання

Використовуйте `isPromise`, щоб перевіряти невідомі вхідні значення перед тим, як трактувати їх як `Promise`, наприклад
під час обробки значень, повернутих плагінами, динамічними імпортами або слабко типізованими API.

> **Примітка для користувачів TypeScript:**
>
> `isPromise` перевіряє через `instanceof Promise`, тож повертає `true` лише для реальних екземплярів `Promise` (а не
> для загальних thenables).

### Переваги

- Надає просту перевірку під час виконання, чи є значення `Promise`.
- Допомагає захистити гілки коду, які потребують реального екземпляра `Promise`, передбачувано повертаючи `true` або
  `false`.
- Уникає хибнопозитивних результатів від «thenable» об’єктів (наприклад, `{ then() {} }`), вимагаючи наявності
  фактичного екземпляра `Promise`.

## Використання

### Синтаксис

Функція:

- `isPromise(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // true
console.log(isPromise(b)); // false
console.log(isPromise(123)); // false
console.log(isPromise(null)); // false

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isPromise(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 23:54:42 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>