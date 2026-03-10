# areStreams

## Opis

`areStreams` określa, czy wartość jest wypełnioną tablicą, w której każdy element jest `Stream`.

### Przypadek użycia

Waliduj kolekcje dostarczone przez użytkownika lub budowane dynamicznie (np. wiele strumieni odczytu plików) przed
przekierowywaniem (pipe), wznawianiem (resume) lub innymi operacjami na nich jako na grupie.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areStreams`, aby zweryfikować nieznane dane wejściowe przed traktowaniem ich jako `Stream[]`; zwraca `true`
> tylko wtedy, gdy wartość jest niepustą tablicą, a każdy element jest `Stream`.

### Zalety

- Zapewnia, że dane wejściowe jest wypełnioną tablicą, w której każdy element jest `Stream`.
- Zapewnia prostą ochronę `true`/`false` do walidacji kolekcji strumieni przed przetwarzaniem.
- Szybko kończy działanie: zwraca `false` natychmiast po znalezieniu elementu, który nie jest `Stream`.
- Pomaga zapobiegać błędom w czasie wykonywania, gdy kod zakłada, że wszystkie elementy są instancjami `Stream`.

## Użycie

### Składnia

Funkcja:

- `areStreams(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem obiektów Stream.

### Lokalny import funkcji

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input jest wypełnioną tablicą obiektów Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areStreams(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:35:17 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>