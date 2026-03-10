# isStream

## Опис

`isStream` перевіряє, чи є задане значення об’єктом потоку (схожим на потік Node.js, `ReadableStream` або
`WritableStream`).

### Випадок використання

Валідуйте вхідні дані, які можуть бути як звичайними об’єктами, так і потоками (наприклад, завантаження файлів, тіла
HTTP-запитів або конвеєри обробки), і розгалужуйте логіку залежно від того, чи є значення потоком.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isStream`, щоб звузити тип `unknown` перед викликом методів потоку; він розпізнає об’єкти, схожі на
> потоки Node.js (через `pipe`/`on`), і Web Streams (`ReadableStream`/`WritableStream`), коли ці глобальні об’єкти
> існують.

### Переваги

- Безпечно виявляє поширені об’єкти, схожі на потоки Node.js, перевіряючи наявність функцій `pipe` та `on`.
- Також підтримує Web Streams, розпізнаючи `ReadableStream` і `WritableStream`, коли вони доступні.
- Повертає простий булевий результат (`true`/`false`), придатний для гардiв і розгалуження логіки.

## Використання

### Синтаксис

Функція:

- `isStream(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити.

### Локальний імпорт функції

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream є схожим на потік; ви можете безпечно використовувати поширені API потоків
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isStream(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isStream](../_analysis/isStream.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 23:43:29 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>