# isNullOrUndefined

## Opis

Sprawdza, czy dana wartość jest `null` lub `undefined`.

### Przypadek użycia

Użyj `isNullOrUndefined`, gdy potrzebujesz traktować zarówno `null`, jak i `undefined` jako „brak wartości”, np. podczas
walidacji opcjonalnych danych wejściowych, normalizacji ładunków API lub zabezpieczania ścieżek kodu przed dereferencją
potencjalnie brakującej wartości.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isNullOrUndefined`, aby zabezpieczyć się przed brakującymi wartościami przed dostępem do właściwości lub
> wywołaniem metod; zwraca `true` tylko dla `null` i `undefined`.

### Zalety

- Zapewnia jasny, wielokrotnego użytku strażnik do wykrywania `null` i `undefined` w jednym miejscu.
- Zwraca prostą wartość logiczną (`true`/`false`), którą łatwo łączyć w warunkach i walidacjach.
- Pomaga unikać typowych błędów w czasie wykonywania, sprawdzając brakujące wartości przed dostępem do właściwości lub
  wywołaniem metod.

## Użycie

### Składnia

Funkcja:

- `isNullOrUndefined(value)`

Parametry:

- `value`: Wartość, która ma zostać sprawdzona pod kątem `null` lub `undefined`.

### Lokalny import funkcji

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // obsłuż brakującą wartość
}

console.log(isNullOrUndefined(b)); // prawda
console.log(isNullOrUndefined(c)); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isNullOrUndefined(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 00:34:58 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>