# isStream

## Опис

`isStream` проверава да ли је дата вредност стрим објекат (Node.js налик стриму, `ReadableStream` или `WritableStream`).

### Случај употребе

Валидирајте улазе који могу бити или обични објекти или стримови (нпр. отпремања фајлова, HTTP тела или процесни
пайплајнови) и гранaјте логику на основу тога да ли је вредност стрим.

> **Напомена за TypeScript кориснике:**
>
> Користите `isStream` да сузите `unknown` пре позивања стрим метода; препознаје Node.js објекте налик стриму (преко
`pipe`/`on`) и Web Streams (`ReadableStream`/`WritableStream`) када ти глобали постоје.

### Предности

- Безбедно открива уобичајене Node.js објекте налик стримовима проверавајући да ли постоје функције `pipe` и `on`.
- Такође подржава Web Streams препознавањем `ReadableStream` и `WritableStream` када су доступни.
- Враћа једноставан булов резултат (`true`/`false`) погодан за гардове и гранaње логике.

## Употреба

### Синтакса

Функција:

- `isStream(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream je nalik strimu; možete bezbedno koristiti uobičajene API-je za strimove
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isStream(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isStream](../_analysis/isStream.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:43:01 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>