# areNaNs

## Opis

`areNaNs` sprawdza, czy wszystkie elementy w tablicy są `NaN`, i zwraca `true` tylko wtedy, gdy każdy element jest
`NaN`.

### Przypadek użycia

Waliduj dane wejściowe, w których `NaN` jest używane jako wartość sygnalizacyjna (sentinel), i musisz upewnić się, że
cała tablica składa się wyłącznie z `NaN` (np. wykrywanie w pełni brakującej serii liczbowej).

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areNaNs`, gdy musisz zweryfikować, że tablica zawiera wyłącznie numeryczną wartość `NaN` (bez konwersji stringów
> na liczby).

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element jest `NaN` (ścisłe sprawdzenie wszystkich elementów).
- Nie dokonuje konwersji (coercion) ciągów znaków na liczby; wartości takie jak "NaN" pozostają nie-`NaN` i powodują
  wynik `false`.
- Zwraca `false` dla pustych tablic, zapobiegając przypadkowemu `true` przy pustym wejściu.

## Użycie

### Składnia

Funkcja:

- `areNaNs(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem wartości `NaN`.

### Lokalny import funkcji

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // prawda
const b = areNaNs([NaN, 1, NaN]); // fałsz
const c = areNaNs([NaN, "NaN", NaN]); // fałsz
const d = areNaNs([NaN, null, NaN]); // fałsz
const e = areNaNs([] as unknown[]); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areNaNs(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 15:53:05 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>