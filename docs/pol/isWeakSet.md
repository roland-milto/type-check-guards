# isWeakSet

## Opis

Określa, czy podana wartość `value` jest `WeakSet` obiektów.

### Przypadek użycia

Użyj `isWeakSet` podczas przyjmowania nietypowanego wejścia (np. z zewnętrznych API, dynamicznej konfiguracji lub
wartości `unknown`), gdy musisz zweryfikować, że jest to `WeakSet`, zanim użyjesz operacji specyficznych dla `WeakSet`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isWeakSet`, aby zawęzić wartość typu `unknown` do `WeakSet<object>` w czasie wykonywania; pamiętaj, że `WeakSet`
> może zawierać wyłącznie referencje do obiektów.

### Zalety

- Zapewnia proste sprawdzenie w czasie wykonywania, czy wartość jest `WeakSet`.
- Pomaga zapobiegać błędom typów, zapewniając, że tylko instancje `WeakSet` są traktowane jako takie.
- Działa z dowolnym wejściem typu `unknown` i zwraca jednoznaczny wynik logiczny (`true`/`false`).

## Użycie

### Składnia

Funkcja:

- `isWeakSet(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // prawda
console.log(isWeakSet(b)); // fałsz

if (isWeakSet(a)) {
  // a jest WeakSetem w czasie wykonywania
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isWeakSet(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:18:52 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>