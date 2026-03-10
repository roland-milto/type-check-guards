# areOfType

## Opis

Sprawdza, czy wszystkie elementy w podanej `array` są określonego `type`.

### Przypadek użycia

Użyj `areOfType`, aby zweryfikować nieznane dane wejściowe (np. sparsowany JSON, payloady API, dane od użytkownika)
przed wykonaniem operacji zależnych od typu na każdym elemencie tablicy.

> **Wskazówka dla użytkowników TypeScript:**
>
> Ponieważ `areOfType` jest strażnikiem typów, TypeScript zawęża tablicę wewnątrz bloku `if (areOfType(...)) {}` do
`Array<DataTypeOf<T>>`.

### Zalety

- Zapewnia strażnika typów TypeScript: gdy zwraca `true`, wejście jest zawężane do `Array<DataTypeOf<T>>`.
- Waliduje każdy element względem żądanego typu w czasie wykonania, zapobiegając przejściu tablic o mieszanych typach.
- Szybko kończy działanie: zwraca `false` natychmiast po znalezieniu elementu, który nie pasuje.
- Z założenia odrzuca wartości niebędące tablicami oraz puste tablice (zależy od `isFilledArray`).

## Użycie

### Składnia

Funkcja:

- `areOfType(array, type)`

Parametry:

- `array`: Tablica do sprawdzenia.
- `type`: Typ, względem którego należy sprawdzić każdy element w tablicy.

### Lokalny import funkcji

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values jest teraz typu number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areOfType(array, type)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 17:11:02 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>