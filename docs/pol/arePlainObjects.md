# arePlainObjects

## Opis

Sprawdza, czy wszystkie elementy tablicy są zwykłymi obiektami, zwracając `true` tylko wtedy, gdy każdy element spełnia
warunek.

### Przypadek użycia

Waliduj dane zewnętrzne lub nietypowane (np. sparsowany JSON, payloady API, wysyłki formularzy), aby upewnić się, że
otrzymano niepustą tablicę, w której każdy wpis jest zwykłym obiektem, zanim zaczniesz iterować i odczytywać
właściwości.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `arePlainObjects`, aby zweryfikować nieznane dane wejściowe, zanim potraktujesz je w TypeScript jako
`Record<string, unknown>[]` (lub bardziej restrykcyjny kształt obiektu).

### Zalety

- Zapewnia, że każdy element w tablicy wejściowej jest zwykłym obiektem, zwracając `true` tylko wtedy, gdy wszystkie
  elementy pasują.
- Odrzuca nieprawidłowe dane wejściowe na wczesnym etapie (nie-tablice lub puste tablice), zwracając `false`.
- Traktuje zarówno obiekty tworzone literałem obiektu, jak i obiekty `Object.create(null)` jako prawidłowe zwykłe
  obiekty.

## Użycie

### Składnia

Funkcja:

- `arePlainObjects(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem elementów będących zwykłymi obiektami.

### Lokalny import funkcji

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // prawda
const b = arePlainObjects([{}, Object.create(null)]); // prawda
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // fałsz
const d = arePlainObjects([] as unknown[]); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.arePlainObjects(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 16:55:29 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>