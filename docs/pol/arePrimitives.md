# arePrimitives

## Opis

`arePrimitives` ocenia, czy wszystkie elementy w podanej, niepustej tablicy są typami prymitywnymi.

### Przypadek użycia

Zweryfikuj, że dane wejściowe (np. parametry zapytania, wartości wiersza CSV lub lista ID/tagów) zawierają wyłącznie
wartości prymitywne przed serializacją, haszowaniem, logowaniem lub przekazaniem ich do API, które nie może otrzymywać
obiektów.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `arePrimitives`, gdy musisz upewnić się, że `unknown[]` zawiera wyłącznie wartości prymitywne (string, number,
> bigint, boolean, symbol, undefined lub null) przed dalszym przetwarzaniem.

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element jest wartością prymitywną, co czyni ją ścisłą ochroną dla tablic „bez
  obiektów/funkcji”.
- Szybko przerywa działanie: zwraca `false` natychmiast po znalezieniu elementu niebędącego prymitywem.
- Zwraca także `false` dla wartości niebędących tablicami oraz dla pustych tablic (poprzez sprawdzenie, czy tablica jest
  wypełniona), zapobiegając przypadkowemu zaakceptowaniu nieprawidłowych danych wejściowych.

## Użycie

### Składnia

Funkcja:

- `arePrimitives(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem elementów typu prymitywnego.

### Lokalny import funkcji

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // prawda
const r2 = arePrimitives(b); // prawda
const r3 = arePrimitives(c); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.arePrimitives(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 00:06:09 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>