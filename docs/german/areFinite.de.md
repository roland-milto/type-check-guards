# areFinite

Prüft, ob alle Werte in einem Array endliche Zahlen sind.

## Wofür wird `areFinite` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus validen, endlichen Zahlen besteht.
Sie stellt sicher, dass mathematische Operationen auf dem gesamten Datensatz sicher durchgeführt werden können, ohne auf
unendliche Werte oder Typfehler zu stoßen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `number[]`.

## Verhalten

`areFinite` gibt `true` zurück, wenn alle Elemente im Array vom Typ `number` und endlich sind.
Sobald ein einzelnes Element `NaN`, `Infinity` oder kein Zahlen-Typ ist, wird `false` zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[1, 2, 3]`         | `true`  |
| `[1.5, -10, 0]`     | `true`  |
| `[1, NaN, 3]`       | `false` |
| `[1, Infinity]`     | `false` |
| `[1, "2"]`          | `false` |
| `[]` (leeres Array) | `false` |
| `[null]`            | `false` |

## Verwendung

```ts
import {areFinite} from "@type-check/guards";

areFinite([1, 2, 3]);       // true
areFinite([1, Infinity]);    // false

// TypeScript Beispiel
const coordinates: unknown[] = [10.5, 20.0, -5.2];

if (areFinite(coordinates)) {
  // coordinates wird hier automatisch als number[] behandelt
  const sum = coordinates.reduce((acc, val) => acc + val, 0);
  console.log(`Summe der Koordinaten: ${sum}`);
}
```