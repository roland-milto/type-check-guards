# isSymbol

## Opis

`isSymbol` określa, czy dana wartość jest typu `symbol`, zwracając `true` dla symboli i `false` w przeciwnym razie.

### Przypadek użycia

Zweryfikuj, że wartość typu `unknown` jest `symbol`, zanim użyjesz jej jako unikalnego identyfikatora, klucza rejestru
lub obliczanego klucza właściwości w obiektach i mapach.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isSymbol`, aby zawęzić `unknown` do `symbol` przed wywołaniem funkcji związanych z symbolami lub użyciem go jako
> obliczanego klucza właściwości.

### Zalety

- Zapewnia proste i niezawodne sprawdzenie w czasie wykonywania dla prymitywnego typu JavaScript `symbol`.
- Pomaga zawęzić wartości typu `unknown` przed użyciem API specyficznych dla symboli lub przed użyciem ich jako kluczy.
- Unika fałszywych trafień dzięki użyciu `typeof`, które jest kanonicznym sposobem wykrywania wartości typu `symbol`.

## Użycie

### Składnia

Funkcja:

- `isSymbol(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input jest tutaj symbolem
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isSymbol(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:28:22 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>