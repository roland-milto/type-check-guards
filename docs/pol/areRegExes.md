# areRegExes

## Opis

`areRegExes` sprawdza, czy wartość jest wypełnioną tablicą zawierającą wyłącznie obiekty `RegExp`.

### Przypadek użycia

Zweryfikuj, że opcja konfiguracji (np. lista wzorców dozwolonych/zabronionych) jest niepustą tablicą wyrażeń
regularnych, zanim użyjesz jej do dopasowywania.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areRegExes`, aby zawęzić typ `unknown` do `RegExp[]` przed iterowaniem lub łączeniem wzorców.

### Zalety

- Zapewnia, że wartość jest niepustą tablicą, w której każdy element jest instancją `RegExp`.
- Dostarcza prostą ochronę boolowską (`true`/`false`) do walidacji danych wejściowych użytkownika lub konfiguracji.
- Pomaga zapobiegać błędom w czasie wykonywania, gdy późniejszy kod zakłada, że wszystkie elementy obsługują operacje na
  wyrażeniach regularnych.

## Użycie

### Składnia

Funkcja:

- `areRegExes(array)`

Parametry:

- `array`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns jest tutaj tablicą RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areRegExes(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:20:54 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>