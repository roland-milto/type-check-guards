# areOneOfType

## Opis

`areOneOfType` sprawdza, czy wszystkie elementy w niepustej tablicy są jednym z określonych typów w czasie wykonywania.

### Przypadek użycia

Waliduj dane wejściowe (np. sparsowany JSON), w których pole musi być niepustą tablicą, a jej elementy są ograniczone do
znanego zestawu typów prymitywnych; zwróć `false`, gdy tablica jest pusta lub zawiera jakikolwiek niedozwolony typ.

> **Wskazówka dla użytkowników TypeScript:**
>
> Ta funkcja zwraca wartość logiczną i nie zawęża typów elementów tablicy na etapie kompilacji; używaj jej jako kroku
> walidacji w czasie wykonywania przed dalszym przetwarzaniem.

### Zalety

- Zapewnia, że każdy element w tablicy pasuje do co najmniej jednego dozwolonego typu w czasie wykonywania, zwracając
  `true` tylko wtedy, gdy cała tablica przejdzie weryfikację.
- Wcześnie odrzuca nieprawidłowe dane wejściowe: zwraca `false`, gdy `array` lub `types` jest puste albo nie jest
  wypełnioną tablicą.
- Przydatne do walidacji kolekcji o mieszanych typach (np. liczby i ciągi znaków) za pomocą jednego wywołania
  `areOneOfType`.

## Użycie

### Składnia

Funkcja:

- `areOneOfType(array, types)`

Parametry:

- `array`: Tablica elementów do zweryfikowania względem podanych typów.
- `types`: Tablica ciągów znaków reprezentujących typy danych, względem których należy sprawdzać.

### Lokalny import funkcji

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areOneOfType(array, types)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:38:20 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>