# areUndefined

## Opis

`areUndefined` sprawdza, czy każdy element w podanej tablicy ma wartość `undefined`.

### Przypadek użycia

Zweryfikuj, że lista opcjonalnych wyników nie zawiera żadnych rzeczywistych wartości (tylko `undefined`), np. po
mapowaniu wyników wyszukiwań, gdzie brakujące wpisy są reprezentowane jako `undefined`, i chcesz potwierdzić, że
wszystkie wyszukiwania zakończyły się niepowodzeniem.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areUndefined`, gdy musisz potwierdzić, że `unknown[]` zawiera wyłącznie wartości `undefined`; zwraca `false` dla
> pustych tablic oraz dla wejść niebędących tablicą/nieprawidłowych ze względu na wewnętrzne sprawdzenie
`isFilledArray`.

### Zalety

- Zwraca `false` dla obiektów niebędących tablicami oraz dla pustych tablic, ponieważ wymaga niepustej tablicy poprzez
  `isFilledArray`.
- Zapewnia, że każdy element ma wartość `undefined`, a nie tylko niektóre, co jednoznacznie wyraża intencję.
- Przydatne jako predykat w stylu guard podczas walidowania nieznanych kolekcji wejściowych.

## Użycie

### Składnia

Funkcja:

- `areUndefined(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem elementów `undefined`.

### Lokalny import funkcji

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // prawda
const r2 = areUndefined(b); // fałsz
const r3 = areUndefined(c); // fałsz

// Uwaga: zwraca fałsz dla pustych tablic
const r4 = areUndefined([]); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areUndefined(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 13:57:30 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>