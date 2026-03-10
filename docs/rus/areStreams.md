# areStreams

## Описание

`areStreams` определяет, является ли значение непустым массивом, в котором каждый элемент — `Stream`.

### Сценарий использования

Проверяйте предоставленные пользователем или динамически сформированные коллекции (например, несколько потоков чтения
файлов) перед тем, как выполнять pipe, resume или иным образом работать с ними как с группой.

> **Примечание для пользователей TypeScript:**
>
> Используйте `areStreams`, чтобы валидировать неизвестный ввод перед тем, как трактовать его как `Stream[]`; функция
> возвращает `true` только когда значение — непустой массив и каждый элемент является `Stream`.

### Преимущества

- Гарантирует, что входное значение — это непустой массив, в котором каждый элемент является `Stream`.
- Предоставляет простую проверку `true`/`false` для валидации коллекций потоков перед обработкой.
- Быстро завершает проверку: возвращает `false`, как только обнаруживается элемент, не являющийся `Stream`.
- Помогает предотвратить ошибки во время выполнения, когда код предполагает, что все элементы являются экземплярами
  `Stream`.

## Использование

### Синтаксис

Функция:

- `areStreams(array)`

Параметры:

- `array`: Массив, который нужно проверить на наличие объектов Stream.

### Локальный импорт функции

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input — это заполненный массив объектов Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.areStreams(array)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 23:35:27 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>