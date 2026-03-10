# isError

## Opis

Sprawdza, czy podana `value` jest instancją `Error`.

### Przypadek użycia

Użyj `isError`, gdy otrzymujesz wartość typu `unknown` (np. z bloku `catch`, wywołania zwrotnego lub zewnętrznej
biblioteki) i musisz bezpiecznie ustalić, czy jest to `Error`, zanim odczytasz `message`, `name` lub `stack`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isError`, aby zabezpieczyć wartości typu `unknown` (np. z `catch`) przed traktowaniem ich jako `Error`.

### Zalety

- Zapewnia proste sprawdzenie w czasie wykonywania, czy wartość jest instancją `Error`.
- Pomaga zawęzić nieznane dane wejściowe przed uzyskaniem dostępu do właściwości `Error`, takich jak `message` lub
  `stack`.
- Zmniejsza ryzyko wyjątków w czasie wykonywania podczas obsługi wartości z `catch`, zewnętrznych API lub nieotypowanych
  źródeł.

## Użycie

### Składnia

Funkcja:

- `isError(value)`

Parametry:

- `value`: Wartość do sprawdzenia względem typu `Error`.

### Lokalny import funkcji

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isError(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isError](../_analysis/isError.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 12:46:47 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>