# areNaNs

Prüft, ob ein Wert ein nicht-leeres Array ist, das ausschließlich aus `NaN` besteht.

## Wofür wird `areNaNs` verwendet?

Diese Funktion ist nützlich, um Datensätze zu validieren, die das Ergebnis fehlgeschlagener Massen-Berechnungen sind.
Sie stellt sicher, dass eine Liste vorhanden ist und jedes einzelne Element eine ungültige Zahl darstellt.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `number[]`.

## Verhalten

`areNaNs` gibt `true` zurück, wenn der Hauptwert ein gefülltes Array ist und jedes seiner Elemente exakt `NaN` ist.
Ein leeres Array gibt `false` zurück.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[NaN, NaN]`        | `true`  |
| `[NaN, 123]`        | `false` |
| `[NaN, "NaN"]`      | `false` |
| `[]` (leeres Array) | `false` |

## Verwendung

```ts
import {areNaNs} from "@type-check/guards";

areNaNs([NaN, NaN]); // true
areNaNs([NaN, 0]);   // false

// TypeScript Beispiel
const dataPoints: unknown[] = [NaN, NaN];

if (areNaNs(dataPoints)) {
  // dataPoints wird hier als number[] behandelt
  console.log("Der gesamte Datensatz ist ungültig.");
}
```