# isNaN

## Opis

Określa, czy podana `value` jest `NaN` typu `number`, bez konwertowania stringów.

### Przypadek użycia

Waliduj niezaufane lub luźno typowane dane wejściowe (np. payloady API, wartości formularzy, sparsowany JSON), aby
wykryć specjalną wartość `NaN` i obsłużyć ją jawnie, traktując jednocześnie dane nienumeryczne jako niebędące `NaN`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isNaN`, gdy musisz wykryć specjalną wartość liczbową `NaN`, jednocześnie upewniając się, że wejście jest
> faktycznie typu `number` (bez konwersji string->number).

### Zalety

- Sprawdza, czy wartość jest `NaN`, bez wymuszania konwersji wartości nienumerycznych (np. stringów) na liczby.
- Zwraca `true` wyłącznie dla wartości, które są jednocześnie typu `number` oraz `NaN`.
- Bezpieczne dla danych wejściowych typu `unknown` i unika fałszywych trafień wynikających z niejawnych konwersji.

## Użycie

### Składnia

Funkcja:

- `isNaN(value)`

Parametry:

- `value`: Wartość, którą należy sprawdzić, czy jest `NaN` typu `number`.

### Lokalny import funkcji

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // prawda
console.log(isNaN(b)); // fałsz
console.log(isNaN(c)); // fałsz

if (isNaN(a)) {
  // a jest liczbą, a konkretnie NaN
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isNaN(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 15:47:40 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>