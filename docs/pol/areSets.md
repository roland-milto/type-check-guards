# areSets

## Opis

Sprawdza, czy dana niepusta tablica zawiera wyłącznie instancje `Set`, zwracając `true`, jeśli tak jest, i `false` w
przeciwnym razie.

### Przypadek użycia

Zweryfikuj, że wartość (np. z danych wejściowych użytkownika, parsowania JSON lub zewnętrznych API) jest niepustą
tablicą obiektów `Set` przed przetwarzaniem każdego zbioru.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areSets`, aby zweryfikować nieznane dane wejściowe przed iterowaniem i wywoływaniem API `Set` (np. `.size`,
`.has`, `.add`) na każdym elemencie.

### Zalety

- Zwraca `true` tylko wtedy, gdy dane wejściowe jest niepustą tablicą i każdy element jest instancją `Set`.
- Zapobiega fałszywym trafieniom dla pustych tablic, zwracając `false`, gdy tablica nie ma żadnych elementów.
- Przydatne jako strażnik czasu wykonania przed wykonywaniem operacji specyficznych dla `Set` na każdym elemencie.

## Użycie

### Składnia

Funkcja:

- `areSets(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem instancji `Set`.

### Lokalny import funkcji

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a jest tablicą instancji Set w czasie wykonywania
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // fałsz
console.log(areSets(c)); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areSets(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areSets](../_analysis/areSets.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:14:57 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>