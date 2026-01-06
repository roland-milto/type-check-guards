# isFloat

Prüft, ob ein Wert eine Fließkommazahl (Dezimalzahl) ist.

## Wofür wird `isFloat` verwendet?

Die Funktion stellt sicher, dass ein Wert eine Zahl mit Nachkommastellen ist.
Dies ist nützlich für präzise Berechnungen, Koordinaten oder wissenschaftliche Daten, bei denen Ganzzahlen (Integers)
explizit ausgeschlossen werden sollen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `number`.

## Verhalten

`isFloat` gibt `true` zurück, wenn der Wert vom Typ `number` ist, endlich ist und Nachkommastellen besitzt.
Ganze Zahlen (z. B. `10` oder `10.0`) geben `false` zurück.

| Eingabe  | Ausgabe                              |
|----------|--------------------------------------|
| `3.14`   | `true`                               |
| `-0.5`   | `true`                               |
| `10`     | `false`                              |
| `10.0`   | `false` (wird als Ganzzahl gewertet) |
| `"3.14"` | `false`                              |
| `NaN`    | `false`                              |

## Verwendung

```ts
import {isFloat} from "@type-check/guards";

isFloat(1.5); // true
isFloat(10);  // false

// TypeScript Beispiel
const value: unknown = 42.7;

if (isFloat(value)) {
  // value wird hier automatisch als number behandelt
  console.log(`Dezimalwert: ${value.toFixed(2)}`);
}
```