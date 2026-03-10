# areFloats

## Opis

`areFloats` sprawdza, czy dana tablica jest wypełniona i czy wszystkie jej elementy są liczbami zmiennoprzecinkowymi.

### Przypadek użycia

Użyj `areFloats`, gdy otrzymujesz `unknown[]` (np. z JSON, parametrów zapytania lub zewnętrznych API) i musisz upewnić
się, że jest to niepusta tablica, w której każdy element jest liczbą zmiennoprzecinkową, zanim uruchomisz logikę
numeryczną, taką jak uśrednianie, interpolacja lub obliczenia statystyczne.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areFloats` do zabezpieczenia `unknown[]` zanim potraktujesz je jako `number[]` zawierające wyłącznie liczby
> zmiennoprzecinkowe; zwraca `false` dla pustych tablic oraz dla dowolnego elementu, który nie jest liczbą
> zmiennoprzecinkową.

### Zalety

- Zwraca `true` tylko wtedy, gdy wejście jest niepustą tablicą i każdy element jest liczbą zmiennoprzecinkową.
- Szybko przerywa: zwraca `false` natychmiast po znalezieniu elementu, który nie jest liczbą zmiennoprzecinkową.
- Pomaga zweryfikować nieznane dane wejściowe przed wykonaniem obliczeń specyficznych dla liczb zmiennoprzecinkowych.

## Użycie

### Składnia

Funkcja:

- `areFloats(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem elementów będących liczbami zmiennoprzecinkowymi.

### Lokalny import funkcji

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // prawda
console.log(areFloats(b)); // fałsz
console.log(areFloats(c)); // fałsz

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areFloats(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 15:59:11 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>