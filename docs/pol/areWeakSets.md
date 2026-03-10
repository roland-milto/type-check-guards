# areWeakSets

## Opis

Sprawdza, czy wejście jest niepustą tablicą, w której każdy element jest `WeakSet`, zwracając `true` tylko w takim
przypadku.

### Przypadek użycia

Waliduj dane wejściowe w czasie wykonywania (np. z API, konfiguracji lub danych dostarczonych przez użytkownika), aby
upewnić się, że masz niepustą listę instancji `WeakSet` przed kontynuowaniem logiki zależnej od zachowania `WeakSet`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areWeakSets`, aby zweryfikować nieznane wejście, zanim potraktujesz je jako `WeakSet[]`. Zwraca `false` dla
> pustych tablic i wartości niebędących tablicami.

### Zalety

- Zapewnia, że każdy element w tablicy wejściowej jest `WeakSet`.
- Zwraca `false` dla pustych tablic, zapobiegając przypadkowym wynikom „wszystko poprawne” przy braku danych.
- Bezpiecznie kończy działanie, zwracając `false`, gdy wejście nie jest wypełnioną tablicą (w tym `null`).
- Przydatne jako strażnik przed wykonywaniem operacji wymagających instancji `WeakSet`.

## Użycie

### Składnia

Funkcja:

- `areWeakSets(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem obiektów `WeakSet`.

### Lokalny import funkcji

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a jest niepustą tablicą instancji WeakSet
}

console.log(areWeakSets(a)); // prawda
console.log(areWeakSets(b)); // fałsz
console.log(areWeakSets(c)); // fałsz
console.log(areWeakSets(null as unknown)); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areWeakSets(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:10:30 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>