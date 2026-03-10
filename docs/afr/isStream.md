# isStream

## Beskrywing

`isStream` kontroleer of ’n gegewe waarde ’n stroomvoorwerp is (Node.js-stroomagtig, `ReadableStream`, of
`WritableStream`).

### Gebruikscenario

Valideer insette wat óf gewone voorwerpe óf strome kan wees (bv. lêeroplaaie, HTTP-liggame, of verwerkingspyplyne) en
vertak logika op grond daarvan of die waarde ’n stroom is.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isStream` om `unknown` te vernou voordat jy stroommetodes aanroep; dit herken Node.js-stroomagtige
> voorwerpe (via `pipe`/`on`) en Web Streams (`ReadableStream`/`WritableStream`) wanneer daardie globale veranderlikes
> bestaan.

### Voordele

- Bespeur algemene Node.js-stroomagtige voorwerpe veilig deur te kyk vir `pipe`- en `on`-funksies.
- Ondersteun ook Web Streams deur `ReadableStream` en `WritableStream` te herken wanneer beskikbaar.
- Gee ’n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte en vertakkingslogika.

## Gebruik

### Sintaksis

Funksie:

- `isStream(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream is stroom-agtig; jy kan algemene stroom-API's veilig gebruik
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isStream(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isStream](../_analysis/isStream.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:38:45 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>