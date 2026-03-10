# isFinite

## Opis

Określa, czy podana `value` jest skończoną `number`.

### Przypadek użycia

Użyj `isFinite`, aby zwalidować nieznane dane wejściowe (np. z JSON, formularzy lub API) przed wykonaniem obliczeń
numerycznych, upewniając się, że wartość jest rzeczywistą, skończoną liczbą.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isFinite` zwraca `true` wyłącznie dla liczb skończonych; zwraca `false` dla `NaN`, `Infinity` oraz każdej wartości
> niebędącej liczbą.

### Zalety

- Używa wbudowanej funkcji `Number.isFinite`, aby zapewnić niezawodne sprawdzanie skończoności.
- Zwraca `true` wyłącznie dla liczb skończonych; zwraca `false` dla `NaN`, `Infinity` oraz wartości niebędących
  liczbami.
- Prosty predykat bez efektów ubocznych, odpowiedni do walidacji oraz logiki ochronnej (guard).

## Użycie

### Składnia

Funkcja:

- `isFinite(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem skończoności.

### Lokalny import funkcji

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers to: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value jest tutaj liczbą skończoną
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isFinite(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 16:31:21 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>