# areArrays

## Opis

`areArrays` określa, czy wartość jest wypełnioną dwuwymiarową tablicą, której elementy są wyłącznie tablicami.

### Przypadek użycia

Użyj `areArrays` do walidacji danych wejściowych o charakterze tabelarycznym lub macierzowym (np. wiersze CSV, dane
siatki lub zgrupowane listy) przed wykonywaniem operacji na wierszach/kolumnach; zwraca `false`, jeśli dane wejściowe
nie są tablicą, są puste lub zawierają jakikolwiek element, który nie jest tablicą.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areArrays`, gdy musisz upewnić się, że wartość jest niepustą tablicą 2D oraz że każdy wiersz jest tablicą, zanim
> zaczniesz iterować lub indeksować zagnieżdżone tablice.

### Zalety

- Sprawdza, czy dane wejściowe jest niepustą dwuwymiarową tablicą, w której każdy element jest tablicą.
- Zwraca prosty wynik logiczny (`true`/`false`), odpowiedni do strażników (guards) i wczesnych wyjść.
- Pomaga zapobiegać błędom w czasie wykonywania, gdy późniejszy kod zakłada operacje na zagnieżdżonych tablicach (np.
  mapowanie wierszy).

## Użycie

### Składnia

Funkcja:

- `areArrays(array)`

Parametry:

- `array`: Dane wejściowe do sprawdzenia.

### Lokalny import funkcji

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // wartość jest tablicą 2D z tablicami jako elementami
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areArrays(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 13:41:08 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>