# isSet

## Opis

Określa, czy dana wartość jest `Set`.

### Przypadek użycia

Waliduj dane wejściowe ze źródeł zewnętrznych (np. parsowanie JSON, dane od użytkownika lub API firm trzecich), aby
upewnić się, że wartość jest `Set` przed wykonaniem operacji na `Set`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isSet`, aby zawęzić wartości typu `unknown` przed wywołaniem API specyficznych dla `Set`, takich jak `.add`,
`.has` lub `.size`.

### Zalety

- Zapewnia proste sprawdzenie w czasie wykonywania, aby potwierdzić, czy wartość jest `Set`.
- Pomaga zapobiegać błędom typów, umożliwiając wczesne rozgałęzienie, gdy wartość nie jest `Set`.
- Działa z dowolną zawartością `Set` (pustą lub wypełnioną) i konsekwentnie zwraca `true`/`false`.

## Użycie

### Składnia

Funkcja:

- `isSet(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a jest Setem w czasie wykonywania
  console.log(a.size);
}

console.log(isSet(b)); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isSet(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isSet](../_analysis/isSet.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:10:56 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>