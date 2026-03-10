# isOctal

## Opis

Określa, czy wartość jest poprawnym ciągiem znaków literału ósemkowego (np. `0o755`).

### Przypadek użycia

Waliduj dane wejściowe użytkownika lub wartości konfiguracji, które muszą być wyrażone jako ciąg znaków literału
ósemkowego (na przykład tryby uprawnień plików takie jak `0o644`) przed ich parsowaniem lub konwersją.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isOctal` jest strażnikiem typu (`value is string`). Po wyniku `true` TypeScript zawęża sprawdzaną zmienną do
`string`.

### Zalety

- Zapewnia ścisły strażnik typu: zwraca `true` tylko wtedy, gdy wejście jest ciągiem znaków pasującym do formatu
  literału ósemkowego.
- Odrzuca puste ciągi oraz ciągi z wiodącymi/końcowymi białymi znakami (ASCII control/space), zmniejszając ryzyko
  przypadkowych dopasowań.
- Obsługuje opcjonalny znak i nie rozróżnia wielkości liter dla prefiksu `0o`/`0O`.
- Jest wyrozumiała dla wejść niebędących stringami, zwracając `false` zamiast rzucać wyjątek.

## Użycie

### Składnia

Funkcja:

- `isOctal(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // prawda
console.log(isOctal(b)); // prawda
console.log(isOctal(c)); // fałsz
console.log(isOctal(d)); // fałsz

if (isOctal(a)) {
  // a jest tutaj ciągiem znaków
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isOctal(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 15:42:56 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>