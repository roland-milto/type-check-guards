# areBuffers

## Opis

`areBuffers` sprawdza, czy podana wartość jest niepustą, wypełnioną tablicą, w której każdy element jest `Buffer`,
zwracając `true` w takim przypadku i `false` w przeciwnym razie.

### Przypadek użycia

Waliduj przychodzące tablice fragmentów (np. ze strumieni, przesyłania plików lub pakietów sieciowych), aby upewnić się,
że wszystkie części są instancjami `Buffer` przed ich łączeniem, dekodowaniem lub przekazywaniem do funkcji
kryptograficznych albo przetwarzania binarnego.

> **Wskazówka dla użytkowników TypeScript:**
>
> Użyj `areBuffers`, aby zweryfikować `unknown[]` przed wywołaniem API specyficznych dla Buffer, takich jak
`Buffer.concat`, upewniając się, że funkcja zwraca `true` tylko wtedy, gdy każdy element jest `Buffer`.

### Zalety

- Zapewnia, że każdy element wejścia jest instancją Node.js `Buffer`, zwracając `true` tylko wtedy, gdy pasuje cała
  tablica.
- Wcześnie odrzuca nieprawidłowe dane wejściowe, wymagając niepustej, wypełnionej tablicy; zwraca `false` dla pustych
  tablic lub wartości niebędących tablicami.
- Przydatne jako strażnik przed wykonywaniem operacji wyłącznie na buforach (np. konkatenacja, haszowanie, protokoły
  binarne).

## Użycie

### Składnia

Funkcja:

- `areBuffers(array)`

Parametry:

- `array`: Tablica, która ma zostać sprawdzona pod kątem instancji bufora.

### Lokalny import funkcji

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globalny import obiektu

Aby zaimportować funkcje jako globalne metody obiektu, użyj:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Następująca metoda będzie wtedy dostępna globalnie:

- `Type.areBuffers(array)`

## Analiza funkcji

Tutaj udokumentowano tabelaryczną analizę wyników uzyskiwanych przy podstawianiu różnych parametrów do
funkcji: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Plik został wygenerowany 31 stycznia 2026 16:26:51 (UTC) z użyciem *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** przez *
*[Roland Milto](https://roland-milto.de/)**.</small>