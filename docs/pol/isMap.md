# isMap

## Opis

Sprawdza, czy podana `value` jest `Map`, zwracając `true`, jeśli tak, i `false` w przeciwnym razie.

### Przypadek użycia

Użyj `isMap`, gdy otrzymujesz wartość typu `unknown` (np. z parsowania JSON, zewnętrznych API lub danych wejściowych
użytkownika) i musisz upewnić się, że jest to `Map`, zanim wykonasz operacje na `Map`.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isMap` to strażnik czasu wykonywania, który zwraca `true`, gdy wartość jest `Map`, i `false` w przeciwnym razie; użyj
> go do zawężenia typu `unknown` przed wywołaniem API `Map`.

### Zalety

- Zapewnia szybkie sprawdzenie w czasie wykonywania, czy wartość jest `Map`.
- Pomaga zapobiegać błędom typów, zabezpieczając ścieżki kodu, które wymagają metod `Map`, takich jak `get`, `set` i
  `has`.
- Dobrze sprawdza się jako lekki krok walidacji podczas obsługi danych wejściowych typu `unknown`.

## Użycie

### Składnia

Funkcja:

- `isMap(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isMap(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isMap](../_analysis/isMap.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 16:29:25 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>