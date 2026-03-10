# isStream

## Опис

`isStream` проверува дали дадена вредност е стрим-објект (Node.js стрим-сличен, `ReadableStream` или `WritableStream`).

### Случај на употреба

Валидирајте влезови што може да бидат или обични објекти или стримови (на пр., прикачувања на датотеки, HTTP тела или
процесни цевководи) и разгранете ја логиката врз основа на тоа дали вредноста е стрим.

> **Белешка за корисници на TypeScript:**
>
> Користете `isStream` за да го стесните `unknown` пред да повикувате стрим-методи; препознава објекти слични на Node.js
> стримови (преку `pipe`/`on`) и Web Streams (`ReadableStream`/`WritableStream`) кога тие глобали постојат.

### Предности

- Безбедно открива вообичаени објекти слични на Node.js стримови со проверка за функциите `pipe` и `on`.
- Исто така поддржува Web Streams со препознавање на `ReadableStream` и `WritableStream` кога се достапни.
- Враќа едноставен булов резултат (`true`/`false`) погоден за гардови и разгранета логика.

## Употреба

### Синтакса

Функција:

- `isStream(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream е сличен на стрим; можете безбедно да користите вообичаени API-ја за стримови
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isStream(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isStream](../_analysis/isStream.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 23:42:06 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>