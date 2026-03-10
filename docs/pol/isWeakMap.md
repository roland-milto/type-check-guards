# isWeakMap

## Opis

Określa, czy podana `value` jest instancją `WeakMap`.

### Przypadek użycia

Użyj `isWeakMap`, gdy przyjmujesz wartość typu `unknown` (np. z publicznego API, systemu wtyczek lub dynamicznej
konfiguracji) i musisz zweryfikować, że jest to `WeakMap`, zanim użyjesz zachowania specyficznego dla `WeakMap`.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isWeakMap` wykonuje sprawdzenie `instanceof WeakMap`; jest to strażnik czasu wykonywania, który zwraca `true`
> wyłącznie dla rzeczywistych instancji `WeakMap`.

### Zalety

- Proste sprawdzenie w czasie wykonywania, czy wartość jest `WeakMap`.
- Pomaga zapobiegać niewłaściwemu użyciu API, które wymaga `WeakMap`, zwracając `true`/`false` zamiast rzucać wyjątek.
- Działa z danymi wejściowymi typu `unknown`, co czyni go wygodnym na granicach modułów (np. podczas parsowania, pracy z
  danymi zewnętrznymi lub kodem bez typów).

## Użycie

### Składnia

Funkcja:

- `isWeakMap(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a jest WeakMap w czasie wykonywania
}

console.log(isWeakMap(a)); // prawda
console.log(isWeakMap(b)); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isWeakMap(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 13:26:35 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>