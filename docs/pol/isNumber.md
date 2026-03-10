# isNumber

## Opis

`isNumber` sprawdza, czy wartość jest skończoną liczbą, która nie jest `NaN`.

### Przypadek użycia

Waliduj dane liczbowe z niezaufanych źródeł (formularze, parametry zapytania, ładunki JSON) przed obliczeniami, zapisem
lub sprawdzaniem zakresu, zapewniając, że przechodzą (`true`) wyłącznie liczby skończone, a wszystko inne zwraca
`false`.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `isNumber`, aby zwalidować wartości typu `unknown` przed wykonywaniem działań arytmetycznych; odrzuca `NaN`,
`Infinity` oraz `-Infinity`.

### Zalety

- Zwraca `true` wyłącznie dla rzeczywistych liczb JavaScript (sprawdzenie typu oraz odrzucenie `NaN` i nieskończoności).
- Zapobiega typowym błędom walidacji, w których `NaN`, `Infinity` lub `-Infinity` przypadkowo przechodzą jako liczby.
- Działa dobrze jako strażnik w czasie wykonywania dla nieznanego wejścia (np. JSON, dane użytkownika, zewnętrzne API).
- Proste, szybkie i bez efektów ubocznych.

## Użycie

### Składnia

Funkcja:

- `isNumber(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input jest prawidłową skończoną liczbą
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 12:27:28 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>