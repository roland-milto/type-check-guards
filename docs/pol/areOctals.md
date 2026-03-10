# areOctals

## Opis

`areOctals` określa, czy podana wartość jest niepustą tablicą poprawnych łańcuchów ósemkowych.

### Przypadek użycia

Użyj `areOctals` podczas walidacji danych wejściowych użytkownika, wartości konfiguracyjnych lub ładunków API, które
muszą zawierać literały ósemkowe (np. tryby uprawnień plików takie jak `0o755`), i gdy chcesz odrzucać puste tablice lub
jakiekolwiek niepoprawne wpisy, zwracając `false`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areOctals`, aby upewnić się, że masz niepustą `unknown[]`, w której każdy wpis jest poprawnym łańcuchem
> ósemkowym, zanim dokonasz konwersji (np. przez `Number(...)` lub własne parsowanie).

### Zalety

- Sprawdza, czy wartość jest niepustą tablicą, w której każdy element jest łańcuchem ósemkowym, zwracając `true` tylko
  wtedy, gdy wszystkie elementy przejdą walidację.
- Szybko kończy działanie: zwraca `false` natychmiast po wykryciu elementu niebędącego zapisem ósemkowym.
- Przydatne jako strażnik przed parsowaniem lub konwersją łańcuchów ósemkowych, aby uniknąć błędów w czasie wykonywania
  i niespójnej obsługi danych wejściowych.

## Użycie

### Składnia

Funkcja:

- `areOctals(array)`

Parametry:

- `array`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value jest niepustą tablicą łańcuchów znaków w zapisie ósemkowym
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areOctals(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:57:56 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>