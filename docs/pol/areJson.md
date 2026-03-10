# areJson

## Opis

Sprawdza, czy wszystkie elementy tablicy są ciągami JSON, zwracając `true` tylko wtedy, gdy tablica jest wypełniona i
każdy element jest poprawnym JSON-em; w przeciwnym razie zwraca `false`.

### Przypadek użycia

Waliduj dane przychodzące (np. z parametrów zapytania, zmiennych środowiskowych lub zewnętrznych API), gdy oczekujesz
tablicy ciągów zakodowanych jako JSON i chcesz odrzucić puste tablice lub jakiekolwiek wpisy niebędące JSON-em.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areJson`, gdy musisz zweryfikować, że `unknown[]` zawiera wyłącznie ciągi JSON przed ich parsowaniem (np. za
> pomocą `JSON.parse`).

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element jest poprawnym ciągiem JSON; w przeciwnym razie zwraca `false`.
- Szybko kończy działanie: przestaje sprawdzać, gdy tylko zostanie znaleziony element niebędący JSON-em.
- Z założenia odrzuca puste tablice, zwracając `false` dla niewypełnionego wejścia.

## Użycie

### Składnia

Funkcja:

- `areJson(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem elementów będących ciągami JSON.

### Lokalny import funkcji

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // prawda
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // fałsz
const empty = areJson([]); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areJson(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areJson](../_analysis/areJson.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 16:17:11 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>