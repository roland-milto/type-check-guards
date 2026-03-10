# areSymbols

## Opis

Sprawdza, czy dane wejściowe jest wypełnioną tablicą, której elementy są wyłącznie symbolami, zwracając `true` lub
`false`.

### Przypadek użycia

Zweryfikuj, że pole konfiguracji (np. lista unikalnych kluczy reprezentowanych jako symbole) jest niepustą tablicą
zawierającą wyłącznie symbole, zanim użyjesz go w API, które wymaga `symbol[]`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areSymbols`, aby zweryfikować nieznane dane wejściowe przed traktowaniem ich jako `symbol[]`; zwraca `false` dla
> nietablic i pustych tablic.

### Zalety

- Zwraca `true` tylko wtedy, gdy dane wejściowe jest niepustą tablicą i każdy element jest symbolem.
- Zapobiega fałszywym trafieniom, odrzucając nietablice i puste tablice dzięki wewnętrznemu sprawdzeniu wypełnionej
  tablicy.
- Przydatne jako strażnik typu w czasie wykonywania do walidacji list zawierających wyłącznie symbole przed dalszym
  przetwarzaniem.

## Użycie

### Składnia

Funkcja:

- `areSymbols(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem elementów będących symbolami.

### Lokalny import funkcji

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a jest tablicą zawierającą wyłącznie symbole w czasie wykonywania
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areSymbols(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:23:29 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>