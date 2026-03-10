# isOfType

## Opis

Określa, czy podana `value` pasuje do wskazanego ciągu typu, używając `typeof` dla prymitywów oraz mechanizmu awaryjnego
dla typów złożonych.

### Przypadek użycia

Waliduj i zawężaj wejścia typu `unknown` (np. odpowiedzi API, dane użytkownika, sparsowany JSON), sprawdzając, czy
wartość ma oczekiwany typ w postaci ciągu znaków, zanim wykonasz operacje specyficzne dla danego typu.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isOfType`, aby rozgałęziać logikę na podstawie typów w czasie wykonania podczas pracy z wartościami `unknown`;
> zwraca `true`/`false` i traktuje `null` oraz `undefined` w sposób jawny.

### Zalety

- Sprawdza typy prymitywne za pomocą bezpośredniego `typeof`, co zapewnia szybkość i czytelność.
- Poprawnie obsługuje `null` i `undefined`, których samo `typeof` nie potrafi rozróżnić zgodnie z oczekiwaniami.
- Obsługuje złożone lub niestandardowe ciągi typów dzięki porównaniu awaryjnemu z użyciem `getTypeOf`.
- Zwraca prosty wynik logiczny (`true`/`false`), odpowiedni do strażników typów i rozgałęzień.

## Użycie

### Składnia

Funkcja:

- `isOfType(value, type)`

Parametry:

- `value`: Wartość do sprawdzenia względem `type`.
- `type`: Tekstowa reprezentacja typu, względem którego ma zostać wykonane sprawdzenie.

### Lokalny import funkcji

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input jest tutaj liczbą
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input jest tutaj ciągiem znaków
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isOfType(value, type)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 17:05:52 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>