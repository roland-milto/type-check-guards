# areFinite

## Opis

`areFinite` sprawdza, czy wartość jest niepustą tablicą, której elementy są wyłącznie liczbami skończonymi, zwracając
`true` w takim przypadku i `false` w przeciwnym razie.

### Przypadek użycia

Waliduj tablice wejściowe z liczbami (np. serie wykresów, listy współrzędnych, próbki pomiarów) przed wykonywaniem
obliczeń, zapewniając, że wynik to `true` tylko wtedy, gdy wszystkie wartości są liczbami skończonymi.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areFinite`, gdy musisz upewnić się, że tablica jest niepusta i zawiera wyłącznie liczby skończone; zwraca
`false` dla pustych tablic oraz dla tablic zawierających `NaN` lub nieskończoności.

### Zalety

- Zwraca `true` tylko wtedy, gdy wejście jest niepustą tablicą, a każdy element jest liczbą skończoną.
- Odrzuca `Infinity`, `-Infinity` oraz `NaN`, opierając się na sprawdzeniach `isFinite` dla każdego elementu.
- Zapewnia prosty wynik logiczny (`true`/`false`), odpowiedni dla strażników (guards) i przepływów walidacji.

## Użycie

### Składnia

Funkcja:

- `areFinite(array)`

Parametry:

- `array`: Tablica, dla której ma zostać sprawdzona skończoność wszystkich jej elementów.

### Lokalny import funkcji

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // prawda
console.log(areFinite(b)); // fałsz
console.log(areFinite(c)); // fałsz

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areFinite(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 16:36:44 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>