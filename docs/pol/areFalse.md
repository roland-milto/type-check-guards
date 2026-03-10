# areFalse

## Opis

`areFalse` sprawdza, czy wszystkie elementy w podanej tablicy są ściśle booleanem `false`.

### Przypadek użycia

Zweryfikuj, że lista flag funkcji, sprawdzeń lub wyników guardów jest w całości `false` przed kontynuowaniem (np.
potwierdź, że nie występują żadne blokujące warunki).

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areFalse`, gdy potrzebujesz ścisłej walidacji, że tablica jest niepusta i zawiera wyłącznie wartość boolean
`false`.

### Zalety

- Zapewnia, że każdy element jest ściśle równy `false` (bez wymuszania konwersji truthy/falsey).
- Zwraca `false` dla wartości niebędących tablicami lub dla pustych tablic, wymagając niepustej tablicy poprzez
  `isFilledArray`.
- Kończy działanie wcześniej na pierwszym elemencie różnym od `false`, dla wydajności.

## Użycie

### Składnia

Funkcja:

- `areFalse(array)`

Parametry:

- `array`: Tablica do sprawdzenia, zawierająca elementy dowolnego typu.

### Lokalny import funkcji

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // prawda
const b = areFalse([false, true, false]);  // fałsz
const c = areFalse([false, "false", false]); // fałsz
const d = areFalse([]); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areFalse(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 16:18:20 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>