# isPrimitive

Prüft, ob ein Wert ein primitiver Datentyp ist.

## Wofür wird `isPrimitive` verwendet?

Die Funktion validiert, ob ein Wert zu den Basis-Datentypen von JavaScript gehört.
Primitive Werte sind unveränderlich und besitzen keine eigenen Methoden oder Eigenschaften (auch wenn JavaScript sie
zeitweise in Objekte einpackt).
Dies ist nützlich für Deep-Clone-Algorithmen oder Serialisierungs-Logik.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard für die Typen `string`, `number`, `bigint`, `boolean`, `symbol`, `null` oder
`undefined`.

## Verhalten

`isPrimitive` gibt `true` zurück, wenn der Wert kein Objekt und keine Funktion ist.

| Eingabe     | Ausgabe |
|-------------|---------|
| `"Text"`    | `true`  |
| `42`        | `true`  |
| `true`      | `true`  |
| `null`      | `true`  |
| `undefined` | `true`  |
| `{}`        | `false` |
| `[]`        | `false` |
| `() => {}`  | `false` |

## Verwendung

```ts
import {isPrimitive} from "@type-check/strict";

isPrimitive(42);      // true
isPrimitive({a: 1}); // false

// TypeScript Beispiel
const value: unknown = "Hallo";

if (isPrimitive(value)) {
  // value wird hier als primitiver Typ behandelt
  console.log(`Primitiver Wert: ${String(value)}`);
}
```