# areNumbers

## Opis

`areNumbers` sprawdza, czy wartość jest niepustą tablicą, w której wszystkie elementy są liczbami.

### Przypadek użycia

Waliduj dane dostarczone przez użytkownika lub API, aby upewnić się, że są niepustą tablicą liczb przed obliczaniem sum,
średnich lub innych agregacji numerycznych.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areNumbers`, aby zweryfikować nieznane tablice przed wykonaniem obliczeń numerycznych; zwraca `false` dla
> pustych tablic oraz dla tablic zawierających jakąkolwiek wartość niebędącą liczbą.

### Zalety

- Zwraca `true` tylko wtedy, gdy dane wejściowe są niepustą tablicą i każdy element jest liczbą.
- Zapobiega fałszywym trafieniom, odrzucając puste tablice oraz dane wejściowe, które nie są tablicami.
- Przydatne jako strażnik przed operacjami numerycznymi (np. sumowaniem, uśrednianiem), aby uniknąć błędów w czasie
  wykonywania.

## Użycie

### Składnia

Funkcja:

- `areNumbers(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem elementów będących liczbami.

### Lokalny import funkcji

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areNumbers(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 12:44:07 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>