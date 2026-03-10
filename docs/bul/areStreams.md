# areStreams

## Описание

`areStreams` определя дали дадена стойност е непразен масив, в който всеки елемент е `Stream`.

### Случай на употреба

Валидирайте предоставени от потребителя или динамично изградени колекции (напр. множество потоци за четене на файлове),
преди да ги пренасочвате (pipe), възобновявате (resume) или по друг начин да работите с тях като група.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areStreams`, за да валидирате неизвестен вход, преди да го третирате като `Stream[]`; връща `true` само
> когато стойността е непразен масив и всеки елемент е `Stream`.

### Предимства

- Гарантира, че входът е непразен масив, в който всеки елемент е `Stream`.
- Предоставя проста `true`/`false` проверка за валидиране на колекции от потоци преди обработка.
- Проваля се бързо: връща `false` веднага щом бъде открит елемент, който не е `Stream`.
- Помага да се предотвратят грешки по време на изпълнение, когато кодът приема, че всички елементи са инстанции на
  `Stream`.

## Използване

### Синтаксис

Функция:

- `areStreams(array)`

Параметри:

- `array`: Масивът, който трябва да бъде проверен за обекти Stream.

### Локален импорт на функция

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input е запълнен масив от обекти Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areStreams(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 23:33:01 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>