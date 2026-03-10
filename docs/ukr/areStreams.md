# areStreams

## Опис

`areStreams` визначає, чи є значення заповненим масивом, у якому кожен елемент є `Stream`.

### Випадок використання

Перевіряйте надані користувачем або динамічно сформовані колекції (наприклад, кілька потоків читання файлів) перед тим,
як виконувати pipe, resume або інші операції з ними як із групою.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areStreams`, щоб перевіряти невідоме вхідне значення перед тим, як трактувати його як `Stream[]`;
> функція повертає `true` лише тоді, коли значення є непорожнім масивом і кожен елемент є `Stream`.

### Переваги

- Гарантує, що вхідне значення є заповненим масивом, у якому кожен елемент — це `Stream`.
- Надає просту перевірку `true`/`false` для валідації колекцій потоків перед обробкою.
- Швидко завершується: повертає `false`, щойно знаходить елемент, який не є `Stream`.
- Допомагає запобігти помилкам під час виконання, коли код припускає, що всі елементи є екземплярами `Stream`.

## Використання

### Синтаксис

Функція:

- `areStreams(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність об’єктів Stream.

### Локальний імпорт функції

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input — це заповнений масив об’єктів Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areStreams(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 23:36:09 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>