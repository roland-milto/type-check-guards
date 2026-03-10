# areValidDates

## Opis

Określa, czy tablica jest niepusta i składa się wyłącznie z prawidłowych obiektów `Date`.

### Przypadek użycia

Użyj `areValidDates`, aby zweryfikować tablice dostarczone przez użytkownika lub API przed wykonaniem operacji na
datach (sortowanie, sprawdzanie zakresu, formatowanie), upewniając się, że wszystkie wpisy są rzeczywistymi,
prawidłowymi obiektami `Date` oraz że lista nie jest pusta.

> **Wskazówka dla użytkowników TypeScript:**
>
> `areValidDates` zwraca `false` dla pustej tablicy; upewnij się, że tablica ma być niepusta, zanim oprzesz się na tym
> jako kroku walidacji.

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element jest prawidłową instancją `Date` (bez nieprawidłowych dat, takich jak
  `new Date('invalid')`).
- Odrzuca puste dane wejściowe, zwracając `false`, co zapewnia, że akceptujesz wyłącznie sensowne, niepuste listy dat.
- Zapewnia prostą, boolowską kontrolę w stylu guard, którą łatwo łączyć z innymi walidacjami.

## Użycie

### Składnia

Funkcja:

- `areValidDates(array)`

Parametry:

- `array`: Tablica do sprawdzenia, potencjalnie zawierająca obiekty `Date`.

### Lokalny import funkcji

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // prawda
console.log(areValidDates(b)); // fałsz
console.log(areValidDates(c)); // fałsz
console.log(areValidDates(d)); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areValidDates(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:33:29 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>