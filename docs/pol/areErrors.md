# areErrors

## Opis

Sprawdza, czy tablica jest niepusta i zawiera wyłącznie obiekty `Error`, zwracając `true` lub `false`.

### Przypadek użycia

Zweryfikuj, że dostarczone w czasie wykonywania `unknown[]` (np. zagregowane niepowodzenia, wyniki walidacji lub
zdeserializowane dane) jest niepustą listą obiektów `Error` przed iterowaniem, logowaniem lub ponownym wyrzuceniem.

> **Wskazówka dla użytkowników TypeScript:**
>
> `areErrors` zwraca `true` tylko dla wypełnionej tablicy, w której każdy element jest `Error`; zwraca `false` dla
> pustej tablicy lub jeśli jakikolwiek element nie jest `Error`.

### Zalety

- Zapewnia, że każdy element jest instancją `Error`, co umożliwia bezpieczną obsługę błędów i logowanie.
- Odrzuca puste tablice, zapobiegając przypadkowemu traktowaniu stanu „brak błędów” jako poprawnej listy błędów.
- Dobrze sprawdza się jako strażnik w czasie wykonywania przy pracy z danymi wejściowymi typu `unknown[]` (np. z API lub
  bloków `catch`).

## Użycie

### Składnia

Funkcja:

- `areErrors(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem obiektów `Error`.

### Lokalny import funkcji

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value jest niepustą tablicą obiektów Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areErrors(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 12:35:12 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>