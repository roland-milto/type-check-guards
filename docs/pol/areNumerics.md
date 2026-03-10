# areNumerics

## Opis

`areNumerics` sprawdza, czy wartość jest niepustą tablicą, w której wszystkie elementy są liczbami.

### Przypadek użycia

Użyj `areNumerics` do walidacji danych zewnętrznych lub nietypowanych (np. ładunków JSON, parametrów zapytań, danych z
formularzy) przed obliczaniem sum, średnich lub innych operacji numerycznych, upewniając się, że wejście jest niepustą
tablicą liczb, a w przeciwnym razie zwracając `false`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areNumerics` do zabezpieczenia danych wejściowych typu `unknown` przed traktowaniem ich jako tablicy liczb;
> zwraca `false` dla wartości niebędących tablicami oraz dla pustych tablic.

### Zalety

- Zwraca `true` tylko wtedy, gdy wejście jest niepustą tablicą i każdy element jest liczbą.
- Szybko przerywa: kończy sprawdzanie, gdy tylko zostanie znaleziony nieliczbowy element, zwracając `false`.
- Pomaga bezpiecznie zweryfikować nieznane dane wejściowe przed wykonaniem operacji numerycznych.

## Użycie

### Składnia

Funkcja:

- `areNumerics(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem elementów liczbowych.

### Lokalny import funkcji

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // prawda
console.log(areNumerics(b)); // prawda
console.log(areNumerics(c)); // fałsz
console.log(areNumerics(d)); // fałsz
console.log(areNumerics(e)); // fałsz

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areNumerics(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 16:07:00 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>