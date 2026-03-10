# areMaps

## Opis

`areMaps` określa, czy dana tablica jest niepusta i czy wszystkie jej elementy są instancjami `Map`.

### Przypadek użycia

Waliduj nieznane dane wejściowe (np. z parsowania JSON, zewnętrznych API lub źródeł dynamicznych), zanim potraktujesz je
jako niepustą listę obiektów `Map`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Zwraca `false` dla pustej tablicy; zwraca `true` tylko wtedy, gdy tablica jest wypełniona i każdy element jest `Map`.

### Zalety

- Zapewnia, że każdy element jest instancją `Map`, zwracając `true` tylko wtedy, gdy cała tablica przejdzie weryfikację.
- Z założenia odrzuca puste tablice, zapobiegając przypadkowemu uznaniu „braku danych” za poprawne wejście.
- Przydatne jako strażnik przed wykonywaniem operacji specyficznych dla `Map` (np. `.get()`, `.set()`, iteracja) na
  całej kolekcji.

## Użycie

### Składnia

Funkcja:

- `areMaps(array)`

Parametry:

- `array`: Tablica do sprawdzenia.

### Lokalny import funkcji

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items ma gwarancję bycia niepustą tablicą instancji Map w czasie wykonywania
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // fałsz dla: pustych tablic lub tablic zawierających jakąkolwiek wartość niebędącą Map
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areMaps(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 16:14:12 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>