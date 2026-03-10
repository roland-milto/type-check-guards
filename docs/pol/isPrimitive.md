# isPrimitive

## Opis

`isPrimitive` określa, czy dana wartość jest prymitywem (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Przypadek użycia

Waliduj dane wejściowe w czasie działania (np. pola ładunku API, wartości konfiguracji lub dane podane przez
użytkownika), aby upewnić się, że wartość jest prymitywem przed serializacją, logowaniem lub zastosowaniem operacji
dostępnych tylko dla prymitywów.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isPrimitive`, aby zabezpieczyć wejścia typu `unknown` przed traktowaniem ich jako obiekty lub funkcje; zwraca
`true` dla prymitywów i `false` dla obiektów oraz funkcji.

### Zalety

- Szybkie, niewymagające alokacji sprawdzenie, czy wartość jest prymitywem JavaScript.
- Poprawnie traktuje `null` jako prymityw (mimo że `typeof null` to `"object"`).
- Pomaga zawęzić wartości typu `unknown` przed wykonaniem operacji przeznaczonych wyłącznie dla obiektów.

## Użycie

### Składnia

Funkcja:

- `isPrimitive(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem typu prymitywnego.

### Lokalny import funkcji

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isPrimitive(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:57:26 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>