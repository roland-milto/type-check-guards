# areStreams

## Опис

`areStreams` одређује да ли је вредност попуњен низ у ком је сваки елемент `Stream`.

### Случај употребе

Валидирајте колекције које је обезбедио корисник или које су динамички направљене (нпр. више стримова за читање
датотека) пре него што их повежете (piping), наставите (resuming) или на други начин над њима радите као над групом.

> **Напомена за TypeScript кориснике:**
>
> Користите `areStreams` да валидирате непознат улаз пре него што га третирате као `Stream[]`; враћа `true` само када је
> вредност непразан низ и када је сваки елемент `Stream`.

### Предности

- Обезбеђује да је улаз попуњен низ у ком је сваки елемент `Stream`.
- Пружа једноставну `true`/`false` проверу за валидацију колекција стримова пре обраде.
- Брзо отказује: враћа `false` чим се пронађе елемент који није `Stream`.
- Помаже у спречавању грешака у извршавању када код претпоставља да су све ставке инстанце `Stream`.

## Употреба

### Синтакса

Функција:

- `areStreams(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи Stream објекте.

### Локални увоз функције

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input je popunjen niz objekata tipa Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areStreams(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:35:44 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>