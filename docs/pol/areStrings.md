# areStrings

## Opis

`areStrings` sprawdza, czy tablica jest niepusta i czy wszystkie jej elementy są ciągami znaków, zwracając `true` tylko
w takim przypadku.

### Przypadek użycia

Waliduj dane zewnętrzne lub dostarczone przez użytkownika (np. parametry zapytania, ładunki JSON, pola CSV), aby upewnić
się, że masz niepustą listę ciągów znaków przed przetwarzaniem.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areStrings`, aby zweryfikować nieznane tablice przed zastosowaniem logiki przeznaczonej wyłącznie dla ciągów
> znaków; zwraca `false` dla pustych tablic.

### Zalety

- Zapewnia, że każdy element jest ciągiem znaków, i odrzuca tablice o mieszanych typach, zwracając `false`.
- Odrzuca puste tablice, więc `true` oznacza wyłącznie niepustą listę ciągów znaków.
- Przydatne jako szybka osłona w czasie wykonywania przed wykonaniem operacji tylko na ciągach znaków (np. `trim`,
  `toLowerCase`).

## Użycie

### Składnia

Funkcja:

- `areStrings(value)`

Parametry:

- `value`: Expected type `string[]`.

### Lokalny import funkcji

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input jest niepustym string[] w czasie wykonywania
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areStrings(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 13:20:02 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>