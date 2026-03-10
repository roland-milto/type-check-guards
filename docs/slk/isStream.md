# isStream

## Popis

`isStream` kontroluje, či je daná hodnota objekt streamu (podobný streamu v Node.js, `ReadableStream` alebo
`WritableStream`).

### Prípad použitia

Validujte vstupy, ktoré môžu byť buď obyčajné objekty, alebo streamy (napr. nahrávanie súborov, telá HTTP požiadaviek
alebo spracovateľské pipeline), a vetvite logiku podľa toho, či je hodnota stream.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isStream` na zúženie typu `unknown` pred volaním metód streamu; rozpoznáva objekty podobné streamom v
> Node.js (cez `pipe`/`on`) a Web Streams (`ReadableStream`/`WritableStream`), keď tieto globálne objekty existujú.

### Výhody

- Bezpečne rozpozná bežné objekty podobné streamom v Node.js kontrolou funkcií `pipe` a `on`.
- Podporuje aj Web Streams rozpoznaním `ReadableStream` a `WritableStream`, keď sú dostupné.
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre stráže typov a vetvenie logiky.

## Použitie

### Syntax

Funkcia:

- `isStream(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream je podobný streamu; môžete bezpečne používať bežné API streamu
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isStream(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isStream](../_analysis/isStream.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:42:52 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>