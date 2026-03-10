# getTypeOf

## Opis

`getTypeOf` zwraca szczegółową, czytelną dla człowieka etykietę typu dla podanej wartości, w tym doprecyzowane typy
liczbowe oraz konkretne rodzaje obiektów.

### Przypadek użycia

Użyj `getTypeOf`, aby ujednolicić wykrywanie typów w walidacji danych wejściowych i diagnostyce — na przykład, aby
odrzucać `nan`, akceptować wyłącznie identyfikatory typu `integer`, traktować stringi liczbowe takie jak `decimal`
inaczej niż zwykły `string`, albo logować precyzyjne rodzaje obiektów, takie jak `date` i `regexp`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Typ zwracany to `DataTypeAsString | string`. Traktuj go jako etykietę opisową; przy rozgałęzieniach porównuj z znanymi
> literałami, takimi jak `integer`, `float`, `nan`, `array`, `null` i `undefined`.

### Zalety

- Zwraca bardziej szczegółowy opis typu niż JavaScriptowe `typeof`, w tym podtypy liczbowe takie jak `integer`, `float`
  i `nan`.
- Rozróżnia `null` i `undefined` wprost jako `null` oraz `undefined`.
- Wykrywa typowe formaty liczb zapisanych jako string i raportuje je jako `binary`, `octal`, `decimal` lub `hexadecimal`
  zamiast zwykłego `string`.
- Identyfikuje także tablice jako `array` i używa `Object.prototype.toString`, aby podać konkretne nazwy typów
  obiektów (np. `date`, `regexp`, `map`, `set`).
- Jest bardzo przydatne do walidacji, logowania i debugowania, gdy potrzebne są spójne, czytelne dla człowieka etykiety
  typów.

## Użycie

### Składnia

Funkcja:

- `getTypeOf(value)`

Parametry:

- `value`: Wartość, dla której należy określić typ danych.

### Lokalny import funkcji

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Przykładowe sprawdzenia
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.getTypeOf(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 13:14:11 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>