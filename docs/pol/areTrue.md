# areTrue

## Opis

Sprawdza, czy niepusta tablica zawiera wyłącznie wartości logiczne `true`.

### Przypadek użycia

Użyj `areTrue`, aby zweryfikować, że zestaw warunków wstępnych lub flag funkcji jest w całości włączony (wszystkie
wartości to `true`) przed kontynuowaniem, traktując puste lub błędnie sformułowane dane wejściowe jako niespełnione (
`false`).

> **Wskazówka dla użytkowników TypeScript:**
>
> `areTrue` zwraca `false` dla pustej tablicy oraz dla tablic zawierających jakąkolwiek wartość, która nie jest ściśle
> równa `true`.

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element jest ściśle równy `true` i tablica nie jest pusta.
- Szybko kończy działanie: zwraca `false` natychmiast po znalezieniu wartości różnej od `true`.
- Odrzuca nieprawidłowe dane wejściowe (nietablice lub puste tablice), zwracając `false`.

## Użycie

### Składnia

Funkcja:

- `areTrue(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem tego, czy wszystkie wartości są równe `true`.

### Lokalny import funkcji

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areTrue(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 13:52:27 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>