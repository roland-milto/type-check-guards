# isHexadecimal

## Opis

`isHexadecimal` sprawdza, czy podana wartość jest literałem ciągu szesnastkowego z obowiązkowym prefiksem `0x`/`0X`.

### Przypadek użycia

Użyj `isHexadecimal` do walidacji wartości konfiguracji, pól ładunku API lub argumentów CLI, które muszą być podane jako
literały ciągów szesnastkowych (np. identyfikatory, maski lub adresy) i nie mogą zawierać otaczających białych znaków.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isHexadecimal`, gdy musisz zweryfikować dane wejściowe użytkownika lub dane zserializowane jako ścisły literał
> ciągu szesnastkowego (wraz z prefiksem `0x`/`0X`) przed ich parsowaniem lub konwersją.

### Zalety

- Sprawdza, czy wartość jest ciągiem znaków i czy odpowiada ścisłemu formatowi literału szesnastkowego (wymaga prefiksu
  `0x`/`0X`).
- Odrzuca ciągi z wiodącymi lub końcowymi białymi znakami, pomagając uniknąć przypadkowej akceptacji danych wejściowych
  z dopełnieniem.
- Obsługuje opcjonalny znak oraz nie rozróżnia wielkości liter dla prefiksu i cyfr, przewidywalnie zwracając `true`/
  `false`.

## Użycie

### Składnia

Funkcja:

- `isHexadecimal(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // prawda
isHexadecimal("-0Xff"); // prawda
isHexadecimal("1A2B"); // fałsz (brak prefiksu)
isHexadecimal(" 0x1A2B"); // fałsz (początkowe białe znaki)
isHexadecimal(0x1a2b); // fałsz (to nie jest ciąg znaków)
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isHexadecimal(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:00:22 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>