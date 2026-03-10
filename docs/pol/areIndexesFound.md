# areIndexesFound

## Opis

`areIndexesFound` sprawdza, czy wartość jest niepustą tablicą, której elementy są prawidłowymi indeksami, zwracając
`true`, jeśli tak jest, oraz `false` w przeciwnym razie.

### Przypadek użycia

Waliduj dane dostarczone przez użytkownika lub pochodzące z zewnątrz (np. sparsowany JSON), które mają być listą
indeksów, zanim użyjesz ich do dostępu do tablic lub ich wycinków.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areIndexesFound`, aby zweryfikować nieznane dane wejściowe przed traktowaniem ich elementów jako indeksów
> tablicy; zwraca `false` dla pustych tablic oraz dla tablic zawierających wartości niebędące indeksami.

### Zalety

- Zwraca `true` tylko wtedy, gdy wejście jest niepustą tablicą i każdy element jest prawidłowym indeksem.
- Szybko przerywa działanie: zwraca `false` natychmiast po napotkaniu elementu, który nie jest indeksem.
- Przydatne jako strażnik przed użyciem wartości jako pozycji w tablicy lub przesunięć (offsetów).

## Użycie

### Składnia

Funkcja:

- `areIndexesFound(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem zgodności z indeksami.

### Lokalny import funkcji

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // prawda
console.log(areIndexesFound(b)); // fałsz
console.log(areIndexesFound(c)); // fałsz

if (areIndexesFound(a)) {
  // Tutaj potwierdzono, że `a` jest wypełnioną tablicą indeksów.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areIndexesFound(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 01:03:53 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>