# isValidDate

## Opis

`isValidDate` sprawdza, czy podana wartość jest prawidłowym obiektem `Date`, i zwraca `true` tylko dla rzeczywistych,
niebłędnych dat.

### Przypadek użycia

Waliduj dane wejściowe użytkownika lub dane z API, które mogą zawierać daty, upewniając się, że wartość jest rzeczywistą
instancją `Date`, a nie nieprawidłową datą, zanim wykonasz obliczenia na datach, formatowanie lub porównania.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isValidDate` przed wywołaniem metod `Date` (np. `toISOString`, `getTime`) na wartościach o typie `unknown`, aby
> upewnić się, że są prawidłowymi obiektami `Date`.

### Zalety

- Zapewnia, że wartość jest instancją `Date`, a nie tylko ciągiem znaków lub liczbą przypominającą datę.
- Odrzuca nieprawidłowe daty (np. `new Date("invalid")`) poprzez sprawdzanie wartości czasu `NaN`.
- Prosta straż booleanowa, łatwa do użycia w warunkach i potokach walidacji.
- Pomaga zapobiegać błędom w czasie wykonywania podczas wywoływania metod daty, weryfikując najpierw dane wejściowe.

## Użycie

### Składnia

Funkcja:

- `isValidDate(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input jest prawidłową instancją Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // fałsz
console.log(isValidDate("2025-12-22")); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isValidDate(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 16:52:27 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>