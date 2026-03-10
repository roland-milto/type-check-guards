# isArray

## Opis

`isArray` sprawdza, czy podana wartość jest tablicą, i zwraca `true`, jeśli tak jest, w przeciwnym razie `false`.

### Przypadek użycia

Waliduj nieznane dane (np. sparsowany JSON lub odpowiedzi API), aby upewnić się, że wartość jest tablicą przed
iterowaniem, indeksowaniem lub dostępem do `.length`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isArray`, gdy potrzebujesz sprawdzenia tablic w czasie wykonywania; zwraca wartość logiczną i można ją
> bezpiecznie wywoływać dla wartości typu `unknown`.

### Zalety

- Używa wbudowanej metody `Array.isArray` do niezawodnego wykrywania tablic w różnych kontekstach (np. w iframe).
- Zwraca prosty wynik logiczny (`true`/`false`), odpowiedni do strażników typów i logiki rozgałęzień.
- Działa z dowolnym typem wejścia, ponieważ parametr ma typ `unknown`.

## Użycie

### Składnia

Funkcja:

- `isArray(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input jest tablicą w czasie wykonywania
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isArray(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isArray](../_analysis/isArray.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 11:31:46 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>