# isOneOfType

## Opis

`isOneOfType` określa, czy podana `value` pasuje do co najmniej jednego z dostarczonych łańcuchów typów, zwracając
`true`, jeśli znaleziono jakiekolwiek dopasowanie, w przeciwnym razie `false`.

### Przypadek użycia

Waliduj luźno typowane lub zewnętrzne dane (np. sparsowany JSON, parametry zapytania), dopuszczając wiele akceptowalnych
typów w runtime (takich jak `number` lub `string`) przed przejściem do dalszej logiki.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isOneOfType`, gdy chcesz wykonać sprawdzenie w runtime, że wartość pasuje do któregokolwiek z kilku dozwolonych
> typów; zwraca `true`, jeśli co najmniej jeden typ pasuje, w przeciwnym razie `false`.

### Zalety

- Sprawdza wartość względem wielu dozwolonych typów w jednym wywołaniu, zwracając `true` przy pierwszym dopasowaniu.
- Działa z danymi wejściowymi typu `unknown`, co czyni ją przydatną na granicach runtime (np. dane zewnętrzne, dane od
  użytkownika).
- Zapewnia prosty wynik logiczny (`true`/`false`), który dobrze komponuje się z logiką warunkową i wczesnymi zwrotami.

## Użycie

### Składnia

Funkcja:

- `isOneOfType(value, types)`

Parametry:

- `value`: Wartość, która ma zostać sprawdzona względem określonych typów.
- `types`: Tablica łańcuchów typów reprezentujących potencjalne typy wartości.

### Lokalny import funkcji

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input jest obiektem w czasie wykonywania
}

console.log(isOneOfType(3, ["number", "string"])); // prawda
console.log(isOneOfType("hello", ["number", "boolean"])); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isOneOfType(value, types)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 13:53:55 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>