# isBuffer

## Опис

Перевіряє, чи є значення Node.js `Buffer`, і повертає `true` або `false`.

### Випадок використання

Перевіряйте вхідні дані під час виконання (наприклад, корисні навантаження API, дані файлів або буфери повідомлень), щоб
переконатися, що значення є `Buffer` перед його обробкою, і надійно отримуйте `false` під час запуску поза Node.js, де
`Buffer` може не існувати.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isBuffer`, щоб звузити значення типу `unknown` до `Buffer` перед викликом методів, специфічних для
> Buffer.

### Переваги

- Безпечно визначає екземпляри Node.js `Buffer` за допомогою `Buffer.isBuffer`.
- Повертає `false` у середовищах, де `Buffer` недоступний, уникаючи помилок під час виконання.
- Працює з вхідними даними типу `unknown`, що робить його придатним для перевірки під час виконання та звуження типів.

## Використання

### Синтаксис

Функція:

- `isBuffer(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a тут є Buffer
  console.log(a.toString("utf8"));
}
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isBuffer(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 16:33:41 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>