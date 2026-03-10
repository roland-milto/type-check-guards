# areStreams

## Апісанне

`areStreams` вызначае, ці з'яўляецца значэнне запоўненым масівам, у якім кожны элемент — гэта `Stream`.

### Выкарыстанне

Правярайце калекцыі, прадастаўленыя карыстальнікам або сфарміраваныя дынамічна (напрыклад, некалькі патокаў чытання
файлаў), перад тым як перанакіроўваць (pipe), аднаўляць (resume) або іншым чынам працаваць з імі як з групай.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areStreams`, каб праверыць невядомыя ўваходныя даныя перад тым, як разглядаць іх як `Stream[]`; ён
> вяртае `true` толькі тады, калі значэнне — гэта непусты масіў і кожны элемент з'яўляецца `Stream`.

### Перавагі

- Гарантуе, што ўваходныя даныя — гэта запоўнены масіў, у якім кожны элемент з'яўляецца `Stream`.
- Прадастаўляе простую праверку `true`/`false` для валідацыі калекцый патокаў перад апрацоўкай.
- Хутка спыняецца: вяртае `false`, як толькі знаходзіцца элемент, які не з'яўляецца `Stream`.
- Дапамагае прадухіліць памылкі падчас выканання, калі код мяркуе, што ўсе элементы — гэта асобнікі `Stream`.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areStreams(array)`

Параметры:

- `array`: Масіў, які трэба праверыць на наяўнасць аб'ектаў Stream.

### Лакальны імпарт функцыі

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input — гэта запоўнены масіў аб’ектаў Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areStreams(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 23:32:52 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>