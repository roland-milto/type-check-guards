# areNumbers

Prüft, ob alle Werte in einem Array endliche Zahlen sind.

## Wofür wird `areNumbers` verwendet?

Die Funktion validiert eine Liste von Werten darauf, ob sie ausschließlich aus gültigen, endlichen Zahlen besteht.
Sie ist ideal, um Datenreihen für mathematische Berechnungen oder Diagramme zu prüfen, wobei ungültige Werte wie `NaN`
oder `Infinity` ausgeschlossen werden sollen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `number[]`.

## Verhalten

`areNumbers` gibt `true` zurück, wenn alle Elemente im Array vom Typ `number` und endlich sind.
Sobald ein Element `NaN`, `Infinity`, ein String oder ein anderer Nicht-Zahlen-Typ ist, wird `false` zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[1, 2.5, -3]`      | `true`  |
| `[0, 10, 100]`      | `true`  |
| `[1, NaN, 3]`       | `false` |
| `[1, Infinity, 3]`  | `false` |
| `[1, "2", 3]`       | `false` |
| `[]` (leeres Array) | `false` |
| `[null, undefined]` | `false` |

## Verwendung

```ts
import {areNumbers} from "@type-check/guards";

areNumbers([1.1, 2.2, 3.3]); // true
areNumbers([1, NaN]);        // false
areNumbers([1, "2"]);        // false

// TypeScript Beispiel
const values: unknown[] = [10.5, 20.1];

if (areNumbers(values)) {
  // values wird hier automatisch als number[] behandelt
  const average = values.reduce((a, b) => a + b, 0) / values.length;
  console.log(average);
}
```