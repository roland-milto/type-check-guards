# isInteger

## Opis

Określa, czy podana `value` jest bezpieczną liczbą całkowitą.

### Przypadek użycia

Waliduj niezaufane dane wejściowe (np. parametry zapytania, ładunki JSON, zmienne środowiskowe) przed użyciem ich jako
liczby całkowitej dla indeksów tablic, paginacji, liczników lub identyfikatorów w bazie danych.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isInteger`, aby zweryfikować nieznane dane wejściowe przed traktowaniem ich jako liczby całkowitej; zwraca
`true` tylko dla wartości, dla których `typeof value === "number"` oraz `Number.isSafeInteger(value)`.

### Zalety

- Sprawdza zarówno typ, jak i bezpieczeństwo liczbowe: zwraca `true` tylko wtedy, gdy wejście jest liczbą i bezpieczną
  liczbą całkowitą.
- Zapobiega typowym pułapkom związanym z wymuszaniem typu liczbowego: ciągi znaków takie jak "5" poprawnie zwracają
  `false`.
- Odrzuca liczby niecałkowite oraz niebezpieczne liczby całkowite, dzięki czemu nadaje się do identyfikatorów, liczników
  i indeksowania tablic.

## Użycie

### Składnia

Funkcja:

- `isInteger(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem bycia liczbą całkowitą.

### Lokalny import funkcji

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // prawda
const b = isInteger(-100);   // prawda
const c = isInteger("5");    // fałsz
const d = isInteger(5.5);    // fałsz
const e = isInteger(null);   // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isInteger(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 00:51:07 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>