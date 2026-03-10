# isNull

## Opis

Określa, czy podana `value` ma wartość `null`.

### Przypadek użycia

Użyj `isNull` do walidacji danych wejściowych lub pól ładunku API, w których `null` jest znaczącą wartością-sygnałem i
musi być obsłużone inaczej niż `undefined` lub inne wartości.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isNull`, gdy musisz odróżnić `null` od `undefined` oraz innych wartości fałszywych; zwraca `true` wyłącznie dla
`null`.

### Zalety

- Zapewnia precyzyjne sprawdzenie `null` bez mylenia go z `undefined`.
- Działa niezawodnie dla dowolnego typu wejścia, ponieważ akceptuje `unknown`.
- Proste, szybkie i bez efektów ubocznych; zwraca wyłącznie `true` lub `false`.

## Użycie

### Składnia

Funkcja:

- `isNull(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem `null`.

### Lokalny import funkcji

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // prawda
console.log(isNull(b)); // fałsz

if (isNull(a)) {
  // a jest tutaj null
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isNull(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isNull](../_analysis/isNull.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 15:40:33 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>