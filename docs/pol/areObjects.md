# areObjects

## Opis

`areObjects` sprawdza, czy podana wypełniona tablica zawiera wyłącznie obiekty.

### Przypadek użycia

Użyj `areObjects`, gdy otrzymujesz nieznaną tablicę (np. z parsowania JSON lub zewnętrznych API) i musisz upewnić się,
że nie jest pusta oraz że każdy element jest obiektem, zanim zaczniesz iterować i uzyskiwać dostęp do właściwości
obiektów.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areObjects`, aby zweryfikować `unknown[]` przed traktowaniem elementów jako obiektów; zwraca `false` dla pustych
> tablic.

### Zalety

- Zwraca `true` tylko wtedy, gdy wejście jest wypełnioną tablicą i każdy element jest obiektem.
- Kończy wcześniej i zwraca `false` natychmiast po znalezieniu elementu, który nie jest obiektem.
- Pomaga zweryfikować nieznane dane wejściowe przed wykonaniem operacji specyficznych dla obiektów.

## Użycie

### Składnia

Funkcja:

- `areObjects(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem elementów będących obiektami.

### Lokalny import funkcji

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value jest wypełnioną tablicą obiektów
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areObjects(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 00:10:04 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>