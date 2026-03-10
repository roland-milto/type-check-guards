# isBuffer

## Opis

Sprawdza, czy wartość jest Node.js `Buffer`, i zwraca `true` lub `false`.

### Przypadek użycia

Waliduj dane wejściowe w czasie wykonywania (np. ładunki API, dane plików lub bufory wiadomości), aby upewnić się, że
wartość jest `Buffer` przed jej przetworzeniem, oraz niezawodnie otrzymywać `false` podczas działania poza Node.js,
gdzie `Buffer` może nie istnieć.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isBuffer`, aby zawęzić wartości typu `unknown` do `Buffer` przed wywołaniem metod specyficznych dla Buffer.

### Zalety

- Bezpiecznie wykrywa instancje Node.js `Buffer` za pomocą `Buffer.isBuffer`.
- Zwraca `false` w środowiskach, w których `Buffer` jest niedostępny, unikając błędów w czasie wykonywania.
- Działa z wejściem typu `unknown`, dzięki czemu nadaje się do walidacji w czasie wykonywania i zawężania typów.

## Użycie

### Składnia

Funkcja:

- `isBuffer(value)`

Parametry:

- `value`: Wartość do przetestowania.

### Lokalny import funkcji

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // prawda
console.log(isBuffer(b)); // fałsz

if (isBuffer(a)) {
  // a jest tutaj Bufferem
  console.log(a.toString("utf8"));
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isBuffer(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 16:32:55 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>