# isEmpty

## Opis

Określa, czy dana wartość jest pusta, zwracając `true` dla `null`, `undefined`, pustych/wyłącznie białych znaków ciągów,
pustych tablic, pustych `Map`/`Set` lub obiektów bez własnych enumerowalnych właściwości.

### Przypadek użycia

Użyj `isEmpty`, aby walidować dane wejściowe i wykrywać brakujące/puste wartości w wielu typach danych (np. pola
formularzy, payloady API, obiekty konfiguracji), gdzie `null`, `undefined`, ciągi z białymi znakami, puste kolekcje oraz
obiekty bez właściwości powinny być traktowane jako puste.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isEmpty` to narzędzie zwracające wartość logiczną (nie predykat typu TypeScript), więc samo w sobie nie zawęża typów;
> używaj go do walidacji/rozgałęziania, a nie do zawężania w czasie kompilacji.

### Zalety

- Traktuje `null` i `undefined` jako `true` przy sprawdzaniu pustki.
- Uznaje ciągi składające się wyłącznie z białych znaków za puste, przycinając je przed sprawdzeniem długości.
- Obsługuje typowe typy kontenerów (tablice, `Map`, `Set`) oraz zwykłe obiekty bez własnych enumerowalnych właściwości.
- Unika zliczania właściwości dziedziczonych, używając sprawdzeń `hasOwnProperty`.
- Zwraca prosty wynik logiczny (`true`/`false`) odpowiedni do strażników (guards) i walidacji.

## Użycie

### Składnia

Funkcja:

- `isEmpty(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem pustki.

### Lokalny import funkcji

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isEmpty(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 16:20:25 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>