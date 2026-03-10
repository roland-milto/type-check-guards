# isFloat

## Opis

`isFloat` określa, czy podana `value` jest skończoną liczbą zmiennoprzecinkową (tj. `number`, która nie jest liczbą
całkowitą).

### Przypadek użycia

Waliduj podane przez użytkownika dane liczbowe, gdy wymagane są wartości ułamkowe (np. ceny, pomiary, stawki) i odrzucaj
liczby całkowite, `NaN` oraz nieskończoności.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isFloat`, gdy musisz akceptować wyłącznie skończone, niecałkowite wartości liczbowe; odrzuca liczby całkowite i
> liczby nieskończone.

### Zalety

- Zwraca `true` wyłącznie dla skończonych liczb niebędących liczbami całkowitymi (wyklucza liczby całkowite, `NaN`,
  `Infinity` oraz `-Infinity`).
- Działa z dowolnym typem wejścia (`unknown`) i bezpiecznie zawęża typ, sprawdzając `typeof value === "number"`.
- Używa wbudowanych strażników liczbowych (`Number.isInteger`, `Number.isFinite`) dla przewidywalnego działania.

## Użycie

### Składnia

Funkcja:

- `isFloat(value)`

Parametry:

- `value`: Wartość, która ma zostać sprawdzona, czy jest liczbą zmiennoprzecinkową.

### Lokalny import funkcji

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // wartość jest liczbą w czasie wykonywania; jest skończona i nie jest liczbą całkowitą
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isFloat(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 16:09:24 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>