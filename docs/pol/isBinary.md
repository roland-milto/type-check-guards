# isBinary

## Opis

`isBinary` określa, czy wartość jest ciągiem binarnym (opcjonalnie z prefiksem `0b`/`0B`) i zwraca `true` lub `false`.

### Przypadek użycia

Waliduj ciągi podane przez użytkownika (np. pola formularza, argumenty CLI, wartości konfiguracji), aby upewnić się, że
zawierają wyłącznie cyfry binarne, opcjonalnie z prefiksem `0b`/`0B`, przed dalszym przetwarzaniem.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isBinary` jako strażnika typu przed parsowaniem lub konwersją ciągu na `BigInt`/`Number`, aby uniknąć
> nieprawidłowych danych wejściowych.

### Zalety

- Akceptuje ciągi binarne z prefiksem `0b`/`0B` lub bez niego.
- Odrzuca puste ciągi oraz ciągi z wiodącymi/końcowymi białymi znakami (ASCII ≤ 32).
- Zwraca `true`/`false` bez rzucania wyjątku, co czyni ją bezpieczną dla nieznanych danych wejściowych.

## Użycie

### Składnia

Funkcja:

- `isBinary(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // prawda
const b = isBinary("1010");   // prawda
const c = isBinary("0b1020"); // fałsz
const d = isBinary(0b1010);     // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isBinary(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 23:11:03 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>