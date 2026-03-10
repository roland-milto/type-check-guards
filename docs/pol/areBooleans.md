# areBooleans

## Opis

`areBooleans` sprawdza, czy dana niepusta tablica zawiera wyłącznie wartości typu boolean, zwracając `true`, jeśli tak
jest, w przeciwnym razie `false`.

### Przypadek użycia

Waliduj dane dostarczone przez użytkownika lub z zewnętrznych źródeł (np. ładunki JSON, parametry zapytania, tablice
konfiguracji), aby upewnić się, że niepusta lista zawiera wyłącznie booleany, zanim zastosujesz logikę boolean lub
przekażesz ją do API, które oczekuje `boolean[]`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areBooleans`, aby zweryfikować `unknown[]` przed traktowaniem go jako `boolean[]`; zwraca `false` dla pustych
> tablic, więc obsłuż ten przypadek jawnie, jeśli pusta lista powinna być dozwolona.

### Zalety

- Zwraca `true` tylko wtedy, gdy każdy element jest typu boolean, a wejście jest niepustą tablicą.
- Zapobiega fałszywym trafieniom, odrzucając puste tablice (zwraca `false`).
- Dobrze sprawdza się jako strażnik w czasie wykonywania przed operacjami wyłącznie na booleanach (np. `every`, `some`,
  redukcje logiczne).

## Użycie

### Składnia

Funkcja:

- `areBooleans(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem elementów typu boolean.

### Lokalny import funkcji

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areBooleans(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 14:41:57 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>