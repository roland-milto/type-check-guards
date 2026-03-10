# isDate

## Opis

`isDate` określa, czy podana wartość jest typu `Date`, zwracając `true` dla instancji `Date` i `false` w przeciwnym
razie.

### Przypadek użycia

Waliduj i zawężaj nieznane wartości (np. dane żądania, wartości konfiguracji lub sparsowany JSON) przed wykonywaniem
operacji na `Date`, takich jak formatowanie, porównania lub wywołanie `toISOString()`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isDate`, aby zawęzić `unknown` do `Date` w czasie wykonywania; zwraca `true` tylko dla rzeczywistych instancji
`Date` (nie dla stringów z datą).

### Zalety

- Zapewnia prostą ochronę w czasie wykonywania, aby zweryfikować, czy wartość jest typu `Date`.
- Pomaga zapobiegać błędom typów, zapewniając, że walidację przechodzą wyłącznie instancje `Date`.
- Jest przydatne do walidowania nieznanych danych wejściowych (np. payloadów API) przed użyciem metod specyficznych dla
  dat.

## Użycie

### Składnia

Funkcja:

- `isDate(value)`

Parametry:

- `value`: Wartość, która ma zostać sprawdzona pod kątem typu `Date`.

### Lokalny import funkcji

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input jest tutaj typu Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isDate(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isDate](../_analysis/isDate.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 15:47:25 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>