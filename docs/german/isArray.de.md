# isArray

Prüft, ob ein Wert ein Array ist.

## Wofür wird `isArray` verwendet?

Die Funktion stellt sicher, dass ein Wert eine Liste von Elementen (Array) ist.
Dies ist wichtig, um sicherzustellen, dass Array-Methoden wie `.map()`, `.filter()` oder `.forEach()` sicher aufgerufen
werden können, ohne Laufzeitfehler zu verursachen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `unknown[]`.

## Verhalten

`isArray` gibt `true` zurück, wenn der Wert ein Array ist.
In allen anderen Fällen (z. B. Objekte, Strings, `null` oder `undefined`) wird `false` zurückgegeben.

| Eingabe     | Ausgabe |
|-------------|---------|
| `[]`        | `true`  |
| `[1, 2, 3]` | `true`  |
| `{}`        | `false` |
| `"Array"`   | `false` |
| `null`      | `false` |

## Verwendung

```ts
import {isArray} from "@type-check/guards";

isArray([1, 2, 3]); // true
isArray({});        // false

// TypeScript Beispiel
const data: unknown = ["Apple", "Banana"];

if (isArray(data)) {
  // data wird hier automatisch als unknown[] behandelt
  console.log(`Anzahl der Elemente: ${data.length}`);
}
```