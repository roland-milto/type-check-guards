# areHexadecimals

## Opis

Sprawdza, czy wszystkie elementy w tablicy są ciągami szesnastkowymi, zwracając `true` tylko dla niepustych tablic, w
których każdy element jest poprawny.

### Przypadek użycia

Użyj `areHexadecimals`, aby zweryfikować dane wprowadzane przez użytkownika lub dane zewnętrzne (np. identyfikatory,
sumy kontrolne, kody kolorów bez wiodącego '#') przed wykonaniem parsowania szesnastkowego lub dalszego przetwarzania.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areHexadecimals`, aby zweryfikować nieznane dane wejściowe przed parsowaniem lub konwersją wartości (na przykład
> przed `parseInt(value, 16)` albo konwersjami do BigInt).

### Zalety

- Sprawdza, czy każdy element jest ciągiem szesnastkowym, i zwraca `true` tylko wtedy, gdy wszystkie elementy pasują.
- Z założenia odrzuca puste tablice, zwracając `false` w przypadku braku danych wejściowych.
- Zapewnia prosty wynik logiczny (`true`/`false`), odpowiedni dla strażników (guards) i walidacji z wczesnym zwrotem.

## Użycie

### Składnia

Funkcja:

- `areHexadecimals(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem elementów będących ciągami szesnastkowymi.

### Lokalny import funkcji

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areHexadecimals(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:07:34 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>