# isDecimal

## Opis

`isDecimal` sprawdza, czy wartość jest reprezentacją liczby dziesiętnej w postaci ciągu znaków, bez wiodących/końcowych
białych znaków i z poprawnym formatem dziesiętnym.

### Przypadek użycia

Waliduj pola formularzy, ładunki API lub wartości konfiguracyjne, które muszą być podane jako ciąg dziesiętny (
opcjonalnie ze znakiem) bez jakichkolwiek otaczających białych znaków, przed ich parsowaniem lub zapisaniem.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isDecimal`, aby zwalidować dane wejściowe użytkownika przed ich konwersją (np. za pomocą `Number(value)`),
> zwłaszcza gdy białe znaki muszą być odrzucane.

### Zalety

- Ściśle weryfikuje, że wejście jest ciągiem znaków i pasuje do wzorca literału dziesiętnego.
- Odrzuca wiodące i końcowe białe znaki (w tym znaki kontrolne), aby uniknąć niejednoznacznego parsowania.
- Szybkie wstępne sprawdzenia (kontrola typu oraz pierwszego/ostatniego znaku) przed uruchomieniem wyrażenia
  regularnego.
- Zwraca prosty wynik logiczny (`true`/`false`), odpowiedni do strażników (guards) i walidacji danych wejściowych.

## Użycie

### Składnia

Funkcja:

- `isDecimal(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem formatu ciągu dziesiętnego.

### Lokalny import funkcji

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v jest tutaj ciągiem znaków (zweryfikowane w czasie wykonywania)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isDecimal(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 15:54:11 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>