# isString

## Opis

`isString` określa, czy podana wartość jest stringiem.

### Przypadek użycia

Waliduj dane wejściowe użytkownika, pola ładunku API lub wartości konfiguracji w czasie wykonywania, aby upewnić się, że
wartość jest stringiem przed zastosowaniem operacji na stringach (np. przycinanie, dzielenie, zmiana wielkości liter).

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isString`, aby zweryfikować wartości typu `unknown` lub luźno typowane przed wywołaniem metod stringów; zwraca
`true` tylko wtedy, gdy `typeof value === "string"`.

### Zalety

- Proste i szybkie sprawdzenie za pomocą `typeof`.
- Zwraca przewidywalny wynik logiczny: `true` dla stringów, w przeciwnym razie `false`.
- Działa zarówno dla pustych, jak i niepustych stringów.
- Przydatne jako lekka ochrona w czasie wykonywania przed wykonaniem operacji specyficznych dla stringów.

## Użycie

### Składnia

Funkcja:

- `isString(value)`

Parametry:

- `value`: Wartość, która ma zostać sprawdzona pod kątem typu string.

### Lokalny import funkcji

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input jest tutaj ciągiem znaków
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isString](../_analysis/isString.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 12:26:26 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>