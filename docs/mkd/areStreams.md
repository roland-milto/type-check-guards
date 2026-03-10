# areStreams

## Опис

`areStreams` утврдува дали вредноста е пополнета низа во која секој елемент е `Stream`.

### Случај на употреба

Валидирајте колекции обезбедени од корисник или динамички изградени (на пр., повеќе стримови за читање датотеки) пред да
ги поврзете (pipe), продолжите (resume) или на друг начин да работите со нив како група.

> **Белешка за корисници на TypeScript:**
>
> Користете `areStreams` за да валидирате непознат влез пред да го третирате како `Stream[]`; враќа `true` само кога
> вредноста е непразна низа и секој елемент е `Stream`.

### Предности

- Осигурува дека влезот е пополнета низа во која секој елемент е `Stream`.
- Обезбедува едноставна `true`/`false` заштита за валидација на колекции од стримови пред обработка.
- Брзо откажување: враќа `false` веднаш штом ќе се пронајде елемент што не е `Stream`.
- Помага да се спречат runtime грешки кога кодот претпоставува дека сите ставки се инстанци на `Stream`.

## Употреба

### Синтакса

Функција:

- `areStreams(array)`

Параметри:

- `array`: Низата што треба да се провери за `Stream` објекти.

### Локален импорт на функција

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input е пополнета низа од Stream објекти
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areStreams(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 23:34:44 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>