# isOfType

Prüft, ob ein Wert einem bestimmten Datentyp entspricht.

## Wofür wird `isOfType` verwendet?

Die Funktion ermöglicht eine präzise Typprüfung gegen eine vordefinierte Liste von Datentypen (`DataTypes`).
Sie ist robuster als der Standard-Operator `typeof`, da sie komplexe Typen wie `array`, `date` oder `regexp` korrekt
identifiziert und gleichzeitig eine hohe Performance für primitive Typen bietet.

## Verhalten

`isOfType` gibt `true` zurück, wenn der Typ des Wertes exakt dem übergebenen Typparameter entspricht.
Für komplexe Typen wird eine interne Hilfsfunktion zur exakten Bestimmung genutzt.

| Eingabe      | Typ-Parameter | Ausgabe                |
|--------------|---------------|------------------------|
| `"Hallo"`    | `"string"`    | `true`                 |
| `[]`         | `"array"`     | `true`                 |
| `null`       | `"null"`      | `true`                 |
| `42`         | `"string"`    | `false`                |
| `new Date()` | `"object"`    | `false` (ist `"date"`) |

## Verwendung

```ts
import {isOfType} from "@type-check/guards";

isOfType("Roland Milto", "string"); // true
isOfType([], "array");              // true
isOfType(null, "null");             // true

// TypeScript Beispiel
const input: unknown = [1, 2, 3];

if (isOfType(input, "array")) {
  // input wird hier als passender Typ behandelt
  console.log(`Das Array hat ${input.length} Elemente.`);
}
```