# arePromises

## Opis

`arePromises` określa, czy wszystkie elementy w tablicy są instancjami `Promise`.

### Przypadek użycia

Zweryfikuj, że dynamicznie zbudowana lub dostarczona z zewnątrz lista zawiera wyłącznie obietnice, zanim je
zagregujesz (np. za pomocą `Promise.all`).

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `arePromises`, aby zweryfikować `unknown[]` przed wywołaniem `Promise.all` lub innych operacji przeznaczonych
> wyłącznie dla obietnic; zwraca `false` dla pustych tablic.

### Zalety

- Zapewnia, że każdy element jest `Promise`, zanim przejdziesz do logiki specyficznej dla obietnic.
- Zwraca `false` dla pustych tablic, zapobiegając niejednoznacznym wynikom dla pustych danych wejściowych.
- Przydatne jako strażnik w czasie wykonywania podczas pracy z `unknown[]` pochodzącym ze źródeł zewnętrznych.

## Użycie

### Składnia

Funkcja:

- `arePromises(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem wystąpień Promise.

### Lokalny import funkcji

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values jest tablicą instancji Promise w czasie wykonywania
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.arePromises(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:49:38 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>