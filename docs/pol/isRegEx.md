# isRegEx

## Opis

Określa, czy podana wartość jest instancją `RegExp`.

### Przypadek użycia

Waliduj wartości podane przez użytkownika lub dynamiczne (np. konfigurację, ładunki API, wejścia wtyczek) przed
potraktowaniem ich jako wyrażenia regularnego.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isRegEx`, aby zawęzić wartości typu `unknown` (lub unii) przed użyciem właściwości lub metod specyficznych dla
> RegExp; zwraca `true` tylko dla wartości będących instancjami `RegExp`.

### Zalety

- Zapewnia prosty strażnik typu w czasie wykonywania, aby sprawdzić, czy wartość jest `RegExp`.
- Pomaga zapobiegać błędom, gdy kod oczekuje wyrażenia regularnego (np. przed wywołaniem `test`, `exec` lub odczytaniem
  `source`).
- Działa zarówno z literałami regex, jak i instancjami utworzonymi przez `new RegExp(...)`.
- Zwraca jednoznaczny wynik logiczny (`true`/`false`) bez rzucania wyjątków dla wejść niebędących regex.

## Użycie

### Składnia

Funkcja:

- `isRegEx(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input jest tutaj wyrażeniem regularnym (RegExp)
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isRegEx(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:30:40 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>