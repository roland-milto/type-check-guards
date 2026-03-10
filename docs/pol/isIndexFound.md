# isIndexFound

## Opis

`isIndexFound` określa, czy podana wartość jest nieujemną liczbą całkowitą, co oznacza, że indeks został znaleziony.

### Przypadek użycia

Zweryfikuj, że wynik wyszukiwania reprezentuje użyteczny indeks (liczba całkowita `>= 0`) przed indeksowaniem tablicy
lub łańcucha, zapobiegając przypadkowemu użyciu `-1` lub wartości nienumerycznych.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isIndexFound` po operacjach takich jak `indexOf`, `findIndex` lub wyszukiwaniach niestandardowych, gdzie `-1` (
> lub inne nieprawidłowe wartości) mogą oznaczać „nie znaleziono”. Gdy zwraca `true`, wartość jest liczbą i można jej
> bezpiecznie użyć jako indeksu tablicy/łańcucha.

### Zalety

- Zapewnia prosty strażnik typu do wykrywania, czy indeks został znaleziony, poprzez sprawdzenie nieujemnej liczby
  całkowitej.
- Zwraca `true` wyłącznie dla prawidłowych wartości podobnych do indeksu (liczby całkowite `>= 0`), odrzucając wartości
  ujemne, niecałkowite oraz nieliczbowe.
- Pomaga unikać błędów typu off-by-one oraz pomyłek z wartościami wartowniczymi podczas pracy z API, które zwracają `-1`
  dla „nie znaleziono”.

## Użycie

### Składnia

Funkcja:

- `isIndexFound(value)`

Parametry:

- `value`: Wartość do sprawdzenia, czy jest nieujemną liczbą całkowitą.

### Lokalny import funkcji

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx jest tutaj liczbą i jest >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typowe użycie z indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isIndexFound(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 00:47:31 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>