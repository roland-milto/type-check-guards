# areIntegers

## Opis

`areIntegers` określa, czy wszystkie elementy w podanej tablicy są liczbami całkowitymi, zwracając `true`, jeśli tak
jest, oraz `false` w przeciwnym razie.

### Przypadek użycia

Użyj `areIntegers` do walidacji danych podanych przez użytkownika lub pochodzących z zewnętrznych źródeł (np. parametry
zapytania, ładunek JSON, wiersze CSV), gdy Twoja logika wymaga wypełnionej listy wartości całkowitych, takich jak
identyfikatory, liczniki, przesunięcia stronicowania lub indeksy tablic.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areIntegers` jako strażnika czasu wykonania dla wejść typu `unknown[]`, zanim potraktujesz je jako `number[]`
> zawierające wyłącznie liczby całkowite. Jeśli zwróci `false`, dane wejściowe albo nie są wypełnioną tablicą, albo
> zawierają co najmniej jedną wartość niebędącą liczbą całkowitą.

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element jest liczbą całkowitą; w przeciwnym razie zwraca `false`.
- Pomaga zweryfikować nieznane dane wejściowe przed wykonaniem operacji przeznaczonych wyłącznie dla liczb całkowitych (
  np. indeksowanie, liczniki, identyfikatory).
- Szybko kończy działanie: przestaje sprawdzać, gdy tylko zostanie znaleziony element niebędący liczbą całkowitą.

## Użycie

### Składnia

Funkcja:

- `areIntegers(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem elementów będących liczbami całkowitymi.

### Lokalny import funkcji

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // prawda
console.log(areIntegers(b)); // prawda
console.log(areIntegers(c)); // fałsz

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areIntegers(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 01:00:07 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>