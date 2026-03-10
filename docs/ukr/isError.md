# isError

## Опис

Перевіряє, чи є задане `value` екземпляром `Error`.

### Випадок використання

Використовуйте `isError`, коли отримуєте значення типу `unknown` (наприклад, із блоку `catch`, колбека або зовнішньої
бібліотеки) і вам потрібно безпечно визначити, чи є воно `Error`, перш ніж читати `message`, `name` або `stack`.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isError`, щоб захистити значення типу `unknown` (наприклад, із `catch`) перед тим, як трактувати їх як
`Error`.

### Переваги

- Надає просту перевірку під час виконання, чи є значення екземпляром `Error`.
- Допомагає звузити невідомі вхідні дані перед доступом до властивостей `Error`, таких як `message` або `stack`.
- Зменшує ризик винятків під час виконання під час обробки значень із `catch`, зовнішніх API або нетипізованих джерел.

## Використання

### Синтаксис

Функція:

- `isError(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити на відповідність типу `Error`.

### Локальний імпорт функції

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isError(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isError](../_analysis/isError.md)

<br>

---

<small>Файл було згенеровано 6 February 2026 at 12:47:30 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>