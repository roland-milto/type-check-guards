# areFilledArrays

## Opis

`areFilledArrays` sprawdza, czy tablica dwuwymiarowa nie jest pusta i czy wszystkie jej podtablice nie są puste.

### Przypadek użycia

Użyj `areFilledArrays` do walidacji danych wejściowych w formie tabeli lub macierzy (np. wiersze CSV, dane siatki,
wyniki pogrupowane), aby móc bezpiecznie założyć, że istnieje co najmniej jedna podtablica i że żadna z podtablic nie
jest pusta.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areFilledArrays`, gdy musisz upewnić się, że tablica 2D ma co najmniej jeden wiersz i że każdy wiersz ma co
> najmniej jeden element, zanim zaczniesz po niej iterować lub indeksować.

### Zalety

- Sprawdza, czy zewnętrzna tablica nie jest pusta oraz czy każda wewnętrzna tablica również nie jest pusta, zwracając
  `true` tylko wtedy, gdy oba warunki są spełnione.
- Działa z dowolnymi typami elementów wewnątrz podtablic (np. liczby, ciągi znaków, obiekty, zagnieżdżone tablice),
  ponieważ sprawdza wyłącznie, czy tablice są „wypełnione”, a nie zawartość elementów.
- Zapewnia prosty wynik logiczny (`true`/`false`), odpowiedni jako warunek ochronny przed przetwarzaniem danych
  dwuwymiarowych.

## Użycie

### Składnia

Funkcja:

- `areFilledArrays(array)`

Parametry:

- `array`: Dwuwymiarowa tablica do sprawdzenia.

### Lokalny import funkcji

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // prawda
console.log(areFilledArrays(b)); // prawda
console.log(areFilledArrays(c)); // prawda
console.log(areFilledArrays(d)); // fałsz
console.log(areFilledArrays(e)); // fałsz
console.log(areFilledArrays(f)); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areFilledArrays(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 11:58:33 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>