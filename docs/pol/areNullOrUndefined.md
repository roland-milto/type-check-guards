# areNullOrUndefined

## Opis

Sprawdza, czy wszystkie elementy w podanej tablicy mają wartość `null` lub `undefined`.

### Przypadek użycia

Zweryfikuj, że lista opcjonalnych pól nie zawiera żadnych rzeczywistych wartości (tylko `null`/`undefined`), zanim
zdecydujesz o pominięciu przetwarzania lub wyświetleniu stanu „nie podano żadnych wartości”.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areNullOrUndefined`, gdy musisz zweryfikować, że tablica zawiera wyłącznie brakujące wartości (`null`/
`undefined`). Zwróć uwagę, że dla pustej tablicy zwraca `false`.

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element ma wartość `null` lub `undefined`.
- Zwraca `false` dla pustych tablic, co pomaga odróżnić „brak danych” od „wszystkie wartości brakujące”.
- Działa z `unknown[]`, dzięki czemu jest bezpieczne w użyciu przed zawężeniem typów.

## Użycie

### Składnia

Funkcja:

- `areNullOrUndefined(array)`

Parametry:

- `array`: Tablica do sprawdzenia.

### Lokalny import funkcji

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areNullOrUndefined(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 00:31:08 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>