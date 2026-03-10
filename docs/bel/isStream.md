# isStream

## Апісанне

`isStream` правярае, ці з’яўляецца зададзенае значэнне stream-аб’ектам (stream-падобным у Node.js, `ReadableStream` або
`WritableStream`).

### Выкарыстанне

Правярайце ўваходныя даныя, якія могуць быць як звычайнымі аб’ектамі, так і stream (напрыклад, загрузкі файлаў, целы
HTTP або канвееры апрацоўкі), і разгаліноўвайце логіку ў залежнасці ад таго, ці з’яўляецца значэнне stream.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isStream`, каб звузіць тып `unknown` перад выклікам метадаў stream; ён распазнае stream-падобныя
> аб’екты Node.js (праз `pipe`/`on`) і Web Streams (`ReadableStream`/`WritableStream`), калі гэтыя глабальныя аб’екты
> існуюць.

### Перавагі

- Бяспечна выяўляе распаўсюджаныя stream-падобныя аб’екты Node.js, правяраючы наяўнасць функцый `pipe` і `on`.
- Таксама падтрымлівае Web Streams, распазнаючы `ReadableStream` і `WritableStream`, калі яны даступныя.
- Вяртае просты булеў вынік (`true`/`false`), прыдатны для ахоўных праверак і разгалінавання логікі.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isStream(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream падобны да патоку; вы можаце бяспечна выкарыстоўваць агульныя API патокаў
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isStream(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isStream](../_analysis/isStream.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 23:38:57 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>