# isFilledArray

## Opis

Sprawdza, czy `value` jest tablicą zawierającą co najmniej jeden element, zwracając `true` lub `false`.

### Przypadek użycia

Użyj `isFilledArray`, aby zweryfikować dane wejściowe (np. payloady API, wartości formularzy, konfigurację) przed
iterowaniem, dostępem do pierwszego elementu lub zastosowaniem logiki wymagającej co najmniej jednego elementu.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isFilledArray` to strażnik czasu wykonywania, który zwraca wartość logiczną; nie zawęża typów elementów poza
> potwierdzeniem, że tablica jest niepusta.

### Zalety

- Proste i szybkie sprawdzenie niepustej tablicy za pomocą `Array.isArray` oraz kontroli długości.
- Pomaga uniknąć błędów w czasie wykonywania, gdy kod zakłada, że tablica ma co najmniej jeden element.
- Jasny wynik logiczny: zwraca `true` dla niepustych tablic i `false` w przeciwnym razie.

## Użycie

### Składnia

Funkcja:

- `isFilledArray(value)`

Parametry:

- `value`: Wartość do sprawdzenia, czy jest niepustą tablicą.

### Lokalny import funkcji

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input jest niepustą tablicą w czasie wykonywania
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isFilledArray(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 11:48:30 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>