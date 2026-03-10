# isStream

## Описание

`isStream` проверяет, является ли заданное значение объектом потока (stream-подобным в Node.js, `ReadableStream` или
`WritableStream`).

### Сценарий использования

Проверяйте входные данные, которые могут быть как обычными объектами, так и потоками (например, загрузки файлов, тела
HTTP-запросов или конвейеры обработки), и ветвите логику в зависимости от того, является ли значение потоком.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isStream`, чтобы сузить тип `unknown` перед вызовом методов потока; он распознаёт stream-подобные объекты
> Node.js (через `pipe`/`on`) и Web Streams (`ReadableStream`/`WritableStream`), когда эти глобальные объекты существуют.

### Преимущества

- Безопасно определяет распространённые stream-подобные объекты Node.js, проверяя наличие функций `pipe` и `on`.
- Также поддерживает Web Streams, распознавая `ReadableStream` и `WritableStream`, когда они доступны.
- Возвращает простой булев результат (`true`/`false`), подходящий для защитных проверок и ветвления логики.

## Использование

### Синтаксис

Функция:

- `isStream(value)`

Параметры:

- `value`: Значение, которое нужно проверить.

### Локальный импорт функции

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream похож на поток; вы можете безопасно использовать общие API потоков
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isStream(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isStream](../_analysis/isStream.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 23:42:44 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>