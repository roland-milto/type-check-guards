# isUndefined

Prüft, ob ein Wert `undefined` ist.

## Wofür wird `isUndefined` verwendet?

Die Funktion stellt sicher, dass ein Wert explizit den Typ `undefined` hat. Dies ist nützlich für die Validierung von
optionalen Parametern oder um sicherzustellen, dass eine Variable noch nicht initialisiert wurde.

> **Hinweis für TypeScript-Nutzer:** Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf
`undefined`.

## Verhalten

`isUndefined` gibt `true` zurück, wenn der Wert vom Typ `undefined` ist.
In allen anderen Fällen (z. B. `null`, Zahlen, Strings oder Booleans) wird `false` zurückgegeben.

| Eingabe     | Ausgabe |
|-------------|---------|
| `undefined` | `true`  |
| `void 0`    | `true`  |
| `null`      | `false` |
| `0`         | `false` |
| `false`     | `false` |
| `""`        | `false` |

## Verwendung

```ts
import {isUndefined} from "@type-check/guards";

let x: unknown;
isUndefined(x);         // true
isUndefined(null);      // false

// TypeScript Beispiel
const value: string | undefined = undefined;

if (isUndefined(value)) {
  // value ist hier automatisch vom Typ 'undefined'
  console.log("Wert ist nicht gesetzt");
}
```