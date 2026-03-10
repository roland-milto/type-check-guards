# isStream

## Описание

`isStream` проверява дали дадена стойност е обект поток (подобен на Node.js поток, `ReadableStream` или
`WritableStream`).

### Случай на употреба

Валидирайте входове, които може да са или обикновени обекти, или потоци (напр. качвания на файлове, HTTP тела или
обработващи конвейери), и разклонявайте логиката според това дали стойността е поток.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isStream`, за да стесните `unknown` преди извикване на методи за потоци; разпознава обекти, подобни на
> Node.js потоци (чрез `pipe`/`on`) и Web Streams (`ReadableStream`/`WritableStream`), когато тези глобални обекти
> съществуват.

### Предимства

- Безопасно открива често срещани Node.js обекти, подобни на потоци, като проверява за функции `pipe` и `on`.
- Поддържа и Web Streams, като разпознава `ReadableStream` и `WritableStream`, когато са налични.
- Връща прост булев резултат (`true`/`false`), подходящ за гардове и разклоняваща логика.

## Използване

### Синтаксис

Функция:

- `isStream(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена.

### Локален импорт на функция

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream е подобен на поток; можете безопасно да използвате общи API-та за потоци
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isStream(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isStream](../_analysis/isStream.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 23:39:04 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>