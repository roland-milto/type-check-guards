# areWeakMaps

## Opis

`areWeakMaps` sprawdza, czy wartość jest niepustą tablicą, w której każdy element jest `WeakMap`, zwracając `true` tylko
w takim przypadku, a w przeciwnym razie `false`.

### Przypadek użycia

Waliduj dane w czasie wykonywania (np. sparsowany JSON, wejścia wtyczek lub luźno typowaną konfigurację), aby upewnić
się, że jest to niepusta tablica instancji `WeakMap`, zanim zaczniesz iterować i wywoływać metody `WeakMap`; zwraca
`false`, gdy którykolwiek element nie jest `WeakMap` lub gdy tablica jest pusta.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areWeakMaps`, aby zweryfikować nieznane wejście, zanim potraktujesz je jako niepustą `WeakMap[]`; dla pustych
> tablic zwraca `false`.

### Zalety

- Zapewnia, że każdy element w podanej tablicy jest instancją `WeakMap`.
- Zwraca `false` dla pustych tablic, zapobiegając przypadkowemu uznaniu „braku danych” za poprawne wejście.
- Przydatne jako strażnik przed wykonywaniem operacji specyficznych dla `WeakMap` na wszystkich elementach.

## Użycie

### Składnia

Funkcja:

- `areWeakMaps(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem instancji `WeakMap`.

### Lokalny import funkcji

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list jest niepustą tablicą instancji WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nie jest niepustą WeakMap[]
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areWeakMaps(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 13:39:00 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>