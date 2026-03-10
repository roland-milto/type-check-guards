# isFalse

## Opis

`isFalse` sprawdza, czy podana wartość jest ściśle równa literałowi boolean `false`.

### Przypadek użycia

Waliduj nieznane dane (np. z JSON, parametrów zapytania lub danych wejściowych użytkownika), gdy tylko jawna wartość
boolean `false` powinna być traktowana jako poprawna flaga, a wszystko inne powinno zostać odrzucone.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isFalse`, gdy musisz akceptować wyłącznie literał `false` i odrzucać wszystkie pozostałe wartości fałszywe (
> falsy); zwraca `true` tylko dla `value === false`.

### Zalety

- Zapewnia ścisłe sprawdzenie literału boolean `false` bez koercji.
- Pomaga odróżnić `false` od innych wartości fałszywych (falsy), takich jak `0`, `""`, `null` i `undefined`.
- Poprawia czytelność, ponieważ jasno wyraża intencję podczas walidacji nieznanego wejścia.

## Użycie

### Składnia

Funkcja:

- `isFalse(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input jest tutaj dokładnie false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isFalse(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 16:44:13 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>