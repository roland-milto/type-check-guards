# isObject

## Opis

Określa, czy podana `value` jest `object` (z wyłączeniem `null`).

### Przypadek użycia

Użyj `isObject` do walidacji nieznanych danych wejściowych (np. sparsowanego JSON, odpowiedzi API, ładunków zdarzeń)
przed dostępem do właściwości, upewniając się, że wartość jest obiektem, a nie `null`.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isObject` to strażnik czasu wykonywania, który zwraca wartość boolean; nie zawęża typu do konkretnego kształtu
> obiektu. Połącz go z dodatkowymi sprawdzeniami (np. istnienia właściwości), gdy potrzebujesz silniejszego typowania.

### Zalety

- Zwraca `true` wyłącznie dla wartości niebędących `null`, których `typeof` to `"object"`.
- Zapobiega częstej pułapce w JavaScript, w której `null` byłby inaczej traktowany jako obiekt.
- Działa dla zwykłych obiektów oraz wbudowanych instancji obiektów (np. `Date`, `RegExp`).
- Proste, szybkie sprawdzenie w czasie wykonywania, odpowiednie do programowania defensywnego i walidacji danych
  wejściowych.

## Użycie

### Składnia

Funkcja:

- `isObject(value)`

Parametry:

- `value`: Wartość, która ma zostać sprawdzona pod kątem bycia `object`.

### Lokalny import funkcji

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input jest obiektem niebędącym null w czasie wykonywania
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isObject(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isObject](../_analysis/isObject.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 00:20:00 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>