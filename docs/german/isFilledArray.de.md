# isFilledArray

Prüft, ob ein Wert ein Array ist, das mindestens ein Element enthält.

## Wofür wird `isFilledArray` verwendet?

Die Funktion kombiniert die Prüfung auf den Typ `Array` mit einer Überprüfung der Länge.
Dies ist hilfreich, um sicherzustellen, dass Datenstrukturen nicht nur vorhanden, sondern auch mit Inhalten befüllt
sind, bevor Iterationen oder Berechnungen durchgeführt werden.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `unknown[]`.

## Verhalten

`isFilledArray` gibt `true` zurück, wenn der Wert ein Array ist und die Eigenschaft `.length` größer als 0 ist.

| Eingabe  | Ausgabe |
|----------|---------|
| `[1, 2]` | `true`  |
| `["a"]`  | `true`  |
| `[]`     | `false` |
| `{}`     | `false` |
| `null`   | `false` |

## Verwendung

```ts
import {isFilledArray} from "@type-check/guards";

isFilledArray([42]); // true
isFilledArray([]);   // false

// TypeScript Beispiel
const data: unknown = [1, 2, 3];

if (isFilledArray(data)) {
  // data wird hier als unknown[] behandelt und ist garantiert nicht leer
  console.log(`Erstes Element: ${data[0]}`);
}
```