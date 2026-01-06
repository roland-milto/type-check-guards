# areArrays

Prüft, ob ein Wert ein zweidimensionales Array ist (ein Array von Arrays).

## Wofür wird `areArrays` verwendet?

Diese Funktion validiert, ob eine Struktur eine Matrix oder eine Liste von Listen ist.
Sie stellt sicher, dass sowohl der Hauptwert ein Array ist als auch jedes darin enthaltene Element wiederum ein Array
darstellt.
Dies ist nützlich für die Verarbeitung von Tabellendaten oder Koordinatensystemen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `unknown[][]`.

## Verhalten

`areArrays` gibt `true` zurück, wenn der Wert ein Array ist und jedes seiner Elemente ebenfalls ein Array ist.
Ein leeres Array gibt `false` zurück.
Sobald ein einzelnes Element kein Array ist, wird ebenfalls `false` zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[[1], [2]]`        | `true`  |
| `[[], []]`          | `true`  |
| `[[1], 2]`          | `false` |
| `[]` (leeres Array) | `false` |
| `["text"]`          | `false` |

## Verwendung

```ts
import {areArrays} from "@type-check/guards";

areArrays([[1, 2], [3, 4]]); // true
areArrays([1, 2, 3]);        // false

// TypeScript Beispiel
const matrix: unknown = [[10], [20, 30]];

if (areArrays(matrix)) {
  // matrix wird hier automatisch als unknown[][] behandelt
  const firstElement = matrix[0][0];
  console.log(firstElement);
}
```