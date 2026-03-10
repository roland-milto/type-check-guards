# isTrue

## Opis

`isTrue` określa, czy podana wartość jest ściśle równa `true`.

### Przypadek użycia

Użyj `isTrue` do walidacji flag, przełączników funkcji (feature toggles) lub wartości konfiguracji, gdzie akceptowany
powinien być wyłącznie literał `true`, a wszystko inne musi być traktowane jako `false`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isTrue`, gdy musisz akceptować wyłącznie literał boolowski `true`, a nie jedynie wartości prawdziwe (truthy).

### Zalety

- Zapewnia ścisłe sprawdzenie literału boolowskiego `true` (bez konwersji typów).
- Pomaga odróżnić `true` od wartości prawdziwych (truthy), takich jak `1`, `"true"` lub `{}`.
- Proste, przewidywalne zachowanie odpowiednie dla strażników (guards) i potoków walidacji.

## Użycie

### Składnia

Funkcja:

- `isTrue(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // prawda
const b = isTrue(1);         // fałsz
const c = isTrue("true");   // fałsz

if (isTrue(a)) {
  // a jest tutaj prawdą
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isTrue(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 13:45:56 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>