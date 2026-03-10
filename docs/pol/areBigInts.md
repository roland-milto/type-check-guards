# areBigInts

## Opis

`areBigInts` określa, czy dana wartość jest niepustą tablicą zawierającą wyłącznie wartości typu `bigint`.

### Przypadek użycia

Waliduj nieznane dane wejściowe (np. sparsowane dane podobne do JSON, ładunki API lub parametry funkcji typowane jako
`unknown`), aby przed przetwarzaniem upewnić się, że jest to niepusta tablica wartości `bigint`; zwraca `true` tylko
wtedy, gdy wszystkie elementy są typu `bigint`, w przeciwnym razie `false`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areBigInts` jako strażnika w czasie wykonywania przed wykonywaniem operacji wyłącznie na `bigint` (np.
> arytmetyki, porównań) na nieznanym wejściu.

### Zalety

- Zapewnia, że każdy element jest typu `bigint`, zwracając `true` tylko wtedy, gdy pasuje cała tablica.
- Z założenia odrzuca wartości niebędące tablicami oraz puste tablice (przez `isFilledArray`), zapobiegając
  przypadkowemu zaakceptowaniu nieprawidłowych danych wejściowych.
- Szybkie przerwanie: zwraca `false` natychmiast po znalezieniu elementu niebędącego `bigint`.

## Użycie

### Składnia

Funkcja:

- `areBigInts(array)`

Parametry:

- `array`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // prawda
console.log(areBigInts(b)); // fałsz
console.log(areBigInts(c)); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areBigInts(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:27:06 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>