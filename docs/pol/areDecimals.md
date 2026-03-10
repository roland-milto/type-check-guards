# areDecimals

## Opis

Sprawdza, czy wszystkie elementy w tablicy są liczbami dziesiętnymi oraz czy tablica jest wypełniona, zwracając `true`
lub `false`.

### Przypadek użycia

Waliduj listy dostarczone przez użytkownika (np. kolumny CSV lub dane z formularza), aby upewnić się, że tablica nie
jest pusta i każdy wpis jest wartością dziesiętną przed parsowaniem lub obliczeniami.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areDecimals`, gdy potrzebujesz szybkiego sprawdzenia boolean, że `unknown[]` nie jest puste i każdy element jest
> reprezentacją liczby dziesiętnej.

### Zalety

- Zapewnia, że wejście jest wypełnioną tablicą przed walidacją elementów, zapobiegając przypadkowemu zaakceptowaniu
  pustych list.
- Waliduje każdy element za pomocą `isDecimal`, więc mieszane lub nieprawidłowe wartości powodują natychmiastowy wynik
  `false`.
- Zapewnia prosty wynik logiczny (`true`/`false`), odpowiedni dla strażników (guards) i przepływów walidacji z wczesnym
  zwrotem.

## Użycie

### Składnia

Funkcja:

- `areDecimals(array)`

Parametry:

- `array`: Tablica do sprawdzenia.

### Lokalny import funkcji

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // prawda
console.log(areDecimals(b)); // fałsz
console.log(areDecimals(c)); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areDecimals(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 15:58:46 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>