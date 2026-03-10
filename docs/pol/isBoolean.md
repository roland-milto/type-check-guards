# isBoolean

## Opis

Określa, czy podana wartość jest typu `boolean`.

### Przypadek użycia

Waliduj dane zewnętrzne lub nietypowane (np. zmienne środowiskowe, ładunki JSON, parametry zapytań), aby upewnić się, że
wartość jest typu `boolean` przed użyciem jej w logice warunkowej.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isBoolean`, aby zawęzić typ `unknown` do `boolean` przed zastosowaniem operacji logicznych.

### Zalety

- Proste i szybkie sprawdzenie w czasie wykonywania przy użyciu `typeof`.
- Pomaga zweryfikować nieznane dane wejściowe przed zastosowaniem logiki specyficznej dla wartości logicznych.
- Zwraca przewidywalny wynik typu `boolean` (`true`/`false`).

## Użycie

### Składnia

Funkcja:

- `isBoolean(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input jest tutaj typu boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isBoolean(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:37:33 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>