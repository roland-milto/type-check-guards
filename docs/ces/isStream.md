# isStream

## Popis

`isStream` kontroluje, zda je daná hodnota stream objekt (podobný streamům v Node.js, `ReadableStream` nebo
`WritableStream`).

### Případ použití

Validujte vstupy, které mohou být buď obyčejné objekty, nebo streamy (např. nahrávání souborů, HTTP body nebo
zpracovatelské pipeline), a větvěte logiku podle toho, zda je hodnota stream.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isStream` ke zúžení typu `unknown` před voláním stream metod; rozpozná objekty podobné streamům v Node.js (
> přes `pipe`/`on`) i Web Streams (`ReadableStream`/`WritableStream`), pokud tyto globální objekty existují.

### Výhody

- Bezpečně rozpozná běžné objekty podobné streamům v Node.js kontrolou funkcí `pipe` a `on`.
- Podporuje také Web Streams tím, že rozpozná `ReadableStream` a `WritableStream`, pokud jsou k dispozici.
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a větvení logiky.

## Použití

### Syntaxe

Funkce:

- `isStream(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream je podobný streamu; můžete bezpečně používat běžná streamová API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isStream(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isStream](../_analysis/isStream.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:39:08 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>