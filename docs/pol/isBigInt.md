# isBigInt

## Opis

`isBigInt` sprawdza, czy podana wartość jest typu `bigint`, zwracając `true` dla prymitywów BigInt i `false` w
przeciwnym razie.

### Przypadek użycia

Waliduj i zawężaj wartości pochodzące ze źródeł bez typów (np. parsowanie JSON, dane wejściowe użytkownika, zewnętrzne
API) przed wykonywaniem obliczeń specyficznych dla BigInt lub zapisywaniem ich w polach przeznaczonych wyłącznie dla
BigInt.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isBigInt`, aby zawęzić `unknown` do `bigint` przed wykonywaniem arytmetyki BigInt (np. `+`, `*`), która wymaga
> operandów BigInt.

### Zalety

- Zapewnia proste i niezawodne sprawdzenie w czasie wykonywania dla prymitywnego typu `bigint`.
- Pomaga zawęzić wartości typu `unknown` przed wykonaniem operacji dostępnych wyłącznie dla BigInt.
- Unika fałszywych trafień: zwykłe liczby, ciągi znaków i inne typy zwracają `false`.

## Użycie

### Składnia

Funkcja:

- `isBigInt(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // prawda
console.log(isBigInt(10));  // fałsz
console.log(isBigInt("10")); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isBigInt(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:33:01 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>