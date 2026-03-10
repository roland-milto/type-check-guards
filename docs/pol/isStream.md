# isStream

## Opis

`isStream` sprawdza, czy podana wartość jest obiektem strumienia (podobnym do strumieni Node.js, `ReadableStream` lub
`WritableStream`).

### Przypadek użycia

Waliduj dane wejściowe, które mogą być zarówno zwykłymi obiektami, jak i strumieniami (np. przesyłanie plików, treści
HTTP lub potoki przetwarzania), i rozgałęziaj logikę w zależności od tego, czy wartość jest strumieniem.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isStream`, aby zawęzić typ `unknown` przed wywołaniem metod strumienia; rozpoznaje obiekty podobne do strumieni
> Node.js (przez `pipe`/`on`) oraz Web Streams (`ReadableStream`/`WritableStream`), gdy te globalne obiekty istnieją.

### Zalety

- Bezpiecznie wykrywa typowe obiekty podobne do strumieni w Node.js, sprawdzając obecność funkcji `pipe` i `on`.
- Obsługuje także Web Streams, rozpoznając `ReadableStream` i `WritableStream`, gdy są dostępne.
- Zwraca prosty wynik logiczny (`true`/`false`), odpowiedni do strażników (guards) i logiki rozgałęzień.

## Użycie

### Składnia

Funkcja:

- `isStream(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream jest podobny do strumienia; możesz bezpiecznie używać typowych API strumieni
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isStream(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isStream](../_analysis/isStream.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:42:38 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>