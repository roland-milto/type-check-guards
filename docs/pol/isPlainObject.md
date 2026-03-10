# isPlainObject

## Opis

Sprawdza, czy podana `value` jest zwykłym obiektem i zwraca `true`, jeśli tak; w przeciwnym razie `false`.

### Przypadek użycia

Zweryfikuj, że wejście typu `unknown` (np. sparsowany JSON, dane zewnętrzne lub argumenty funkcji) jest zwykłym
obiektem, zanim odczytasz klucze lub zmapujesz je do typowanego obiektu konfiguracji.

> **Wskazówka dla użytkowników TypeScript:**
>
> `isPlainObject` jest przydatne do zawężania `unknown` przed traktowaniem go jako obiektu podobnego do rekordu; zwraca
`true` wyłącznie dla wartości, których wewnętrzny tag to `[object Object]`.

### Zalety

- Zapewnia proste i niezawodne sprawdzenie, czy wartość jest zwykłym obiektem (tj. `Object` / `{}`), zwracając `true`
  lub `false`.
- Pomaga odróżnić zwykłe obiekty od tablic, funkcji, `null` oraz innych typów niebędących zwykłymi obiektami.
- Przydatne jako strażnik typu w TypeScript do zawężania wartości `unknown` przed uzyskaniem dostępu do właściwości
  obiektu.

## Użycie

### Składnia

Funkcja:

- `isPlainObject(value)`

Parametry:

- `value`: Wartość do sprawdzenia pod kątem bycia zwykłym obiektem.

### Lokalny import funkcji

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input jest tutaj zwykłym obiektem
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // prawda
console.log(isPlainObject([])); // fałsz
console.log(isPlainObject(null)); // fałsz
```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.isPlainObject(value)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Plik został wygenerowany 6 lutego 2026 12:19:19 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>