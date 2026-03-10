# areBinaries

## Opis

Sprawdza, czy podana wartość jest niepustą tablicą poprawnych ciągów binarnych i zwraca `true` tylko wtedy, gdy
wszystkie elementy przejdą walidację.

### Przypadek użycia

Użyj `areBinaries`, gdy otrzymujesz nieznaną listę (np. z JSON, formularzy lub API) i musisz upewnić się, że jest to
niepusta tablica ciągów binarnych przed jej parsowaniem lub przetwarzaniem.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areBinaries`, aby zweryfikować nieznane dane wejściowe przed konwersją ciągów binarnych na liczby/BigInty;
> zapewnia to, że tablica jest niepusta i każdy element jest poprawnym ciągiem binarnym.

### Zalety

- Sprawdza, czy wartość jest niepustą tablicą, w której każdy element jest poprawnym ciągiem binarnym.
- Zwraca prosty wynik logiczny (`true`/`false`), odpowiedni do strażników, wczesnych zwrotów i walidacji danych
  wejściowych.
- Zapobiega późniejszym błędom parsowania, odrzucając tablice zawierające jakikolwiek niebinarny wpis.

## Użycie

### Składnia

Funkcja:

- `areBinaries(array)`

Parametry:

- `array`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // prawda
console.log(areBinaries(b)); // fałsz
console.log(areBinaries([])); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areBinaries(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:15:41 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>