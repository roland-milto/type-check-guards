# areDates

## Opis

`areDates` określa, czy dana tablica jest wypełniona i zawiera wyłącznie obiekty `Date`, zwracając `true` tylko wtedy,
gdy wszystkie elementy są prawidłowymi datami.

### Przypadek użycia

Użyj `areDates` do walidacji nieznanego wejścia (np. sparsowanego JSON, danych formularza, payloadów API) przed
uruchomieniem logiki specyficznej dla dat, takiej jak sortowanie według czasu, formatowanie lub obliczanie zakresów.

> **Wskazówka dla użytkowników TypeScript:**
>
> Zwraca `true` tylko dla niepustych tablic, w których każdy element jest `Date`; puste tablice zwracają `false`.

### Zalety

- Zapewnia, że tablica nie jest pusta przed walidacją jej zawartości, zapobiegając zwróceniu `true` dla pustych danych
  wejściowych.
- Weryfikuje, że każdy element jest instancją `Date`, zwracając `false` natychmiast przy pierwszej niezgodności.
- Przydatne jako sprawdzenie w stylu guard przed wykonywaniem operacji specyficznych dla dat na elementach tablicy.

## Użycie

### Składnia

Funkcja:

- `areDates(array)`

Parametry:

- `array`: Tablica do sprawdzenia pod kątem obiektów `Date`.

### Lokalny import funkcji

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // prawda
console.log(areDates(b)); // fałsz
console.log(areDates(c)); // fałsz

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areDates(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areDates](../_analysis/areDates.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 15:31:59 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>