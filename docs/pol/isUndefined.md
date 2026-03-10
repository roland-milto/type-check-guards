# isUndefined

## Opis

Sprawdza, czy dana wartość jest `undefined`.

### Przypadek użycia

Użyj `isUndefined`, aby zabezpieczać opcjonalne dane wejściowe, wykrywać brakujące właściwości lub rozróżniać między
„nie podano” (`undefined`) a „jawnie puste” (`null`).

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isUndefined`, gdy konkretnie musisz wykryć `undefined` (a nie `null`). Jest to bezpieczne, ponieważ opiera się
> na `typeof value === "undefined"`.

### Zalety

- Zapewnia jasne, jednoznaczne sprawdzenie `undefined` za pomocą `typeof`, unikając przypadków brzegowych związanych z
  niezadeklarowanymi zmiennymi.
- Zwraca prosty wynik logiczny (`true`/`false`), odpowiedni do strażników (guardów), rozgałęzień i logiki walidacji.
- Pomaga odróżnić `undefined` od innych „pustych” wartości, takich jak `null`, `0`, `""` lub `NaN`.

## Użycie

### Składnia

Funkcja:

- `isUndefined(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x jest tutaj niezdefiniowane
} else {
  // x nie jest tutaj niezdefiniowane
}

const a = isUndefined(undefined); // prawda
const b = isUndefined(null);      // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isUndefined(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:04:05 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>