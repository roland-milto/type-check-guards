# isNumeric

## Opis

`isNumeric` określa, czy podana `value` jest uznawana za liczbową, porównując jej rozpoznany typ z `NUMERIC_TYPES`.

### Przypadek użycia

Użyj `isNumeric` do walidacji danych wejściowych (np. payloadów API, wartości formularzy, konfiguracji) przed
wykonywaniem operacji liczbowych oraz do spójnego akceptowania typów podobnych do liczbowych (takich jak `BigInt`)
zgodnie z `NUMERIC_TYPES`.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isNumeric` jest predykatem zwracającym wartość logiczną; traktuj go jako sprawdzenie w czasie wykonywania, czy
> wartość należy do zdefiniowanego przez bibliotekę zbioru typów liczbowych.

### Zalety

- Używa `getTypeOf` wraz z `NUMERIC_TYPES`, aby scentralizować logikę wykrywania typów liczbowych i zachować spójność
  sprawdzeń w całej bazie kodu.
- Zwraca prostą wartość logiczną (`true`/`false`) dla łatwego rozgałęziania i użycia w stylu guard.
- Obsługuje wiele reprezentacji liczbowych (np. `number`, `BigInt`) zgodnie z definicją w `NUMERIC_TYPES`.

## Użycie

### Składnia

Funkcja:

- `isNumeric(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem typu liczbowego.

### Lokalny import funkcji

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v jest uznawane za liczbowe zgodnie z regułami typów biblioteki
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isNumeric(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 15:54:12 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>