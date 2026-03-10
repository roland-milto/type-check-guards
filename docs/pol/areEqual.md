# areEqual

## Opis

`areEqual` sprawdza, czy wszystkie elementy w tablicy są równe podanej oczekiwanej wartości, zwracając `true` tylko dla
niepustych tablic, w których każdy element pasuje.

### Przypadek użycia

Zweryfikuj, że lista zawiera wyłącznie jedną dozwoloną wartość (np. wszystkie flagi statusu to `true`, wszystkie role to
`"admin"` lub wszystkie wpisy liczbowe są równe wymaganej stałej), traktując puste dane wejściowe jako nieprawidłowe (
`false`).

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areEqual`, gdy potrzebujesz ścisłego sprawdzenia wszystkich elementów; zwraca `false` dla pustych tablic oraz
> dla dowolnego wejścia, które nie jest tablicą lub nie jest wypełnione.

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element odpowiada oczekiwanej wartości; w przeciwnym razie zwraca `false`.
- Szybko kończy działanie: przestaje sprawdzać, gdy tylko zostanie znaleziony element niepasujący.
- Chroni przed nieprawidłowymi danymi wejściowymi, zwracając `false`, gdy wejście nie jest wypełnioną tablicą.

## Użycie

### Składnia

Funkcja:

- `areEqual(value, expected)`

Parametry:

- `value`: Tablica do sprawdzenia.
- `expected`: Element, z którym porównywany jest każdy element tablicy.

### Lokalny import funkcji

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areEqual(value, expected)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:51:53 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>