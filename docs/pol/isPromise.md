# isPromise

## Opis

Określa, czy podana wartość jest `Promise`.

### Przypadek użycia

Użyj `isPromise`, aby zweryfikować nieznane dane wejściowe przed potraktowaniem ich jako `Promise`, np. podczas obsługi
wartości zwracanych przez wtyczki, dynamiczne importy lub luźno typowane API.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isPromise` sprawdza za pomocą `instanceof Promise`, więc zwraca `true` tylko dla rzeczywistych instancji `Promise` (
> nie dla ogólnych thenables).

### Zalety

- Zapewnia proste sprawdzenie w czasie wykonywania, czy wartość jest `Promise`.
- Pomaga zabezpieczyć ścieżki kodu, które wymagają rzeczywistej instancji `Promise`, przewidywalnie zwracając `true` lub
  `false`.
- Unika fałszywych trafień dla obiektów „thenable” (np. `{ then() {} }`), wymagając faktycznej instancji `Promise`.

## Użycie

### Składnia

Funkcja:

- `isPromise(value)`

Parametry:

- `value`: Wartość do sprawdzenia.

### Lokalny import funkcji

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // prawda
console.log(isPromise(b)); // fałsz
console.log(isPromise(123)); // fałsz
console.log(isPromise(null)); // fałsz

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isPromise(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Plik został wygenerowany 30 stycznia 2026 23:53:59 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>