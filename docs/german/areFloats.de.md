# areFloats

Prüft, ob alle Werte in einem Array Fließkommazahlen sind.

## Wofür wird `areFloats` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus Dezimalzahlen besteht.
Dies ist hilfreich bei der Prüfung von Datensätzen für statistische Analysen oder Geodaten, um sicherzustellen, dass
keine reinen Ganzzahlen in der Serie enthalten sind.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `number[]`.

## Verhalten

`areFloats` gibt `true` zurück, wenn alle Elemente im Array Fließkommazahlen sind.
Ein leeres Array gibt `false` zurück.
Sobald ein Element eine Ganzzahl, ein String oder ein anderer Nicht-Zahlen-Typ ist, wird `false` zurückgegeben.

| Eingabe             | Ausgabe                    |
|---------------------|----------------------------|
| `[1.1, 2.2, 3.3]`   | `true`                     |
| `[1.5, 2]`          | `false` (enthält Ganzzahl) |
| `[1.1, NaN]`        | `false`                    |
| `[]` (leeres Array) | `false`                    |
| `[null]`            | `false`                    |

## Verwendung

```ts
import {areFloats} from "@type-check/strict";

areFloats([1.1, 0.99, -1.5]); // true
areFloats([1.1, 2]);          // false

// TypeScript Beispiel
const measurements: unknown[] = [10.5, 11.2, 9.8];

if (areFloats(measurements)) {
  // measurements wird hier automatisch als number[] behandelt
  const sum = measurements.reduce((a, b) => a + b, 0);
  console.log(`Summe der Messwerte: ${sum}`);
}
```